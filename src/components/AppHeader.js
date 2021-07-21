import { Component } from 'react'
import { AuthContext } from '../context/AuthContext'

class AppHeader extends Component {
  render() {
    return (
      <AuthContext.Consumer>
        {(authContext) => (
          <header>
            <p>
              {authContext.isAuthenticated
                ? authContext.user.name
                : 'Please login'}
            </p>
          </header>
        )}
      </AuthContext.Consumer>
    )
  }
}

export default AppHeader
