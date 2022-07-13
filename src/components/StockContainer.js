import React from "react";
import Stock from "./Stock";

function StockContainer({ stockLoad , handleAddStock }) {

  const stockRows= stockLoad.map((stock) => {
    return <Stock
    key={stock.id}
    stock={stock}
    onStockClick={handleAddStock}
    />
  })



  return (
    <div>
      <h2>Stocks</h2>
      {stockRows}
    </div>
  );
}

export default StockContainer;
