import React from 'react';

class Login extends React.Component {
    render() {
        return (
            <div>
                <p>

                </p>
                <p></p>
                <p></p>
            <form>
                <div>
                    <input type="text" name="username" placeholder="Username" />
                    <label htmlFor="username">  Userneem</label>
                </div>
                <div>
                    <input type="text" name="password" placeholder="Password" />
                    <label htmlFor="password">  Pass Word</label>
                </div>
                <input type="submit" value="Login" />
            </form>
            </div>
        )
    }
}

export default Login