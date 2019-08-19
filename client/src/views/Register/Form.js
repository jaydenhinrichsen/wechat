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
				Register
			</Heading>
			<form className="small-form" onSubmit={e => handleSubmit(e)}>
				<Label label="First Name">
					<Input
						type="text"
						placeholder="Albert"
						handleChange={(name, value) => handleChange(name, value)}
						value={fields.firstName}
						name="firstName"
					/>
				</Label>
				<Label label="Last Name">
					<Input
						type="text"
						placeholder="Einstein"
						handleChange={(name, value) => handleChange(name, value)}
						value={fields.lastName}
						name="lastName"
					/>
				</Label>
				<Label label="Email">
					<Input
						type="email"
						placeholder="example@gmail.com"
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
				<Label label="Confirm Password">
					<Input
						type="text"
						handleChange={(name, value) => handleChange(name, value)}
						value={fields.confirmPassword}
						name="confirmPassword"
					/>
				</Label>

				<Level isMarginless>
					<LevelSide side="left">
						<a className="is-size-7" href={paths.login.path}>
							Already have an account?
						</a>
					</LevelSide>
					<LevelSide side="right">
						<Button isColor="primary" isOutlined type="submit">
							Register
						</Button>
					</LevelSide>
				</Level>
			</form>
		</Box>
	);
};

export default Form;
