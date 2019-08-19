import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";
// Utils
import isEmpty from "utils/isEmpty";
// Actions
import { getCategories, createCategory } from "actions/categoryActions";
import { Label, Input, Button } from "components/Controls";
import { Level, LevelSide } from "components/Layout";
/**
 * CategoryWidget
 *
 * @description Displays results based on user's search query, toggable form to create a new category, adds category to the 'NewChat' state
 * @todo Refactor into multiple smaller components
 */
class CategoryWidget extends Component {
	constructor(props) {
		super(props);

		this.state = {
			search: "",
			searchIsOpen: false,
			newCategoryName: "",
			name: "",
			results: []
		};
	}

	componentDidMount() {
		this.props.getCategories();
		// Add event listener for clicks outside of this component
		// Close the search results if the click is registered outside of the component
		document.addEventListener("click", e => this.handleFocus(e));
	}

	componentWillUnmount() {
		// Remove event listeners
		document.removeEventListener("click", e => this.handleFocus(e));
	}

	// Toggle the search results based on whether or not the search input has focus
	handleFocus(e) {
		if (this.search && this.search.contains(e.target)) {
			this.setState({ searchIsOpen: true });
		} else {
			this.setState({ searchIsOpen: false });
		}
	}

	// Handle change
	handleChange(name, value) {
		this.setState({ [name]: value });
	}

	// Creates new category
	handleCreateCategory(e) {
		e.preventDefault();

		this.props.createCategory({ name: this.state.newCategoryName });
		this.setState({ newCategoryName: "", formIsOpen: false });
	}

	// Search all categories by name to find a match
	// If no match is found, create the category
	handleSearch(name, value) {
		let { categories } = this.props.categories;
		// Remove leading/trailing whitespace & transform user query to lowercase
		let search = value
			.toString()
			.toLowerCase()
			.trim();
		let results = [];
		if (!isEmpty(search)) {
			for (let i = 0; i < categories.length; i++) {
				if (
					categories[i].name
						.toString()
						.toLowerCase()
						.indexOf(search) !== -1
				) {
					results.push(categories[i]);
				}
			}
		}

		this.setState({ [name]: value, results });
	}

	/**
	 *
	 * @param {string} name
	 * @param {object} value the category being added
	 */
	handleAddCategory(name, value) {
		this.props.handleAddCategory(name, value);
		this.setState({
			search: "",
			searchIsOpen: false,
			newCategoryName: "",
			name: "",
			results: []
		});
	}
	render() {
		const {
			search,
			searchIsOpen,
			formIsOpen,
			results,
			newCategoryName
		} = this.state;
		const { selectedCategory } = this.props;
		if (isEmpty(selectedCategory)) {
			return (
				<div className="category-widget">
					{formIsOpen ? (
						<>
							<Level>
								<LevelSide side="left">
									<Label label="Name" className="is-marginless" />
								</LevelSide>
								<LevelSide side="right">
									<a
										className="m-b-sm"
										onClick={() => this.setState({ formIsOpen: false })}
									>
										Cancel
									</a>
								</LevelSide>
							</Level>
							<div className="new-category">
								<Input
									type="text"
									value={newCategoryName}
									handleChange={(name, value) => this.handleChange(name, value)}
									placeholder="New category name"
									name="newCategoryName"
									autoComplete="off"
									aria-haspopup="false"
									autoCorrect="off"
									autoCapitalize="off"
									aria-autocomplete="both"
								/>
								<Button onClick={e => this.handleCreateCategory(e)}>
									Create
								</Button>
							</div>
						</>
					) : (
						<div ref={c => (this.search = c)}>
							<Level>
								<LevelSide side="left">
									<Label label="Category" className="is-marginless" />
								</LevelSide>
								<LevelSide side="right">
									<a
										className="m-b-sm"
										onClick={() => this.setState({ formIsOpen: true })}
									>
										Create New
									</a>
								</LevelSide>
							</Level>
							<input type="hidden" name="search" value={search} />
							<Input
								type="text"
								value={search}
								handleChange={(name, value) => this.handleSearch(name, value)}
								placeholder="Search categories"
								name="search"
								autoComplete="off"
								aria-haspopup="false"
								autoCorrect="off"
								autoCapitalize="off"
								aria-autocomplete="both"
								className={searchIsOpen ? "focused" : ""}
							/>

							{searchIsOpen && (
								<ul className="category-results">
									<AnimatePresence>
										{results.map((category, i) => (
											<motion.li
												key={i}
												positionTransition
												initial={{ opacity: 0 }}
												exit={{ opacity: 0 }}
												animate={{ opacity: 1 }}
												transition={{ type: "tween", duration: 0.2 }}
											>
												<Level isMarginless>
													<LevelSide side="left">
														<p>{category.name}</p>
													</LevelSide>
													<LevelSide side="right">
														<Button
															className="is-size-7"
															onClick={() =>
																this.handleAddCategory("category", category)
															}
														>
															Add
														</Button>
													</LevelSide>
												</Level>
											</motion.li>
										))}
									</AnimatePresence>
								</ul>
							)}
						</div>
					)}
				</div>
			);
		} else {
			return (
				<>
					<Level>
						<LevelSide side="left">
							<Label label="Category" className="is-marginless" />
						</LevelSide>
						<LevelSide side="right">
							<a
								className="m-b-sm"
								onClick={() => this.setState({ formIsOpen: true })}
							>
								Create New
							</a>
						</LevelSide>
					</Level>
					<div className="disabled-input-container">
						<Input
							type="text"
							value={selectedCategory}
							handleChange={(name, value) => this.handleSearch(name, value)}
							disabled
							name="name"
						/>
						<i
							className="fas fa-times clear-selected-category"
							onClick={() => this.handleAddCategory("category", "")}
						/>
					</div>
				</>
			);
		}
	}
}

CategoryWidget.propTypes = {
	getCategories: PropTypes.func.isRequired,
	createCategory: PropTypes.func.isRequired,
	categories: PropTypes.object.isRequired,
	errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	auth: state.auth,
	categories: state.categories,
	errors: state.errors
});

export default connect(
	mapStateToProps,
	{ getCategories, createCategory }
)(CategoryWidget);
