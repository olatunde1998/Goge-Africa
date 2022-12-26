import "./App.css";
import Blog from "pages/Blog";
import ContactUsPage from "pages/ContactUsPage";
import BlogDetailsPage from "pages/BlogDetailsPage";
import AboutUsPage from "pages/AboutUsPage";
import { Routes, Route } from "react-router-dom";
import Homepage from "pages/Homepage";
import Signin from "pages/Signin";
import SignUp from "pages/SignUp";
import Contributor from "pages/Contributor";
import Password from "pages/Password";
import Courses from "pages/Courses";
import AllOrders from "pages/AllOrders";
import OrderSettings from "pages/OrderSettings";
import Cart from "pages/Cart";
import Cart2 from "pages/Cart2";
import Payment from "pages/Payment";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<ContactUsPage />} />
        <Route path="blog/1" element={<BlogDetailsPage />} />
        <Route path="about" element={<AboutUsPage />} />
        <Route path="courses" element={<Courses />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/contributor" element={<Contributor />} />
        <Route path="/password" element={<Password />} />
        <Route path="/orders" element={<AllOrders />} />
        <Route path="/settings" element={<OrderSettings />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/cart/2" element={<Cart2 />} />
        <Route path="/payment" element={<Payment />} />

        <Route index element={<Homepage />} />

      </Routes>
    </div>
  );
}

export default App;
