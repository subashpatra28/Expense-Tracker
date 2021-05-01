import React from "react";
import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeList from "./components/IncomeList";
import ExpenseList from "./components/ExpenseList";
import AddTransaction from "./components/AddTransaction";
import { GlobalContextProvider } from "./context/GlobalState";
import "./App.css";

const App = () => {
  return (
    <React.Fragment>
      <GlobalContextProvider>
        <div className="container">
          <div className="app-wrapper">
            <Header />
            <Balance />
            <IncomeList />
            <ExpenseList />
            <AddTransaction />
          </div>
        </div>
      </GlobalContextProvider>
    </React.Fragment>
  );
};

export default App;
