import React from "react";
import Heading from "components/Heading";
import { Level, LevelSide } from "components/Layout";

const Members = ({ members }) => {
	return (
		<div className="members">
			<Level className="page-topbar p-x-md">
				<LevelSide side="left">
					<Heading isMarginless size={3} weight={500}>
						Members
					</Heading>
				</LevelSide>
			</Level>
			{members.map((member, i) => (
				<Level className="p-x-lg p-b-sm">
					<LevelSide side="left">
						<p>{member.firstName + " " + member.lastName}</p>
					</LevelSide>
				</Level>
			))}
		</div>
	);
};

export default Members;
