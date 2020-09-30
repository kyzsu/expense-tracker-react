import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0);
  return (
    <div>
      <h4>Your Balance</h4>
      <h1>Rp{total}</h1>
    </div>
  );
};
