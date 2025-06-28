import React from 'react';

const ChatMessage = ({ content, isUser, avatar }) => {
  return (
    <div className={`chat-message ${isUser ? 'user-message' : 'bot-message'}`}>
      <div className="message-avatar">{avatar}</div>
      <div 
        className="message-content" 
        dangerouslySetInnerHTML={{ __html: content }} 
      />
    </div>
  );
};

export default ChatMessage;