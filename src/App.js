import './App.css'
import { AuthContextProvider } from './context/AuthContext'

import AppHeader from './components/AppHeader'
import AppFooter from './components/AppFooter'
import AppBody from './components/AppBody'
import { LanguageContextProvider } from './context/LanguageContext'

function App() {
  return (
    <AuthContextProvider>
      <div className="App">
        <AppHeader />
        <LanguageContextProvider>
          <AppBody />
        </LanguageContextProvider>
        <AppFooter />
      </div>
    </AuthContextProvider>
  )
}

export default App
