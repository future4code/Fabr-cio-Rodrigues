import React from "react";
import styled from "styled-components";

export const MainContainer = styled.div`
  color: white;
  width: 400px;
  height: 700px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50px;
  border: 1px solid black;
  background-color: white;
  box-shadow: 0 0 5px #0000000f;
`;

export const Screen = styled.div`
  width: 375px;
  height: 475px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  box-shadow: 0 0 5px #0000000f;
`;

export const Image = styled.img`
  width: 375px;
  height: 475px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 250px;
  height: 35px;
  position: fixed;
  top: 95%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50px;
  background-color: white;
`;

export const Box = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;
  flex-direction: row-reverse;
  position: fixed;
  left: 50%;
  top: 10%;
  transform: translate(-50%, -50%);
`;

export const Header = styled.div``;

export const Logo = styled.p`
  color: black;
  position: fixed;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 20px;
  left: 50%;
  top: 1%;
  transform: translate(-50%, -50%);
`;

export const Username = styled.p`
  text-align: left;
  width: 90%;
  max-height: 30%;
  position: fixed;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 22pt;
  font-weight: bold;
  left: 50%;
  top: 65%;
  transform: translate(-50%, -50%);
`;

export const BottomText = styled.div`
  width: 375px;
  height: 180px;
  position: fixed;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.1);
`;

export const UserDescription = styled.p`
  position: absolute;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 16pt;
  width: 90%;
  text-align: left;
  left: 50%;
  top: 80%;
  transform: translate(-50%, -50%);
`;
