import Home from "./pages/home/Home"
import Order from "./pages/order/Order"
import Card from "./pages/card/Card"
import Dashboard from "./pages/admin/Dashboard"
import Nopage from "./pages/nopage/Nopage"
import MyState from "./context/MyState"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <MyState>
        <Router>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/order' element={<Order />}></Route>
            <Route path='/card' element={<Card />}></Route>
            <Route path='/dashboad' element={<Dashboard />}></Route>
            <Route path='/*' element={<Nopage />}></Route>
          </Routes>
        </Router >
      </MyState>
    </>
  )
}

export default App
