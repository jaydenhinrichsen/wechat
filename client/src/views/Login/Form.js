import React from "react";

// Paths
import paths from "constants/paths";
// Components
import Box from "components/Box";
import Heading from "components/Heading";
import { Input, Label, Button } from "components/Controls";
import { Level, LevelSide } from "components/Layout";

const Form = ({ fields, handleChange, handleSubmit }) => {
	return (
		<Box>
			<Heading size={3} weight={500} className="text-center">
				Login
			</Heading>
			<form className="small-form" onSubmit={e => handleSubmit(e)}>
				<Label label="Email">
					<Input
						type="email"
						handleChange={(name, value) => handleChange(name, value)}
						value={fields.email}
						name="email"
					/>
				</Label>
				<Label label="Password">
					<Input
						type="text"
						handleChange={(name, value) => handleChange(name, value)}
						value={fields.password}
						name="password"
					/>
				</Label>

				<Level isMarginless>
					<LevelSide side="left">
						<a className="is-size-7" href={paths.register.path}>
							Don't have an account yet?
						</a>
					</LevelSide>
					<LevelSide side="right">
						<Button isColor="primary" isOutlined type="submit">
							Login
						</Button>
					</LevelSide>
				</Level>
			</form>
		</Box>
	);
};

export default Form;
