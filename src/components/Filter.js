import React from "react";


function Filter(props) {
    const {
        sortField,
        setSortField,
        sortOrder,
        setSortOrder,
        filterField,
        setFilterField,
        filterValue,
        setFilterValue,
        limit,
        setLimit,
        page,
        setPage
       
      } = props;
 
    return (
    <div> <div id="tool-bar">
    <input type="button" value="" />
    <select onChange={(e)=>{
        const changeSortField = e.target.value;
        setSortField(changeSortField)
    }} value={sortField}>
      <option value="title">Title</option>
      <option value="price">price</option>
      <option value="category">category</option>
      <option value="productId">ID</option>
    </select>
    <select
      onChange={(e) => {
        const changeSortOrder = e.target.value;
        setSortOrder(changeSortOrder);
      }}
      value={sortOrder}
    >
      <option value="ASC">ASC</option>
      <option value="DESC">DESC</option>
    </select>
    <select onChange={(e)=>{
        const changeFilterField = e.target.value;
        setFilterField(changeFilterField)
    }} value={filterField}>
      <option value="category">category</option>
    </select>
    <input
      onChange={(e) => {
        const changeFilterValue = e.target.value;
        setFilterValue(changeFilterValue);
      }}
      type="text"
      value={filterValue}
    ></input>
    <input
      onChange={(e) => {
        const changePage = e.target.value;
        setPage(changePage);
      }}
     placeholder="page"
      value={page}
      type="number"
      min="1"
    ></input>
    <input
      onChange={(e) => {
        const changeLimit = e.target.value;
        setLimit(changeLimit);
      }}
      value={limit}
      type="number"
      min="1"
    ></input>
  </div></div>
  )
}

export default Filter

