import React from 'react';
import './Sidebar.css';

const Sidebar = ({ theme, toggleTheme }) => {
  return (
    <div className={`sidebar ${theme}`}>
      <button className="theme-toggle" onClick={toggleTheme}>
        click to change theme
      </button>
    </div>
  );
};

export default Sidebar;
