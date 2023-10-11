import MyContext from './Mycontext'
import { useState } from 'react'

const MyState = (prop) => {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'rgb(17, 24, 39)';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';

    }
  }
  return (
    <>
      <MyContext.Provider value={{ toggleMode, mode }}>
        {prop.children}
      </MyContext.Provider>
    </>
  )
}

export default MyState
