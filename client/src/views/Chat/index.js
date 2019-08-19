import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import io from "socket.io-client";
import autosize from "autosize";

// Actions
import { getChat } from "actions/chatActions";

// Utils
import isEmpty from "utils/isEmpty";

// Styles
import "./index.scss";

// Components
import withSidebar from "containers/withSidebar";
import PageTopbar from "components/PageTopbar";
import { Page } from "components/Layout";
import Messages from "./Messages";
import { Button } from "components/Controls";
import Members from "./Members";
import Loading from "components/Loading";

/** 
 * Chat
 * 

 */
class Chat extends Component {
	constructor(props) {
		super(props);
		// Create a ref of the messages container to set scroll position
		this.messagesContainer = React.createRef();

		this.user = this.props.auth.user;
		this.chat = this.props.match.params.chat;
		this.socket = io("http://localhost:5000", {
			query: `user=${JSON.stringify(this.user)}`
		});

		this.state = {
			messages: [],
			message: "",
			members: [],
			someoneTyping: false
		};
	}

	componentDidMount() {
		autosize(this.messageInput);

		// Fetch the previously saved messages
		this.props.getChat(this.chat);

		// Socket Events
		this.socket.emit("join_chat", this.chat);
		this.socket.on("chat_members", data => this.handleChatMembers(data));
		this.socket.on("message", data => this.handleIncomingMessage(data));
		this.socket.on("someone_typing", data => this.handleTyping(data));
		this.socket.on("someone_stopped_typing", data =>
			this.handleStoppedTyping(data)
		);
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.chats.chat !== this.props.chats.chat) {
			this.setState({ messages: nextProps.chats.chat.messages });
		}
	}

	componentWillUnmount() {
		// Leave the chat when the component unmounts
		this.socket.emit("leave_chat", this.chat);
	}

	handleTyping(data) {
		console.log(data);
		this.setState({ someoneTyping: true });
	}

	handleStoppedTyping(data) {
		console.log(data);
		this.setState({ someoneTyping: false });
	}

	// Handle an incoming message by pushing it into the state
	handleIncomingMessage(data) {
		console.log(data);
		let { messages } = this.state;
		messages.push(data);
		this.setState({ messages });
		this.messagesContainer.current.scrollTop = this.messagesContainer.current.scrollHeight;
	}

	// Set the current members of the chat
	handleChatMembers(data) {
		this.setState({ members: data });
	}

	// Handle user input
	handleChange(name, value) {
		this.setState({ [name]: value });

		if (!isEmpty(value)) {
			this.socket.emit("typing");
		} else {
			this.socket.emit("stopped_typing");
		}
		autosize.update(this.messageInput);
	}

	// Handle send message
	handleSendMessage(e) {
		e.preventDefault();
		let { message, messages } = this.state;

		// Add a timestamp to the message.
		let newMessage = {
			content: message,
			timestamp: new Date(),
			user: this.user
		};

		// Add this message to the state(because this user sent it)
		messages.push(newMessage);
		this.setState({ messages, message: "" });

		// Emit the message to the server
		this.socket.emit("message", newMessage);
		this.messageInput.style.height = "53px";

		this.messagesContainer.current.scrollTop = this.messagesContainer.current.scrollHeight;
	}
	render() {
		const { messages, message, someoneTyping, members } = this.state;
		const { chat, loading, loaded } = this.props.chats;

		return (
			<Page isFullheight>
				<div className="chat">
					<div className="main">
						{loading && !loaded ? (
							<Loading />
						) : (
							<>
								<PageTopbar title={chat.name} />
								<Messages
									messages={messages}
									user={this.user}
									ref={this.messagesContainer}
								/>
								<div className="message-form-container">
									{someoneTyping && (
										<p className="is-size-7 text-grey m-b-xs">
											Someone is typing...
										</p>
									)}
									<div className="message-form">
										<textarea
											className="message-input"
											placeholder="Type something..."
											value={message}
											name="message"
											onChange={e =>
												this.handleChange(e.target.name, e.target.value)
											}
											onKeyPress={e => {
												if (e.key === "Enter") {
													this.handleSendMessage(e);
												}
											}}
											ref={c => (this.messageInput = c)}
										/>
										<Button
											isColor="primary"
											onClick={e => this.handleSendMessage(e)}
										>
											Send
										</Button>
									</div>
								</div>
							</>
						)}
					</div>
					<div className="side">
						<Members members={members} />
					</div>
				</div>
			</Page>
		);
	}
}

Chat.propTypes = {
	getChat: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	chats: PropTypes.object.isRequired,
	errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
	auth: state.auth,
	chats: state.chats,
	errors: state.errors
});

export default connect(
	mapStateToProps,
	{ getChat }
)(withRouter(withSidebar(Chat)));
