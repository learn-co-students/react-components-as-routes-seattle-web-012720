import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home'
import About from './components/About'
import Login from './components/Login'
import Navbar from './components/Navbar'
import Messages from './components/Messages'
import Signup from './components/Signup'
import {BrowserRouter as Router, Route } from 'react-router-dom';

// const link = {
//   width: '100px',
//   padding: '12px',
//   margin: '0 6px 6px',
//   background: 'blue',
//   textDecoration: 'none',
//   color: 'white',
// }

// const Navbar = () =>
//   <div>
//     <NavLink
//       to="/"
//       exact
//       style={link}
//       activeStyle={{
//         background: 'darkblue'
//       }}
//       >Home</NavLink>
//       <NavLink
//         to="/about"
//         exact
//         style={link}
//         activeStyle={{
//           background: 'darkred'
//         }}
//       >About</NavLink>
//       <NavLink
//         to="/login"
//         exact
//         style={link}
//         activeStyle={{
//         background: 'darkgreen'
//         }}
//       >Login</NavLink>
//       <NavLink
//         to="/messages"
//         exact
//         style={link}
//         activeStyle={{
//           background: 'yellow'
//         }}
//       >Messerges</NavLink>
//       <NavLink
//         to="/signup"
//         exact
//         style={link}
//         activeStyle={{
//           background: 'pink'
//         }}
//       >SigUp</NavLink>
//   </div>

// const Home = () => <h1>Home!</h1>

// const About = () => <h1>This is my about component!</h1>

// const Signup = () => <h1>WE DON'T DO THAT</h1>

// const Messages = () =>
//     <div>
//       <p>hi!</p>
//       <p>goodby!</p>
//     </div>;

// const Login = () => 
//       <form>
//         <div>
//           <input type="text" name="username" placeholder="Username" />
//           <label htmlFor="username">Username</label>
//         </div>
//         <div>
//           <input type="password" name="password" placeholder="Password" />
//           <label htmlFor="password">Password</label>
//         </div>
//         <input type="submit" value="Login" />
//       </form>;

ReactDOM.render((
  <Router>
    <div>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/messages" component={Messages} />
    </div>
  </Router>),
  document.getElementById('root')
);
