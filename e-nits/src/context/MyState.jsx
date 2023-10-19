import MyContext from './Mycontext'
import { useState } from 'react'

const MyState = (prop) => {
  const [mode, setMode] = useState('light');

  // for showing alert i am creating a useState
const [loading, setLoading] = useState(false);

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
      <MyContext.Provider value={{ toggleMode, mode, loading, setLoading}}>
        {prop.children}
      </MyContext.Provider>
    </>
  )
}

export default MyState
