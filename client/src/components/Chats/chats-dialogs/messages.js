import React from 'react';
import PropTypes from 'prop-types';
import Message from './message';
import withStyles from 'isomorphic-style-loader/withStyles';
import style from './messages.module.scss';
import ScrollToBottom from 'react-scroll-to-bottom';
import { connect } from 'react-redux';

function Messages({ chat: { messages } }) {

	if (!messages.length) {
		return (
			<div className={style.firstMessage}>
				<span>No messages, type a first message</span>
			</div>
		);
	}

	return (
		<ScrollToBottom className={style.messages}>
			{messages.map((message) => <div key={message.id}><Message message={message}/></div>)}
		</ScrollToBottom>
	);
}

Messages.propTypes = {
	chat: PropTypes.object,
};

const mapStateToProps = state => ({
	chat: state.userChats,
});

export default connect(
	mapStateToProps,
	null
) (withStyles(style)(React.memo(Messages)));
