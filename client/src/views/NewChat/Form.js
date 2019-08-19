import React from "react";

// Components
import { Input, Label, Button } from "components/Controls";
import Box from "components/Box";
import Heading from "components/Heading";
import CategoryWidget from "./CategoryWidget";

const Form = ({ fields, handleChange, handleSubmit, user, errors }) => {
	return (
		<>
			<Heading size={3} weight={700} className="text-center">
				New Chat
			</Heading>
			<Box>
				<form className="small-form" autoComplete="off">
					<Label label="Chat Name" error={errors.name}>
						<Input
							type="text"
							placeholder={`${user.firstName} ${user.lastName}'s chat`}
							handleChange={(name, value) => handleChange(name, value)}
							value={fields.name}
							name="name"
						/>
					</Label>
					<CategoryWidget
						selectedCategory={fields.category.name}
						handleAddCategory={(name, value) => handleChange(name, value)}
					/>
				</form>
			</Box>
			<Button
				className="m-t-md"
				isColor="primary"
				isOutlined
				isFullwidth
				onClick={e => handleSubmit(e)}
			>
				Continue
			</Button>
		</>
	);
};

export default Form;
