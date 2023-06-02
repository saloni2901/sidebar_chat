import React, {useState} from 'react';
import Sidebar from './components/Sidebar';
import ChatInterface from './components/ChatInterface';
import './App.css'

function App() {
    const [theme, setTheme] = useState('light');
    const [messages, setMessages] = useState([]);
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
      };
    
      const App = () => {
        const messages = [
          {
            sender: 'user1',
            text: 'Hello',
            avatar: 'https://dummyurl.com/avatar1.jpg',
          },
          {
            sender: 'user2',
            text: 'Hi',
            avatar: 'https://dummyurl.com/avatar2.jpg',
          },
        ];
      }

    const handleSendMessage = (message) => {
        setMessages([...messages, { text: message, sender: 'user' }]);
    // Perform any additional logic, API calls, etc.
    };
    return (
        <div className={`app ${theme}`}>
        <Sidebar theme={theme} toggleTheme={toggleTheme} />
        <ChatInterface 
        theme={theme}
        messages={messages} 
        onSendMessage={handleSendMessage} />
      </div>
    );
  }
  export default App;