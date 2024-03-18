import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AddExpense.css";
import { ToastContainer, toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export const AddExpense = () => {
  // const [amount, setAmount] = useState();
  // const [TransDateTime, setTransDateTime] = useState();
  // const [category, setCategory] = useState();
  // const [description, setDescription] = useState();
  // const [paymentMethod, setPaymentMethod] = useState();
  // const [billImage, setBillImage] = useState();

  const [addExpense, setAddExpense] = useState();
  const [categories, setcategories] = useState([]);
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    loadCategory();
  }, []);

  const submitHandler = async (data) => {
    // e.preventDefault();
    const id = localStorage.getItem("id");
    // const dataObj = Object.assign(data, { userid: id });
    const dataObj = { ...data, userId: id };
    if (id !== undefined) {
      try {
        const res = await axios.post(
          "http://localhost:8000/expenses/expense",
          dataObj
        );

        console.log(res);
        console.log(res.data.data);
        setAddExpense(res.data.data);

        toast.success("Expense added successfully");
      } catch (err) {
        console.log(err);
        // toast.error("Errr while adding new expense")
      }
    } else {
      toast.error("Please login first");
    }
  };

  const loadCategory = async () => {
    const res = await axios.get("http://localhost:8000/category/category");
    console.log(res.data.data);
    setcategories(res.data.data);
  };

  return (
    <>
      <div className="formbold-main-wrapper">
        <ToastContainer />
        {/* Author: FormBold Team */}
        {/* Learn More: https://formbold.com */}
        <div className="formbold-form-wrapper">
          {/* <img src="your-image-url-here.jpg" /> */}
          {/* <form action="https://formbold.com/s/FORM_ID" method="POST" > */}
          <form onSubmit={handleSubmit(submitHandler)}>
            <div className="formbold-form-title">
              <h2 className="">Add Expense</h2>
              <p>Enter all fields</p>
            </div>
            <div className="formbold-input-flex">
              <div>
                <label htmlFor="firstname" className="formbold-form-label">
                  Amount *
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
              <div>
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
              </div>
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
            <div className="formbold-input-flex">
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
            </div>
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
              Add Expense
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
