
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


function App() {
  return (
    <div className='min-h-screen flex flex-col'>
      <Header></Header>
      <Routes>
        {/* Home  */}
        <Route path="/" element={<Home></Home>} />

        {/* authentication related  */}
        <Route path="login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />

        {/* pages  */}
        <Route
          path="products"
          element={
            <RequireAuth>
              <Products/>
            </RequireAuth>
          }
        />
        <Route
          path="All%20Users"
          element={
            <RequireAuth>
              <Users/>
            </RequireAuth>
          }
        />
        <Route
          path="Profile"
          element={
            <RequireAuth>
              <Profile/>
            </RequireAuth>
          }
        />
        <Route
          path="addProducts"
          element={
            <RequireAuth>
              <AddProducts/>
            </RequireAuth>
          }
        />
        <Route
          path="DashBoard"
          element={
            <RequireAuth>
              <DashBoard/>
            </RequireAuth>
          }
        />
      </Routes>

      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
