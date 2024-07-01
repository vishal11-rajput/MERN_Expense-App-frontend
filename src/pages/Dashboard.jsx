import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import axios from "axios";

import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart,
  LinearScale,
} from "chart.js";
Chart.register(CategoryScale);
Chart.register(ArcElement);
Chart.register(LinearScale);
Chart.register(BarElement);

export const Dashboard = () => {
  const [expenseData, setExpenseData] = useState();

  const [graphData, setgraphData] = useState({
    labels: [],
    datasets: [],
  });

  const getExpenses = async () => {
    const id = localStorage.getItem("id");
    if (id !== undefined || id !== null) {
      try {
        const res = await axios.get(
          "http://localhost:8000/expenses/user-expense/" + id
        );
        setExpenseData(res.data.data);
        console.log(res.data.data);

        if (res.data.data && res.data.data.length > 0) {
          const expenseMap = {};

          res.data.data.forEach((expense) => {
            const expName = expense.category.categoryName;
            console.log(expName);
            if (expenseMap[expName]) {
              expenseMap[expName] += expense.amount;
            } else {
              expenseMap[expName] = expense.amount;
              console.log(expense.amount)

            }
          });

          const data = {
            labels: Object.keys(expenseMap),
            datasets: [
              {
                label: "Total Expenses",
                backgroundColor: ["#ff6300", "#ff6361", "#58508d"],
                borderColor: "rgba(0,0,0,1)",
                borderWidth: 1,
                data: Object.values(expenseMap),
                
              },
            ],
          };
          setgraphData(data);
        }
      } catch (err) {
        console.log(err);
        alert("Login first");
      }
    }
  };

  useEffect(() => {
    getExpenses();
  }, []);

  return (
    <div className="content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8">
            <div className="card ">
              <div className="card-header ">
                <h4 className="card-title">Expenses Behavior</h4>
                <p className="card-category">Category wise Expenses</p>
              </div>
              <div className="card-body ">
                <Bar data={graphData} />
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card ">
              <div className="card-header ">
                <h4 className="card-title">
                  <input
                    style={{
                      width: "70%",
                      borderRadius: "5px",
                      margin: "5px",
                      textAlign: "center",
                      border: "1px solid #4681f4",
                    }}
                    type="search"
                    placeholder="search..."
                  />{" "}
                  <span>
                    <button
                      style={{
                        padding: "0 10px 0 10px",
                        margin: "5px",
                        borderRadius: "5px",
                        border: "none",
                        backgroundColor: "#4681f4",
                        color: "white",
                      }}
                    >
                      Enter
                    </button>
                  </span>
                </h4>
                <p className="card-category">Recent Expenses</p>
              </div>
              <div className="card-body ">
                <div style={{ padding: "20px", backgroundColor: "#EEEEFF" }}>
                  Category: Food <br />
                  Amount: 100
                </div>
                <hr />
                <div style={{ padding: "20px", backgroundColor: "#EEEEFF" }}>
                  Category: Medical <br />
                  Amount: 1000
                </div>
                <hr />
                <div style={{ padding: "20px", backgroundColor: "#EEEEFF" }}>
                  Category: Entertainment <br />
                  Amount: 300
                </div>
                <hr />
                <div style={{ padding: "10px", backgroundColor: "#EEEEFF" }}>
                  Category: Shopping <br />
                  Amount: 400
                </div>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
