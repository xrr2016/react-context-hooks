import React, { createContext, useState } from 'react'

export const LanguageContext = createContext()

export const LanguageContextProvider = (props) => {
  const [languages] = useState([
    {
      lang: '中文',
    },
    {
      lang: 'English',
    },
  ])
  const [current, setCurrent] = useState(0)
  const changeLanguage = (val) => {
    setCurrent(val)
  }

  return (
    <LanguageContext.Provider value={{ languages, current, changeLanguage }}>
      {props.children}
    </LanguageContext.Provider>
  )
}
