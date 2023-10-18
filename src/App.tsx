import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HelloReact from './Components/HelloReact';
import Task2 from './Components/Task2';
import Task5CD from './Components/Task5CD';
import Task5Creation from './Components/Task5Creation';
import Task6 from './Components/Task6';
import Counter from './Components/Task6';
import { ThemeProvider, useTheme } from './Components/Task7ThemeContext';
import ThemeToggleButton from './Components/Task7ThemeToggleButton'; 
import { ConfigProvider, Table } from 'antd';

function App() {
  return (
    <Router>
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </Router>
  );
}

function AppContent() {
  const themeContext = useTheme(); 
  return (
    
    <div className={`App ${themeContext.theme}`}> 
      <HelloReact />
      <ThemeToggleButton />
      <ConfigProvider theme={
        { components: {Table : {colorBorder:'#00b965' }}

        }}>
      <Routes>
        <Route path="/" element={<Task2 />} />
        <Route path="/customer-profiles" element={<Task5CD />} />
        <Route path="/create-customer" element={<Task5Creation />} />
        <Route path="/Counter" element={<Counter />} />
      </Routes>
      </ConfigProvider>
    </div>
  );
}

export default App;
