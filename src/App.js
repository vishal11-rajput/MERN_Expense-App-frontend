
// import "./App.css";
import { Sidebar } from "./pages/Sidebar";
import { Navbar } from "./pages/Navbar";
import { Footer } from "./pages/Footer";
import { Error404 } from "./pages/Error404";
import { Route, Router, Routes } from "react-router-dom";
// import { ServiceProviderDashboard } from "./componets/serviceprovider/ServiceProviderDashboard";
import { UserDashboard } from "./componets/user/UserDashboard";
// import { AddService } from "./componets/serviceprovider/AddService";
// import { FoodService } from "./componets/serviceprovider/FoodService";
// import { MenuToday } from "./componets/serviceprovider/MenuToday";
// import { Content } from "./componets/Content";
import { Dashboard } from "./pages/Dashboard";
import { SignUP } from "./pages/SignUP";
import { Login } from "./pages/Login";
// import { Shopping } from "./componets/serviceprovider/Shopping";
// import { FileUploadDemo } from "./componets/FileUploadDemo";
import { AddExpense } from "./componets/user/AddExpense";
import { AllExpense } from "./componets/user/AllExpense";
import { Profile } from "./componets/user/Profile";
import { Allusers} from "./pages/Allusers";
import { Form } from "./pages/From";
import { EditUser } from "./pages/EditUser";


function App() {

  
  const path = window.location.pathname
  return (
    <>
      
      
      <div className="wrapper">

        {path === "/login" ||path ==="/signup" ||path ==="" ? null:<Sidebar />}

        <div>
        <Routes>
            {/* <Route path = "/" element ={<Dashboard/>}/> */}
            <Route path = "/signup" element ={<SignUP/>}/>  
            <Route path = "/login" element ={<Login/>}/>  
            <Route element= {<checkLogin/>}></Route>       
          </Routes>
        </div>
        
        <div className="main-panel">
          
          
          <Navbar/>
          
          <div className="content">
           
            <Routes>
              {/* <Route path ="/" element = {<SignIn/>}></Route> */}
              {/* <Route element= {<checkLogin/>}></Route> */}
              {/* <Route path ="/" element = {<Content/>}></Route> */}
                <Route path = "/dashboard" element = {<Dashboard/>}/>
                <Route path = "/profile" element = {<Profile/>}/>

                {/* <Route path = "serviceprovider/dashboard" element = {<ServiceProviderDashboard/>}/> */}
                {/* <Route path = "serviceprovider/addservice" element = {<AddService/>}/>  */}
                <Route path = "user/dashboard" element = {<UserDashboard/>}/>
                <Route path = "user/add-expense" element = {<AddExpense/>}/>
                <Route path = "user/all-expenses" element = {<AllExpense/>}/>
                {/* <Route path="/fileupload" element = {<FileUploadDemo/>}/> */}
                {/* <Route path = "user/shopping" element = {<MenuToday/>}/> */}
                <Route path = "/all-users" element = {<Allusers/>}/>
                <Route path="/edit-user/:id" element={<EditUser />}/>
                <Route path = "/form" element = {<Form/>}/>
                

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
