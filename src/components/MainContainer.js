import React, { useEffect, useState } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {

  const [stockLoad, setStockLoad] =useState([]);
  const [portfolioLoad, setPortfolioLoad]= useState([]);
  const [filterBy, setFilterBy]= useState("Alphabetically");;
  const [sortBy, setSortBy]= useState("Tech");

  useEffect(()=> {
    fetch("http://localhost:3001/stocks")
    .then((resp) => resp.json())
    .then((data) => setStockLoad(data))
  })

  function handleAddStock (stockToAdd) {
    const stockInPortfolio = portfolioLoad.find(
      (stock) => stock.id === stockToAdd.id
    )
    if(!stockInPortfolio){
      setPortfolioLoad([...portfolioLoad, stockToAdd])

    }
  }

  function handleRemoveStock (stocktoRemove) {
    setPortfolioLoad((portfolio) =>
    portfolio.filter((stock) => stock.id !== stocktoRemove.id))

  }

  const sortedStocks= [...stockLoad].sort((stock1, stock2) => {  //.sort sorts 
    if(sortBy === "Alphabetically") {                            // in ascending order
      return stock1.name.localeCompare(stock2.name);             //*localeCompare compares
    } else {                                                     // two strings
      return stock1.price - stock2.price}
  });

  const filteredStocks = sortedStocks.filter(
    (stock) => stock.type === filterBy )




  return (
    <div>
      <SearchBar
      sortBy={sortBy}
      onChangeSort={setSortBy}
      filterBy={filterBy}
      onChangeFilter={setFilterBy}

       />
      <div className="row">
        <div className="col-8">
          <StockContainer 
          stockLoad={filteredStocks}
          handleAddStock={handleAddStock}
         
          />
        </div>
        <div className="col-4">
          <PortfolioContainer
          stocks={portfolioLoad} 
          handleRemoveStock={handleRemoveStock}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
