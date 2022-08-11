import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const urlEndpoint = process.env.REACT_APP_URL_ENDPOINT;

export const registerUser = async (email, password) => {
  const response = await fetch(`${urlEndpoint}/auth/create-user`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });
  const responseJSON = await response.json();
  return responseJSON.success;
};


export const loginUser = async (email, password) => {
  const url = `${urlEndpoint}/auth/login`;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
      type:"user"
    }),
  });
  const responseJSON = await response.json();
  console.log(responseJSON);
  if (responseJSON.success) {
    localStorage.setItem(
      process.env.REACT_APP_TOKEN_HEADER_KEY,
      JSON.stringify(responseJSON.token)
    );
  }
  return responseJSON;
};
export const getUserToken = () => {
  return JSON.parse(
    localStorage.getItem(process.env.REACT_APP_TOKEN_HEADER_KEY)
  );
};

export const getProducts = async () => {
  const response = await fetch(`${urlEndpoint}/auth/get-products`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const responseJSON = await response.json();
  return responseJSON;
};

export const logoutUser = () => {
  localStorage.removeItem(process.env.REACT_APP_TOKEN_HEADER_KEY);
};
const validateAdmin = async (userToken) => {
  const url = `${urlEndpoint}/auth/validate-admin`;
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      [process.env.REACT_APP_TOKEN_HEADER_KEY]: userToken,
    },
  });
  const responseJSON = await response.json();
  return responseJSON;
};