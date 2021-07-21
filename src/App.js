import './App.css'
import { AuthContextProvider } from './context/AuthContext'

import AppHeader from './components/AppHeader'
import AppFooter from './components/AppFooter'
import AppBody from './components/AppBody'

function App() {
  return (
    <AuthContextProvider>
      <div className="App">
        <AppHeader />
        <AppBody />
        <AppFooter />
      </div>
    </AuthContextProvider>
  )
}

export default App
