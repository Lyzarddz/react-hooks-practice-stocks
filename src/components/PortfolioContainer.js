import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ stocks , handleRemoveStock}) {

  const myStocks= stocks.map((stock) => (
    <Stock
    key={stock.id}
    stock={stock}
    onStockClick={handleRemoveStock}
    />
  )

  )


  return (
    <div>
      <h2>My Portfolio</h2>
      {
       myStocks
      }
    </div>
  );
}

export default PortfolioContainer;
