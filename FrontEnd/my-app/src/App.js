// import Form from './Components/form'
import Home from './pages/home'
import Submissions from './pages/submissions';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/submissions" element={<Submissions />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
