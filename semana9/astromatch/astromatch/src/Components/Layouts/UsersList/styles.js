import React from "react";
import styled from "styled-components";

export const MainContainer = styled.div`
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  width: 400px;
  height: 700px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50px;
  border: ${({ theme }) => theme.border};
  box-shadow: 0 0 5px #0000000f;

  @media (max-width: 320px) {
    width: 320px;
    height: 600px;
    border: none;
  }

  @media (max-width: 360px) {
    width: 360px;
    height: 550px;
    border: none;
  }
`;

export const Screen = styled.div`
  color: ${({ theme }) => theme.text};
  width: 375px;
  height: 475px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 0.5px solid rgba(0, 0, 0, 0.4);
  border-left: none;
  border-bottom: none;
  border-right: none;
  background-color: ${({ theme }) => theme.screen};
  box-shadow: 0 0 5px #0000000f;

  @media (max-width: 320px) {
    width: 295px;
    height: 375px;
  }

  @media (max-width: 370px) {
    width: px;
    height: 375px;
  }
`;

export const Image = styled.img`
  width: 375px;
  height: 475px;
`;

export const ListItemHover = styled.div`
  margin: 0%;
  width: 375px;

  &:hover {
    background-color: #f50057;
  }
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
  background-color: ${({ theme }) => theme.buttonsContainer};
`;

export const Box = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;
  position: fixed;
  left: 50%;
  top: 10%;
  transform: translate(-50%, -50%);
`;

export const Header = styled.div``;

export const Logo = styled.p`
  color: #f50057;
  position: fixed;
  font-family: "Satisfy", cursive;
  font-size: 20pt;
  left: 50%;
  top: 1%;
  transform: translate(-50%, -50%);
`;

export const Username = styled.p`
  text-align: left;
  border: 1px solid orange;
  width: 90%;
  max-height: 30%;
  position: fixed;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 22pt;
  left: 50%;
  top: 65%;
  transform: translate(-50%, -50%);
`;

export const UserDescription = styled.p`
  border: 1px solid purple;
  position: absolute;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 16pt;
  width: 90%;
  text-align: left;
  left: 50%;
  top: 75%;
  transform: translate(-50%, -50%);
`;
