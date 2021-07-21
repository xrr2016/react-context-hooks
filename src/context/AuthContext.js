import React, { Component } from 'react'

export const AuthContext = React.createContext({
  user: null,
  isAuthenticated: false,
})

export class AuthContextProvider extends Component {
  state = {
    user: {},
    isAuthenticated: false,
  }

  login = (user) => {
    if (this.state.isAuthenticated) {
      return
    }
    this.setState({
      user,
      isAuthenticated: true,
    })
  }

  logout = () => {
    this.setState({
      user: null,
      isAuthenticated: false,
    })
  }

  render() {
    return (
      <AuthContext.Provider
        value={{ ...this.state, login: this.login, logout: this.logout }}
      >
        {this.props.children}
      </AuthContext.Provider>
    )
  }
}
