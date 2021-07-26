import './App.css'
import { AuthContext, AuthContextProvider } from './context/AuthContext'
import { LanguageContextProvider } from './context/LanguageContext'

import AppHeader from './components/AppHeader'
import AppFooter from './components/AppFooter'
import AppBody from './components/AppBody'

function App() {
  return (
    <AuthContextProvider>
      <AuthContext.Consumer>
        {({ isAuthenticated }) => (
          <div
            className="App"
            style={{ backgroundColor: isAuthenticated ? 'pink' : '' }}
          >
            <AppHeader />
            <LanguageContextProvider>
              <AppBody />
            </LanguageContextProvider>
            <AppFooter />
          </div>
        )}
      </AuthContext.Consumer>
    </AuthContextProvider>
  )
}

export default App
