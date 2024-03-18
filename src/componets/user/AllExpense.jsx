
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';


export const AllExpense = () => {
  const [expenses, setExpenses] = useState();
  const [srNo, setSrNo] = useState([]);

  useEffect(() => {
    

    getExpenses();
  }, []);

  const deleteExpense = async(id) => {
    // do i need to add +id in the below line or can use url route from backend for expense deletion
    try{ 
      const res = await axios.delete("http://localhost:8000/expenses/expense/"+id)
      toast.success("deleted successfully");
      getExpenses();
    }
    catch(err){
      toast.error("error deleting expense")
    }
  }

  const getExpenses = async () => {
    const id = localStorage.getItem("id")
    if(id!==undefined || id !== null){
    try {
      const res = await axios.get('http://localhost:8000/expenses/expense/'+id);
      console.log(res);
      
      console.log(res.data.data);
      
      setExpenses(res.data.data);
      
      toast.success('Received data from server')
    } catch (e) {
      toast.error('No expenses found something wrong');
    }
  }else{
    toast.error("Please login first")
  }
  };

  return (
    <div className="content">
    <ToastContainer position="bottom-right" autoClose={1000} />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="card strpied-tabled-with-hover">
              <div className="card-header">
                <h4 className="card-title">Expenses</h4>
                <p className="card-category">Here is all the expenses in table</p>
              </div>
              <div className="card-body table-full-width table-responsive">
                <table className="table table-hover table-striped">
                  <thead>
                    <tr>
                      <th>Sr No.</th>
                      <th>ID</th>
                      <th>Amount</th>
                      <th>Category</th>
                      <th>Payment Method</th>
                      {/* <th>Bill </th> */}
                      <th>Description</th>
                      <th>Action</th>

                    </tr>
                  </thead>
                  <tbody>
                    {expenses?.map((expense) => (
                      <tr key={expense._id}>
                        <td>{srNo}</td>
                        <td>{expense._id}</td>
              
                        <td>{expense.amount}</td>
                        <td>{expense.category}</td>
                        <td>{expense.paymentMethod}</td>
                        {/* <td><a href="{expense.billUrl}">image</a></td> */}
                        <td>{expense.description}</td>
                        <td> <button onClick= {()=>{deleteExpense(expense._id)}}>Delete</button> </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};