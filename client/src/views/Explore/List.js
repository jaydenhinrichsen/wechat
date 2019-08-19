import React from "react";
// Paths
import paths from "constants/paths";

// Styles

// Utils
import isEmpty from "utils/isEmpty";

// Components
import Loading from "components/Loading";
import { Level, LevelSide } from "components/Layout";
import BoxGroup from "components/BoxGroup";
import Box from "components/Box";
import Heading from "components/Heading";

const List = ({ chats, loading, loaded }) => {
	if (!isEmpty(chats) && loaded && !loading) {
		return (
			<BoxGroup>
				{chats.map(chat => (
					<Box key={chat._id}>
						<Level>
							<LevelSide side="left">
								<Heading className="is-marginless" size={4} weight={500}>
									{chat.name}
								</Heading>
							</LevelSide>
							<LevelSide side="right">
								<a href={`${paths.chat.path}/${chat._id}`}>Join</a>
							</LevelSide>
						</Level>
					</Box>
				))}
			</BoxGroup>
		);
	} else if (loading && !loaded) {
		return <Loading />;
	} else {
		return <></>;
	}
};

export default List;
