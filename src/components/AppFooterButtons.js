import { Component } from 'react'
import { AuthContext } from '../context/AuthContext'

class AppFooterButtons extends Component {
  static contextType = AuthContext

  login = () => {
    const user = {
      name: '小明',
    }
    this.context.login(user)
  }

  render() {
    return (
      <div>
        <button onClick={this.login}>Login</button>
        <button onClick={this.context.logout}>Logout</button>
      </div>
    )
  }
}

export default AppFooterButtons
