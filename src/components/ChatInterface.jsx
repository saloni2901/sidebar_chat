import React, { useState } from 'react';
import './ChatInterface.css';

const ChatInterface = ({ theme, messages, onSendMessage }) => {
  const [inputValue, setInputValue] = useState('');
  const [isChatVisible, setIsChatVisible] = useState(false);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== '') {
      onSendMessage(inputValue);
      setInputValue('');
    }
  };
  const handleToggleChat = () => {
    setIsChatVisible(!isChatVisible);
  };

  return (
    <div className={`chat-interface ${theme}`}>
      <div className={'message-list'}>
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>
            <div className="avatar">
              <img src={message.avatar} alt="User Avatar" />
            </div>
            <div className="message-text">{message.text}</div>
            <div className="timestamp">{new Date().toLocaleTimeString()}</div>
          </div>
        ))}
      </div>
      {!isChatVisible && (
        <button className="open-chat-button" onClick={handleToggleChat}>
          Open Chat
        </button>
      )}
      {isChatVisible && (
        <form className="message-input" onSubmit={handleFormSubmit}>
          <input
            type="text"
            placeholder="Type a message..."
            value={inputValue}
            onChange={handleInputChange}
          />
          <button type="submit">Send</button>
        </form>
      )}
    </div>
  );
};

export default ChatInterface;




