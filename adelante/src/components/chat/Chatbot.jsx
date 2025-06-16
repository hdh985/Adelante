import React, { useState, useEffect, useRef } from 'react';
import ChatMessage from './ChatMessage';

const Chatbot = ({ 
  title, 
  subtitle, 
  icon, 
  messages, 
  onSendMessage, 
  quickQuestions = [],
  placeholder = "메시지를 입력하세요..."
}) => {
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (inputValue.trim()) {
      onSendMessage(inputValue.trim());
      setInputValue('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  const handleQuickQuestion = (question) => {
    onSendMessage(question);
  };

  return (
    <div className="chatbot-section">
      <div className="chatbot-header">
        <div className="chatbot-icon">{icon}</div>
        <div className="chatbot-title">{title}</div>
        <div className="chatbot-subtitle">{subtitle}</div>
      </div>
      
      <div className="chat-container">
        <div className="chat-messages">
          {messages.map((message, index) => (
            <ChatMessage
              key={index}
              content={message.content}
              isUser={message.isUser}
              avatar={message.isUser ? '👤' : icon}
            />
          ))}
          <div ref={messagesEndRef} />
        </div>
        
        {quickQuestions.length > 0 && (
          <div className="quick-questions">
            {quickQuestions.map((question, index) => (
              <div
                key={index}
                className="quick-question"
                onClick={() => handleQuickQuestion(question)}
              >
                {question}
              </div>
            ))}
          </div>
        )}
        
        <div className="chat-input-container">
          <input
            type="text"
            className="chat-input"
            placeholder={placeholder}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button className="chat-send-btn" onClick={handleSend}>
            <span>➤</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;