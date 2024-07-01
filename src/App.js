
import { Sidebar } from "./pages/Sidebar";
import { Navbar } from "./pages/Navbar";
import { Footer } from "./pages/Footer";
import { Error404 } from "./pages/Error404";
import { Route, Router, Routes } from "react-router-dom";
import { UserDashboard } from "./componets/user/UserDashboard";
import { Dashboard } from "./pages/Dashboard";
import { SignUP } from "./pages/SignUP";
import { Login } from "./pages/Login";
import { AddExpense } from "./componets/user/AddExpense";
import { AllExpense } from "./componets/user/AllExpense";
import { Profile } from "./componets/user/Profile";
import { Allusers} from "./pages/Allusers";
import { Form } from "./pages/From";
import { EditUser } from "./pages/EditUser";
import { UserModal } from "./pages/UserModal";
import { UpdateUser } from "./componets/user/UpdateUser";
import { CheckLogin } from "./hooks/CheckLogin";
import { Home } from "./pages/Home";


function App() {
  const path = window.location.pathname
  return (
    <>
      <div className="wrapper">

        {path === "/login" ||path ==="/signup" ||path ==="" ? null:<Sidebar />}

        <div>
        <Routes>
            <Route path = "/signup" element ={<SignUP/>}/>  
            <Route path = "/login" element ={<Login/>}/>  
            <Route element= {<CheckLogin/>}></Route>       
          </Routes>
        </div>
        
        <div className="main-panel">
          <Navbar/>
          <div className="content">
           
            <Routes>
                <Route path = "/dashboard" element = {<Dashboard/>}/>
                <Route path = "/profile" element = {<Profile/>}/>
                <Route path = "user/dashboard" element = {<UserDashboard/>}/>
                <Route path = "user/add-expense" element = {<AddExpense/>}/>
                <Route path = "user/all-expenses" element = {<AllExpense/>}/>
                <Route path = "/all-users" element = {<Allusers/>}/>
                <Route path="/edit-user/:id" element={<EditUser />}/>
                <Route path = "/update-user/:id" element = {<UpdateUser/>}/>
                <Route path = "/user-modal" element = {<UserModal/>}/>
                <Route path = "/home" element = {<Home/>}/>
                <Route path = "/" element = {<Home/>}/>
                <Route path = "*" element = {<Error404/>}/>
               </Routes> 
          </div>
          <Footer/>
        </div>
      </div>
    </>
  );
}

export default App;
