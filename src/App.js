import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import { useState } from "react";
import SignIn from "./Pages/SignIn";
import bootstrap from "bootstrap";
import { faFontAwesome } from "@fortawesome/free-solid-svg-icons";
import Admin from "./Pages/Admin";
import Registration from "./Pages/RegistrationPage";
import Main from "./components/Main";
import Basket from "./components/Basket";
function App() {
  const [isAuthLoading, setIsAuthLoading] = useState(false);
  const [currentCart, setCurrentCart] = useState([]);
  const [orderHistory, setOrderHistory] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [serverJSON, setServerJSON] = useState({ message: [] });
  const [sortField, setSortField] = useState("productId");
  const [sortOrder, setSortOrder] = useState("DESC");
  const [filterField, setFilterField] = useState("title");
  const [filterValue, setFilterValue] = useState("");
  const [limit, setLimit] = useState(Number());
  const [page, setPage] = useState(Number(1));
  const [isFetching, setIsFetching] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route
            path="/"
            element={
              <NavBar
                isAuthLoading={isAuthLoading}
                setIsAuthLoading={setIsAuthLoading}
              />
            }
          ></Route>
          <Route
            isAdmin={isAdmin}
            setIsAdmin={setIsAdmin}
            isAuthLoading={isAuthLoading}
            setIsAuthLoading={setIsAuthLoading}
            currentCart={currentCart}
            setCurrentCart={setCurrentCart}
            orderHistory={orderHistory}
            setOrderHistory={setOrderHistory}
            element={<SignIn />}
            components={SignIn}
            path="/login"
          ></Route>
          <Route
            isAdmin={isAdmin}
            setIsAdmin={setIsAdmin}
            isAuthLoading={isAuthLoading}
            setIsAuthLoading={setIsAuthLoading}
            element={<Registration />}
            components={Registration}
            path="/create-user"
          ></Route>
          <Route
            currentCart={currentCart}
            setCurrentCart={setCurrentCart}
            isAuthLoading={isAuthLoading}
            setIsAuthLoading={setIsAuthLoading}
            sortField={sortField}
            setSortField={setSortField}
            sortOrder={sortOrder}
            setSortOrder={setSortOrder}
            filterField={filterField}
            setFilterField={setFilterField}
            filterValue={filterValue}
            setFilterValue={setFilterValue}
            limit={limit}
            setLimit={setLimit}
            page={page}
            setPage={setPage}
            element={<Main />}
            components={Main}
            path="/main"
          />
       
       <Route setCurrentCart={setCurrentCart}
            isAuthLoading={isAuthLoading}
            setIsAuthLoading={setIsAuthLoading}
            sortField={sortField}
            setSortField={setSortField}
            sortOrder={sortOrder}
            setSortOrder={setSortOrder}
            filterField={filterField}
            setFilterField={setFilterField}
            filterValue={filterValue}
            setFilterValue={setFilterValue}
            limit={limit}
            setLimit={setLimit}
            page={page}
            setPage={setPage}  path='/admin' element={<Admin/>} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
