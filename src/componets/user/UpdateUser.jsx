import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AddExpense.css";
import { ToastContainer, toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";


export const UpdateUser = () => {
  const navigate = useNavigate();
  const [expense, setExpense] = useState([]);
  const [categories, setcategories] = useState([]);
  const { register, handleSubmit } = useForm({
    defaultValues: async()=>{
      const res = await axios.get("http://localhost:8000/expenses/expense/" + id);
      return({
        amount:res.data.data.amount,
        description: res.data.data.description
      })
    }
  });
  const id = useParams().id;

  // const getExpenses = async () => {
  //   try {
  //     const res = await axios.get("http://localhost:8000/expenses/expense/" + id);
  //     console.log(res);
  //     setExpense(res.data.data)
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  const loadCategory = async () => {
    const res = await axios.get("http://localhost:8000/category/category");
    console.log(res.data.data);
    setcategories(res.data.data);
  };
  
  useEffect(() => {
    loadCategory();
    
  },[])
  const submitHandler = async (data) => {
    const dataObj = { ...data};
    try {
      const res = await axios.put("http://localhost:8000/expenses/expense/" + id, dataObj);
      console.log(res);
      setExpense(res.data.data)
      toast.success("Update success");
      navigate("/user/all-expenses");
  }
  catch(err){
      console.log(err);
      toast.error("Update error");}
  }
  return (
  //   <div style={{ maxWidth: "400px", margin: "100px auto", padding: "50px", boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", borderRadius:'10px' }}>
  
  //   <Form>
  //   <Form.Group className="mb-3" controlId="formBasicEmail">
  //     <Form.Label>Name</Form.Label>
  //     <Form.Control type="string" placeholder="Enter email" />
     
  //   </Form.Group>
  //   <Form.Group className="mb-3" controlId="formBasicEmail">
  //     <Form.Label>Email</Form.Label>
  //     <Form.Control type="email" placeholder="Enter email" />
     
  //   </Form.Group>

  //   {/* <Form.Group className="mb-3" controlId="formBasicPassword">
  //     <Form.Label>Password</Form.Label>
  //     <Form.Control type="password" placeholder="Password" />
  //   </Form.Group> */}
  //   {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
  //     <Form.Check type="checkbox" label="Check me out" />
  //   </Form.Group> */}
  //   <Button variant="primary" type="submit">
  //     Update
  //   </Button>
  // </Form>
  // </div>

  <div  className="formbold-main-wrapper" style={{maxWidth: "600px",margin: "10px auto",}}>
        <ToastContainer />
        {/* Author: FormBold Team */}
        {/* Learn More: https://formbold.com */}
        <div className="formbold-form-wrapper">
          {/* <img src="your-image-url-here.jpg" /> */}
          {/* <form action="https://formbold.com/s/FORM_ID" method="POST" > */}
          {/* <form onSubmit={handleSubmit(submitHandler)}> */}
          <form  onSubmit={handleSubmit(submitHandler)} >
            {}
            <div className="formbold-form-title">
              <h2 className="">EDIT EXPENSE</h2>
              {/* <p>Enter all fields</p> */}
            </div>
            <div className="formbold-input-flex">
              <div>
                <label htmlFor="firstname" className="formbold-form-label">
                  Amount  
                </label>
                <input
                  className="formbold-form-input"
                  type="Number"
                  name="Amount"
                  id="amount"
                  placeholder="Enter Amount"
                  // required
                  {...register("amount")}
                />
              </div>
              {/* <div>
                <label htmlFor="lastname" className="formbold-form-label">
                  {" "}
                  Transaction Date *{" "}
                </label>
                <input
                  type="date"
                  name="date"
                  id="myDate"
                  className="formbold-form-input"
                  // required
                  {...register("date")}
                />
              </div> */}
            </div>
            <div className="formbold-input-flex">
            <div>
                <label htmlFor="email" className="formbold-form-label">
                  {" "}
                  Category *{" "}
                </label>
                <select
                  name="category"
                  // required
                  className="formbold-form-input"
                  {...register("category")}
                >
                  <option>Select Category</option>
                  {categories?.map((cat)=>{
                  return(
                    <option value={cat._id}>{cat.categoryName}</option>
                  )
                })}

                  {/* <option value="entertainment">Entertainment</option>
                  <option value="medical">Medical</option>
                  <option value="food">Food</option>
                  <option value="shopping">Shooping</option>
                  <option value="other">Other</option> */}
                </select>
              </div>
              <div>
                <label htmlFor="phone" className="formbold-form-label">
                  {" "}
                  Payment Mode{" "}
                </label>
                <select
                  name="payment-mode"
                  id="mode"
                  className="formbold-form-input"
                  {...register("paymentMode")}
                >
                  <option value="cash">Cash</option>
                  <option value="card">Card</option>
                  <option value="upi">UPI</option>
                </select>
              </div>
            </div>
            {/* <div className="formbold-input-flex">
              <div>
                <label htmlFor="firstname" className="formbold-form-label">
                  Bill image
                </label>
                <input
                  type="file"
                  name="billImage"
                  id="amount"
                  className="formbold-form-input"
                  {...register("billImage")}
                />
              </div>
              <div>
                <label htmlFor="firstname" className="formbold-form-label">
                  Type
                </label>
                <select
                  className="formbold-form-input"
                  required
                  {...register("TransactionType")}
                >
                  <option value="expense">Expense</option>
                  <option value="income">Income</option>
                </select>
              </div>
            </div> */}
            <div className="formbold-mb-3">
              <label htmlFor="address" className="formbold-form-label">
                Description
              </label>
              <input
                type="text"
                name="address"
                id="phone"
                className="formbold-form-input"
                {...register("description")}
              />
            </div>
            <button id ="btns" type="submit" className="formbold-btn">
              Edit Expense
            </button>
          </form>
        </div>
      </div>
  )
          }
