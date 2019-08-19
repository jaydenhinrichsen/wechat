import React from "react";
import Heading from "components/Heading";
import { Level, LevelSide } from "components/Layout";

const Members = ({ members }) => {
	return (
		<div className="members">
			<Heading isMarginless size={3} weight={500} className="p-y-xs p-x-md">
				Members
			</Heading>

			{members.map((member, i) => (
				<Level className="p-x-lg p-b-sm" key={member._id}>
					<LevelSide side="left">
						<p>{member.firstName + " " + member.lastName}</p>
					</LevelSide>
				</Level>
			))}
		</div>
	);
};

export default Members;
