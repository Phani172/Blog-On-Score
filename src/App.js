import './App.css'
import HomePage from './pages/Homepage.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScorePage from './pages/Scorepage.js';
import BlogPage from './pages/Blogpage.js';
const App = () => {
  return <>
    <BrowserRouter>
      <div >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Scorepage" element={<ScorePage />} />
          <Route path="/Scorepage/Blogpage" element={<BlogPage />} />

        </Routes>
      </div>
    </BrowserRouter>
  </>

};
export default App;