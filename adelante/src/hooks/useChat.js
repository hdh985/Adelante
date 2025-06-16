import { useState, useEffect, useRef } from 'react';
import { getBotResponse } from '../utils/helpers';

export const useChat = (initialMessage, responses) => {
  const [messages, setMessages] = useState([
    { content: initialMessage, isUser: false }
  ]);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = (message) => {
    setMessages(prev => [...prev, { content: message, isUser: true }]);
    
    setTimeout(() => {
      const response = getBotResponse(message, responses);
      setMessages(prev => [...prev, { content: response, isUser: false }]);
    }, 500);
  };

  return {
    messages,
    sendMessage,
    messagesEndRef
  };
};