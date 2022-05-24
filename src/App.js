
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


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        {/* Home  */}
        <Route path="/" element={<Home></Home>} />

        {/* authentication related  */}
        <Route path="login" element={<Login></Login>} />
        <Route path="/register" element={<Register></Register>} />

        {/* pages  */}
        <Route
          path="products"
          element={
            <RequireAuth>
              <Products></Products>
            </RequireAuth>
          }
        />
        <Route
          path="All%20Users"
          element={
            <RequireAuth>
              <Users></Users>
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
