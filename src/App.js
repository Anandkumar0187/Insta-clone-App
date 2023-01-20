import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css';
import LandingPage from './landing_page';
import PostView from './postview';
import InputData from './InputData';

function App() {
  return (
    <Router>
      <div>
      <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/postview" element={<PostView/>}/>
      <Route path="/InputData" element={<InputData/>}/>
      </Routes>
      </div>
    </Router>
  );
}

export default App;