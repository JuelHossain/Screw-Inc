import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import About from "./Pages/About/About";
import DashBoard from "./Pages/Admin/DashBoard";
import ManageOrders from "./Pages/Admin/ManageOrders";
import ManageProducts from "./Pages/Admin/ManageProducts";
import Users from "./Pages/Admin/Users";
import Login from "./Pages/Authentication/Login";
import Profile from "./Pages/Authentication/Profile";
import Register from "./Pages/Authentication/Regster";
import RequireAdmin from "./Pages/Authentication/RequireAdmin";
import RequireAuth from "./Pages/Authentication/RequireAuth";
import Blog from "./Pages/Blog/Blog";
import Home from "./Pages/Home/Home";
import Checkout from "./Pages/Products/Checkout";
import EditProduct from "./Pages/Products/EditProduct.js";
import Payment from "./Pages/Products/Payment";

import { HeaderProvider } from "./context/HeaderContext";
import AddProducts from "./Pages/Admin/AddProducts";
import DashBoardDefault from "./Pages/Admin/DashBoardDefault";
import ManageReviews from "./Pages/Admin/ManageReviews";
import NotFound from "./Pages/NotFound";
import Success from "./Pages/payment/success";
import Products from "./Pages/Products/Products";
import EditReview from "./Pages/Reviews/EditReview";
import Reviews from "./Pages/Reviews/Reviews";
import Addareview from "./Pages/User/Addareview";
import MyOrders from "./Pages/User/MyOrders";
import MyReviews from "./Pages/User/MyReviews";

function App() {
  return (
    <HeaderProvider>
      <div className="min-h-screen flex flex-col">
        <Header/>
        <Routes>
          {/* Home  */}
          <Route path="/" element={<Home></Home>} />
          <Route path="/Home" element={<Home></Home>} />
          <Route path="products" element={<Products />} />
          <Route path="/blog" element={<Blog></Blog>} />
          <Route path="/about" element={<About></About>} />
          <Route path="/reviews" element={<Reviews></Reviews>} />
          <Route path="*" element={<NotFound></NotFound>} />

          {/* authentication related  */}
          <Route path="login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* pages  */}

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
            path="payment/success"
            element={
              <RequireAuth>
                <Success
                  title={"Thank You ! Your Payment Have Been Success."}
                  des={
                    "We Will Contact You Via Email . And Your Order Will be Shipped As Soon As Possible Thank You."
                  }
                />
              </RequireAuth>
            }
          />
          <Route
            path="payment/canceled"
            element={
              <RequireAuth>
                <Success
                  title={"Oops ! You Have Canceled Your Payment."}
                  des={
                    "Don't Worry, You Can Pay Later from the dashboard / my order page . please be noted that your order will not be shipped until we have got your payment thank You."
                  }
                />
              </RequireAuth>
            }
          />
          <Route
            path="payment/failed"
            element={
              <RequireAuth>
                <Success
                  title={"Oops ! Your Payment Failed"}
                  des={
                    "Don't Worry, You Can Pay Later from the dashboard / my order page . please be noted that your order will not be shipped until we have got your payment thank You."
                  }
                />
              </RequireAuth>
            }
          />
          <Route
            path="checkout/:id"
            element={
              <RequireAuth>
                <Checkout />
              </RequireAuth>
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
            path="editReview/:id"
            element={
              <RequireAuth>
                <EditReview />
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
              index
              element={
                <RequireAuth>
                  <DashBoardDefault />
                </RequireAuth>
              }
            />
            <Route
              path="myorders"
              element={
                <RequireAuth>
                  <MyOrders />
                </RequireAuth>
              }
            />
            <Route
              path="myreviews"
              element={
                <RequireAuth>
                  <MyReviews />
                </RequireAuth>
              }
            />
            <Route
              path="addareview"
              element={
                <RequireAuth>
                  <Addareview />
                </RequireAuth>
              }
            />
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
            <Route
              path="managereviews"
              element={
                <RequireAdmin>
                  <ManageReviews />
                </RequireAdmin>
              }
            />
          </Route>
        </Routes>

        <Footer></Footer>
        <ToastContainer />
      </div>
    </HeaderProvider>
  );
}

export default App;
