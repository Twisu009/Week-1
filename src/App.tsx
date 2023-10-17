import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import './App.css';
import HelloReact from './Components/HelloReact';
import Task2 from './Components/Task2';
//import AppRouter from './Components/Task5';
import Task5CD from './Components/Task5CD';
import Task5Creation from './Components/Task5Creation'




function App() {
  return (
    <Router>
      <div className="App">
          
          <HelloReact />
          
        <Routes>
          <Route path="/" element={<Task2/>} />
          <Route path="/customer-profiles" element={<Task5CD />} />
          <Route path="/create-customer" element={<Task5Creation />} />       
          
        </Routes>

      </div>
    </Router>
  );
}

export default App;
