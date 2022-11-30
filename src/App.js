
import './App.css';
import LoginPage from 'pages/LoginPage';
import Blog from 'pages/Blog';
import ContactUsPage from 'pages/ContactUsPage';
import {Routes, Route} from "react-router-dom"
function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element = {<LoginPage/>} />
        <Route path="blog" element = {<Blog />}/>
        <Route path="contactuspage" element = {<ContactUsPage/>} />
        
      </Routes>
    </div>
  );
}

export default App;
