import React, { useState } from 'react';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`App ${isDarkMode ? 'dark' : 'light'}`}>
      {/* Rest of your app */}
      <button onClick={handleToggleMode}>Toggle Mode</button>
    </div>
  );
}

export default App;