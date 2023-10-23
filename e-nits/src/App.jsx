import Home from "./pages/home/Home"
import Order from "./pages/order/Order"
import Cart from "./pages/card/Cart"
import Dashboard from "./pages/admin/Dashboard"
import Nopage from "./pages/nopage/Nopage"
import MyState from "./context/MyState"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/registration/Login"
import Signup from "./pages/registration/Signup"
import ProductInfo from "./pages/productInfo/ProductInfo"
import AddProduct from "./pages/admin/page/Addproduct"
import UpdateProduct from "./pages/admin/page/Updateproduct"
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <>
      <MyState>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/order' element={<Order />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/dashboad' element={<Dashboard />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/productInfo/:id' element={<ProductInfo />} />
            <Route path='/admin' element={<Dashboard />} />
            <Route path= '/addproduct' element={<AddProduct/>} />
            <Route path= '/updateproduct' element ={<UpdateProduct/>}/>
            <Route path='/*' element={<Nopage />} />
          </Routes>
        <ToastContainer/>
        </Router >
      </MyState>
    </>
  )
}

export default App
