// import Home from './components/Home';
// import Welcome from './components/Welcome';
import './app.css'
import React from 'react';
import Topbar from './components/topbar/Topbar';
import Sidebar from './components/sidebar/Sidebar';
import Home from './pages/home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserList from './pages/userList/UserList';
import User from './pages/user/User';
import NewUser from './pages/newUser/NewUser';
import Posts from './pages/posts/posts';

function App() {
  return (
    <Router>
      {/* <h1>This is root componant</h1>
      // <Home name="Pardeep Sahu" role="Software Developer">
      // <p>I am working in 01Synergy since last two year</p>
      // </Home>
      // <Welcome /> */}
      <Topbar />
      <div className='container' style={{ 'maxWidth': '1350px' }}>
        <Sidebar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/user/:userId" element={<User />} />
          <Route path="/newUser" element={<NewUser />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
