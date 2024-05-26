import React, { useState, useEffect } from 'react';

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="px-2 rounded-full bg-gray-800 dark:bg-gray-500 transition-colors duration-300"
    >
      {darkMode ? '🌙' : '☀️'}
    </button>
  );
};

export default DarkModeToggle;
