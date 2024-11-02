import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Nonveg from "./Nonveg";
import Veg from "./Veg";
import Home from "./Home";
import Cart from "./Cart";
import PurchaseHistory from "./PurchaseHistory";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import { useSelector } from "react-redux";

import './App.css';
import './Navbar.css'; 
import GoogleLoginComponent from "./GoogleLoginComponent";
import { GoogleOAuthProvider } from "@react-oauth/google";
import ReactFacebookLogin from "react-facebook-login";

function App(){
  const cart=useSelector((state=>state.cart));
  const totalItems = cart.reduce((sum, item)=>sum+item.quantity,0);
  const handleFacebookResponse = (response) => {
    console.log(response); // Logs the user data and access token
  
    if (response.accessToken) {
      // Successful login
      console.log('User logged in:', response);
      // You can now send the response data to your backend for further processing
    } else {
      // Login failed
      console.log('Facebook login failed');
    }
  };
  
  return(
    <>
    <GoogleOAuthProvider clientId="746480177995-sng2q7umm49g2rqvvaei9p9i599mso0p.apps.googleusercontent.com" >
      <GoogleLoginComponent />
    </GoogleOAuthProvider>
    
      <ReactFacebookLogin
        appId="1737342310431317" // Replace with your actual App ID
        autoLoad={false}
        fields="name,email,picture"
        callback={handleFacebookResponse} // Function to handle the response
        icon="fa-facebook" // Adds a Facebook icon to the button
        textButton="Login with Facebook"
      />
    
    

      <BrowserRouter>
      <Link to="/home">Home</Link>&nbsp;&nbsp;&nbsp;
      <Link to="/veg">Veg items</Link>&nbsp;&nbsp;&nbsp;
      <Link to="/nonveg">Non-Veg items</Link>&nbsp;&nbsp;&nbsp;
      <Link to="/cart">Cart{totalItems}</Link>&nbsp;&nbsp;&nbsp;
      <Link to="/purchasehistory">Purchase History</Link>&nbsp;&nbsp;&nbsp;
      <Link to="/aboutus">About us</Link>&nbsp;&nbsp;&nbsp; 
      <Link to="/contactus">Contact us</Link>
     
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/veg" element={<Veg />} />
        <Route path="/nonveg" element={<Nonveg />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/purchasehistory" element={<PurchaseHistory />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}
export default App
