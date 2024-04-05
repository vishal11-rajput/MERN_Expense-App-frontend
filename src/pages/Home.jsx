import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import  Shopping from "../images/shopping.png"
import Entertainment from '../images/tv.png'
import Expenses from '../images/coins.png'
export const Home = () => {
  return (
    <div className="home">
      <div className="homeHeading">
        <h1 >Welcome to Expense Manager</h1>
      </div>
      <div className="homePara">
        <p className="p1">
          "Welcome to Expense Manager! Take control of your finances and track
          your expenses effortlessly. With Expense Manager, you can easily
          monitor your spending, set budgets, and stay on top of your financial
          goals. Start managing your expenses efficiently and make informed
          financial decisions. "
        </p>
        <div className="flex-container">
          <p className="p2">Let's simplify your financial journey together!</p>

          <a href="/signup">
            {" "}
            <button class="cssbuttons-io-button">
              Get started
              <div class="icon">
                <svg
                  height="24"
                  width="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
            </button>
          </a>
        </div>
      </div>
      <div className="homeCardDiv">
        <h2 className="cardHeading">Explore expenses by Category</h2>
        <div className="homeCard">
          <div class="card-home">
            <img src={Shopping} alt="" />
            
            <div class="card__content">
              <p class="card__title">Shopping</p>
              <p class="card__description">
              you can use an expense tracking software or template. You can categorize your expenses as needs, wants, and savings
              </p>
            </div>
          </div>
          <div class="card-home">
            <img src={Entertainment} alt="" />
            <div class="card__content">
              <p class="card__title">Entertainment</p>
              <p class="card__description">
              Entertainment expenses are money spent on activities or events related to a business purpose, and are sometimes partially tax-deductible.
              </p>
            </div>
          </div>
          <div class="card-home">
            <img src={Expenses} alt="" />
           
            <div class="card__content">
              <p class="card__title">Other Expense</p>
              <p class="card__description">
              You can use this expense manager app . You can categorize your expenses as needs, wants, and savings
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
