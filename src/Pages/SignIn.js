import React from "react";
import { useState } from "react";
import bootstrap from "bootstrap";
import { Button, Alert } from "react-bootstrap";
import { ButtonGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../components/NavBar";
import { registerUser,loginUser } from "../Auth";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../Auth";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  return (
    <div>
      <header >
        <NavBar />
        <h1>sign in</h1>
      </header>
     
        
      
      <div className="form">
        <label htmlFor="email"></label>
        <input
          value={email}
          type={email}
          id="email"
          placeholder="Please enter email"
          required
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        ></input>
        <div className="form">
          <label htmlFor="password">Password</label>
          <input
            value={password}
            placeholder="******"
            type="password"
            id="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></input>
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            value={confirmPassword}
            placeholder="******"
            type="password"
            id="confirm-password"
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          ></input>
          <div className="Btn">
      <Button onClick={logoutUser()}>log off</Button>
            <Button
              variant="primary"
              onClick={async () => {
                if (password !== confirmPassword) {
                  console.log("error password does not match");
                  return false;
                } else {
                  const userEnter = await loginUser(email, password);
                  if (userEnter) {
                    navigate("/");
                  }
                }
              }}
              id="submit"
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
