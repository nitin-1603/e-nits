import MyContext from './Mycontext'

const MyState = (prop) => {
    const state= { name : 'Nitin', class: "10-A"}
  return (
    <>
      <MyContext.Provider value={state}>
        {prop.children}
      </MyContext.Provider>
    </>
  )
}

export default MyState
