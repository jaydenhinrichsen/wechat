/**
 * Plop Template Generators
 *
 */
module.exports = plop => {
	/**
	 * component connected to redux state
	 *
	 */
	plop.setGenerator("rccwr", {
		description: "Create a connected component",
		prompts: [
			{
				type: "input",
				name: "path",
				message: "Path"
			}
		],
		actions: [
			{
				type: "add",
				path: "src/views/{{path}}/index.js",
				templateFile: "plop-templates/ClassWithRedux.js.hbs"
			}
		]
	});

	/**
	 * action
	 *
	 */
	plop.setGenerator("action", {
		description: "Create an actions file",
		prompts: [
			{
				type: "input",
				name: "name",
				message: "What is your component name?"
			}
		],
		actions: [
			{
				type: "add",
				path: "src/actions/{{name}}Actions.js",
				templateFile: "plop-templates/Action.js.hbs"
			}
		]
	});

	/**
	 * reducer
	 *
	 */
	plop.setGenerator("reducer", {
		description: "Create an reducers file",
		prompts: [
			{
				type: "input",
				name: "name",
				message: "What is your component name?"
			}
		],
		actions: [
			{
				type: "add",
				path: "src/reducers/{{name}}sReducer.js",
				templateFile: "plop-templates/Reducer.js.hbs"
			}
		]
	});
};
