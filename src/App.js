
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Pages/Home/Home'
import Footer from './Components/Footer/Footer'
import Login from './Pages/Authentication/Login';
import Register from './Pages/Authentication/Regster';
import Products from './Pages/Products/Products';
import RequireAuth from './Pages/Authentication/RequireAuth';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Users from './Pages/Admin/Users';
import Profile from './Pages/Authentication/Profile';
import AddProducts from './Pages/Products/AddProducts';
import DashBoard from './Pages/Admin/DashBoard';
import Blog from './Pages/Blog/Blog';
import About from './Pages/About/About';
import RequireAdmin from './Pages/Authentication/RequireAdmin';
import EditProduct from './Pages/Products/EditProduct.js';
import ManageProducts from './Pages/Admin/ManageProducts';
import ManageOrders from './Pages/Admin/ManageOrders';
import Checkout from './Pages/Products/Checkout';
import Payment from './Pages/Products/Payment';
import Tools from './Pages/Products/Tools';


function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header></Header>
      <Routes>
        {/* Home  */}
        <Route path="/" element={<Home></Home>} />
        <Route path="/home" element={<Home></Home>} />
        <Route path="/blog" element={<Blog></Blog>} />
        <Route path="/about" element={<About></About>} />

        {/* authentication related  */}
        <Route path="login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* pages  */}
        <Route path="products" element={<Tools />} />
        <Route
          path="products/:id"
          element={
            <RequireAuth>
              <EditProduct />
            </RequireAuth>
          }
        />
        <Route
          path="payment/:id"
          element={
            <RequireAuth>
              <Payment />
            </RequireAuth>
          }
        />
        <Route
          path="checkout/:id"
          element={
            <RequireAdmin>
              <Checkout />
            </RequireAdmin>
          }
        />
        <Route
          path="Profile"
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
        />
        <Route
          path="addProducts"
          element={
            <RequireAuth>
              <AddProducts />
            </RequireAuth>
          }
        />
        <Route
          path="DashBoard"
          element={
            <RequireAuth>
              <DashBoard />
            </RequireAuth>
          }
        >
          <Route
            path="manageusers"
            element={
              <RequireAdmin>
                <Users />
              </RequireAdmin>
            }
          />
          <Route
            path="addproduct"
            element={
              <RequireAdmin>
                <AddProducts />
              </RequireAdmin>
            }
          />
          <Route
            path="manageproducts"
            element={
              <RequireAdmin>
                <ManageProducts />
              </RequireAdmin>
            }
          />
          <Route
            path="manageorders"
            element={
              <RequireAdmin>
                <ManageOrders />
              </RequireAdmin>
            }
          />
        </Route>
      </Routes>

      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
