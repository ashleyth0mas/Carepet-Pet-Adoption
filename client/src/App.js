import Navbar from "./components/Navbar";
import Header from "./components/Header";
import {BrowserRouter as Router,Routes, Route} from "react-router-dom";
import Signup from "./containers/signup";
import Login from "./containers/login";
import Category from "./containers/category";
import About from "./containers/about";
import Contact from "./containers/contact";
import Meet from "./containers/meet";
import {gapi} from 'gapi-script';
import Admin from "./containers/Admin";
import AdminCategory from "./admin/Admincateg";
import AdminBookNow from "./admin/Adminbook";



import BookNow from "./containers/adoptme";


import { useEffect } from "react";
import Logout from "./containers/logout";
import AdminDonation from "./admin/admindonations";


const clientId ="166586900999-e1f14vvvc2gqg5l7hrgmpjo7o3iadmd2.apps.googleusercontent.com"


function App() {
  useEffect(()=>{
    function start(){
      gapi.client.init({
        clientId: clientId,
        scope: ""
      })
    }
    gapi.load('client:auth2',start);
  })
 

  return (
   <Router>
    <Navbar/>
    <Routes>
  
  <Route path ='/' element ={<Header/>}/>
  <Route path ="/user" element={<User/>}></Route>
  <Route path ="/admin" element={<Admin/>}></Route>
  <Route path ="/admincategory" element={<AdminCategory/>}></Route>
  <Route path ="/adminbooknow" element={<AdminBookNow/>}></Route>
  <Route path ="/admindonation" element={<AdminDonation/>}></Route>
  <Route path ='/signup' element ={<Signup/>}/>
  <Route path ='/login' element ={<Login/>}/>
  <Route path ='/category' element ={<Category/>}/>
  <Route path ='/meet' element ={<Meet/>}/>
  <Route path ='/about' element ={<About/>}/>
  <Route path ='/contact' element ={<Contact/>}/>
  <Route path='/bookNow' element={<BookNow/>}/>
  <Route path='/logout' element={<Logout/>}
   />

  
  
  
  </Routes>
   </Router>
  );
}

function User()

{
  return <div>User</div>
}


export default App;
