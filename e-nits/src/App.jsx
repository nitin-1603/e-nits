import Home from "./pages/home/Home"
import Order from "./pages/order/Order"
import Cart from "./pages/card/Cart"
import Dashboard from "./pages/admin/Dashboard"
import Nopage from "./pages/nopage/Nopage"
import MyState from "./context/MyState"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/registration/Login"
import Signup from "./pages/registration/Signup"
import ProductInfo from "./pages/productInfo/ProductInfo"
import AddProduct from "./pages/admin/page/Addproduct"
import UpdateProduct from "./pages/admin/page/Updateproduct"
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Allproduct from "./pages/allproduct/Allproduct"

const App = () => {

  return (
    <>
      <MyState>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/order' element={<ProtectedRouteForOrder>
              <Order />
            </ProtectedRouteForOrder>} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/admin' element={<ProtectedRouteForAdmin>
              <Dashboard />
            </ProtectedRouteForAdmin>} />
            <Route path='/allproduct' element={<Allproduct />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/productInfo/:id' element={<ProductInfo />} />
            <Route path='/addproduct' element={<ProtectedRouteForAdmin>
              <AddProduct />
            </ProtectedRouteForAdmin>} />
            <Route path='/updateproduct' element={<ProtectedRouteForAdmin>
              <UpdateProduct />
            </ProtectedRouteForAdmin>} />
            <Route path='/*' element={<Nopage />} />
          </Routes>
          <ToastContainer />
        </Router >
      </MyState>
    </>
  )
}

export default App

// protected router for order
export const ProtectedRouteForOrder = ({ children }) => {
  const user = localStorage.getItem('user');

  if (user) {
    return children
  } else {
    return <Navigate to={"/login"} />
  }
}

// protected route for Admin
const ProtectedRouteForAdmin = ({children}) => {
  const admin = JSON.parse(localStorage.getItem("user"))
  if (admin.user.email === 'ch.nitin48@gmail.com') {
    return children
  } else {
    return <Navigate to={"/login"} />
  }
}