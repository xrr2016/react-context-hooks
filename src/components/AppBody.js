import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { LanguageContext } from '../context/LanguageContext'

const AppBoy = () => {
  const authContext = useContext(AuthContext)
  const { languages, current, changeLanguage } = useContext(LanguageContext)
  const handleChangeLanguage = (e) => {
    changeLanguage(e.target.value)
  }

  return (
    <div>
      <h1>
        Hello, {authContext.isAuthenticated ? authContext.user.name : 'World'}
      </h1>
      <label htmlFor="lang-select">Choose a lang:</label>
      <select id="lang-select" onChange={handleChangeLanguage}>
        {languages.map((l, i) => (
          <option key={i} value={i}>
            {l.lang}
          </option>
        ))}
      </select>
      <p>Currrent Lang: {languages[current].lang}</p>
    </div>
  )
}

export default AppBoy
