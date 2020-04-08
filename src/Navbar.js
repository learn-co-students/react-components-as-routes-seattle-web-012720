import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

export default class Navbar extends Component{
    link = {
        width: '100px',
        padding: '12px',
        margin: '0 6px 6px',
        background: 'blue',
        textDecoration: 'none',
        color: 'white',
      };
      render() {
          return(
            <div>
                <NavLink
                to="/" exact 
                style={this.link}
                activeStyle={{
                    background: 'darkblue'
                }}
                >Home</NavLink>
                <NavLink
                to="/about"
                exact
                style={this.link}
                activeStyle={{
                    background: 'darkblue'
                }}
                >About</NavLink>
                <NavLink
                to="/login"
                exact
                style={this.link}
                activeStyle={{
                    background: 'darkblue'
                }}
                >Login</NavLink>
                <NavLink
                to="/signup" 
                exact
                style={this.link}
                activeStyle={{
                background: 'darkblue'
                }}>Sign Up</NavLink>
                <NavLink to="/messages" exact style={this.link} activeStyle={{background:'darkblue'}}>
                Messages
                </NavLink>
            </div>
          )
      }
}