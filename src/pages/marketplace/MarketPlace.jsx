import React, { useState } from "react";
import styled from "styled-components";
import {
  RiGamepadLine,
  //  RiBrushLine
} from "react-icons/ri";
import All from "./Marketitems/categories/All";
import { CollectionData} from "../../lib/Data";
import Collections from "../../components/cards/Collections";
import { Link } from "react-router-dom";
import Games from "./Marketitems/categories/Games";
import Art from "./Marketitems/categories/Art";
import TradingCards from "./Marketitems/categories/TradingCards";
import Music from "./Marketitems/categories/Music";
import DomainNames from "./Marketitems/categories/DomainNames";
import Memes from "./Marketitems/categories/Memes";
import Collectibles from "./Marketitems/categories/Collectibles";

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
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <All />
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <Games/>
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <Art/>
        </div>
        <div
          className={toggleState === 4 ? "content  active-content" : "content"}
        >
          <TradingCards/>
        </div>
        <div
          className={toggleState === 5 ? "content  active-content" : "content"}
        >
          <Music/>
        </div>
        <div
          className={toggleState === 6 ? "content  active-content" : "content"}
        >
          <DomainNames/>
        </div>
        <div
          className={toggleState === 7 ? "content  active-content" : "content"}
        >
          <Memes/>
        </div>
        <div
          className={toggleState === 8 ? "content  active-content" : "content"}
        >
          <Collectibles/>
        </div>
      </Content>
      <CollectionCont>
        <div className="header">
          <h3 className="title">Collections</h3>
          <Link to="/" className="cta">
            view all
          </Link>
        </div>
        <div className="collections">
          {CollectionData.map((collection, index) => (
            <Collections key={index} collection={collection} />
          ))}
        </div>
      </CollectionCont>
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
  text-align: center;
  border-bottom: 1px solid var(--gray-blue);
  @media (max-width: 1270px) {
    font-size: 18px;
  }
  @media (max-width: 900px) {
    font-size: 15px;
    height: 35vh;
  }
  @media (max-width: 530px) {
    font-size: 13px;
    height: 30vh;
  }
`;
const Menu = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  @media (max-width: 1270px) {
    font-size: 13px;
  }
  @media (max-width: 900px) {
    font-size: 12px;
  }
  @media (max-width: 530px) {
    font-size: 10px;
  }
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

const CollectionCont = styled.div`
  padding: 5% 5%;
  text-align: center;
  background: var(--gray-blue);
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;

    .title {
      font-size: 40px;
      font-weight: 600;
      color: var(--Blue-1);
      @media (max-width: 900px) {
        font-size: 24px;
      }
    }

    a {
      padding: 7px 15px;
      border-radius: 50px;
      color: var(--White);
      background: var(--Blue-1);
    }
  }

  .collections {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 30px;
    align-items: center;
    @media (max-width: 1270px) {
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 30px;
    }
    @media (max-width: 900px) {
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 20px;
    }
    @media (max-width: 530px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

export default MarketPlace;
