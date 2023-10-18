import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import './App.css';
import HelloReact from './Components/HelloReact';
import Task2 from './Components/Task2';
//import AppRouter from './Components/Task5';
import Task5CD from './Components/Task5CD';
import Task5Creation from './Components/Task5Creation'
import Task6 from './Components/Task6';




function App() {
  return (
    <Router>
      <div className="App">
          
          <HelloReact />
          
        <Routes>
          <Route path="/" element={<Task2/>} />
          <Route path="/customer-profiles" element={<Task5CD />} />
          <Route path="/create-customer" element={<Task5Creation />} />      
          <Route path="/Counter" element={<Task6/>}/>
          
        </Routes>

      </div>
    </Router>
  );
}

export default App;
