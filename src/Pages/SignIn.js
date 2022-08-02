import React from "react";
import { useState } from "react";
import bootstrap from "bootstrap";
import { Button, Alert } from "react-bootstrap";
import { ButtonGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../components/NavBar";
export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
const  [confirmPassword,setConfirmPassword] = useState('')
  return (
    <div>
      <header className="row">
        <NavBar />
      </header>

      <form className="form">
        <div>
          <h1>sign in</h1>
        </div>
        <div className="form">
          <label htmlFor="email"></label>
          <input
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
             placeholder="******"
              type="password"
              id="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            ></input>
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
             placeholder="******"
              type="password"
              id="confirm-password"
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
            ></input>
            <div className="Btn">
              <label htmlFor="submit">Submit</label>
              <Button variant="primary" id="submit"></Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
