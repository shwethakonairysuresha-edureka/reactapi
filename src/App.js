import logo from "./logo.svg";
import "./App.css";
import Header from "./components/layouts/Header";
import Landing from "./components/layouts/Landing";
import Footer from "./components/layouts/Footer";
import sample from "./components/layouts/Sample";

import { BrowserRouter as Router, Route} from 'react-router-dom'
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import PostList from './components/layouts/PostList'

const postList = [
  {
    id:1,
    content:'This world is beautiful',
    user:'Shinchan'
  },
  {
    id:2,
    content:'Good Morning',
    user:'Naruto'
  },
  {
    id:3,
    content:'Have a Nice Day.',
    user:'Sasuke'
  },
  {
    id:4,
    content:'I love Anime.. Anime is Life',
    user:'Kakashi'
  }
]

function App() {
  return (
    <div className="App">
      <Router>
      <Header></Header>
      <Route exact path = "/" component = {Landing}></Route>
      <Route exact path = "/login" component = {Login}></Route>
      <Route exact path = "/register" component = {Register}></Route>
      <Route exact path = "/sample" component = {sample}></Route>
      <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;