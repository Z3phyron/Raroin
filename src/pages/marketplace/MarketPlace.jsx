import React, { useState } from "react";
import styled from "styled-components";
import {
  RiGamepadLine,
  //  RiBrushLine
  } from "react-icons/ri"
import All from "./Marketitems/All"



const MarketPlace = (props) => {
  const [toggleState, setToggleState] = useState(1);



  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <Cont>
      <Title>
        <h1>NFT Marketplace</h1>
      </Title>
      <Menu>
        <Tab
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
        All
        </Tab>
        <Tab
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          <RiGamepadLine className="icon" />
          Games
        </Tab>
        <Tab
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          Art
        </Tab>
        <Tab
          className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(4)}
        >
          Trading Cards
        </Tab>
        <Tab
          className={toggleState === 5 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(5)}
        >
          Music
        </Tab>
        <Tab
          className={toggleState === 6 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(6)}
        >
          Domain Names
        </Tab>
        <Tab
          className={toggleState === 7 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(7)}
        >
        Memes
        </Tab>
        <Tab
          className={toggleState === 8 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(8)}
        >
          Collectibles
        </Tab>
      </Menu>
     
        <Content className="content-tabs">
          <div
            className={
              toggleState === 1 ? "content  active-content" : "content"
            }
          >
            <All/>
            
          </div>

          <div
            className={
              toggleState === 2 ? "content  active-content" : "content"
            }
          >
            <h2>Games</h2>
            
          </div>

          <div
            className={
              toggleState === 3 ? "content  active-content" : "content"
            }
          >
            <h2>Art</h2>
          
          </div>
          <div
            className={
              toggleState === 4 ? "content  active-content" : "content"
            }
          >
            <h2>Trading Cards</h2>
          
          </div>
          <div
            className={
              toggleState === 5 ? "content  active-content" : "content"
            }
          >
            <h2>Music</h2>
          
          </div>
          <div
            className={
              toggleState === 6 ? "content  active-content" : "content"
            }
          >
            <h2>Domain Names</h2>
          
          </div>
          <div
            className={
              toggleState === 7 ? "content  active-content" : "content"
            }
          >
            <h2>Memes</h2>
          
          </div>
          <div
            className={
              toggleState === 8 ? "content  active-content" : "content"
            }
          >
            <h2>Collectibles</h2>
          
          </div>
        </Content>
     
    </Cont>
  );
};

const Cont = styled.div`
  padding-top: 15vh;
  .button {
  }
`;
const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40vh;
  font-size: 30px;
  font-weight: 700;
  color: var(--Blue-1);
  border-bottom: 1px solid var(--gray-blue);
`;
const Menu = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;
const Tab = styled.button`
 

  &.tabs {
    padding: 15px;
    margin: 5px;
    cursor: pointer;
    font-size: 15px;
  border: none;
  color: var(--Blue-1);
  background: none;
    position: relative;
    outline: none;
  }
  /* &.tabs:not(:last-child) {
    border-right: 1px solid rgba(0, 0, 0, 0.274);
  } */

  &.active-tabs {
    /* background: white; */
    /* border-bottom: 1px solid transparent; */
    color: var(--Blue-2);
  }

  /* &.active-tabs::before {
    content: "";
    display: block;
    position: absolute;
    top: -5px;
    left: 50%;
    transform: translateX(-50%);
    width: calc(100% + 2px);
    height: 5px;
    background: rgb(88, 147, 241);
  } */
`;
const Content = styled.div`
 background: var(--gray-blue);
 
 .content {
   
    padding: 5%;
    width: 100%;
    height: 100%;
    display: none;
  }
  .content h2 {
    padding: 0px 0 5px 0px;
  }
  .content hr {
    width: 100px;
    height: 2px;
    background: #222;
    margin-bottom: 5px;
  }
  .content p {
    width: 100%;
    height: 100%;
  }
  .active-content {
    display: block;
  }
`;

export default MarketPlace;