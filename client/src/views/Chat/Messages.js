import React, { forwardRef } from "react";
// Utils
import formatTimeStamp from "utils/formatTimeStamp";
const Messages = forwardRef(({ messages, user }, ref) => {
	return (
		<div className="messages-container" ref={ref}>
			<div className="messages">
				{messages.map((message, i) =>
					message.user._id === user._id ? (
						<div className="message-wrapper" key={i + user._id}>
							<div key={i} className="message sent">
								<span className="message-content">{message.content}</span>
								<p className="timestamp">
									{formatTimeStamp(message.timestamp)}
								</p>
							</div>
						</div>
					) : (
						<div className="message-wrapper" key={i + message.user._id}>
							<div className="message recieved">
								<p className="message-content">{message.content}</p>
								<p className="timestamp">
									{formatTimeStamp(message.timestamp)}
								</p>
							</div>
						</div>
					)
				)}
			</div>
		</div>
	);
});

export default Messages;
