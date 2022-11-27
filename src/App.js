
import './App.css';
import LoginPage from 'pages/LoginPage';
import Blog from 'pages/Blog';
import {Routes, Route} from "react-router-dom"
function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element = {<LoginPage/>} />
        <Route path="blog" element = {<Blog />}/>
        <Route path="loginPage" element = {<LoginPage/>} />
      </Routes>
    </div>
  );
}

export default App;
