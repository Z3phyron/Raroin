import React, { useState } from "react";
import styled from "styled-components";
import Item from "../../../../components/cards/Item";
import { Items } from "../../../../lib/Data";

const All = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <Cont>
      <Title>All Categories</Title>
      <Menu>
        <Tab
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          All Items
        </Tab>
        <Tab
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          {/* <RiGamepadLine className="icon" /> */}
          Has List price
        </Tab>
        <Tab
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          Has open offer
        </Tab>
        <Tab
          className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(4)}
        >
          Owned by creator
        </Tab>
        <Tab
          className={toggleState === 5 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(5)}
        >
          Has sold
        </Tab>
      </Menu>

      <Content className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <ItemsCont>
            {Items.map((item, index) => (
              <Item key={index} item={item} />
            ))}
          </ItemsCont>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <h2>price</h2>
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <h2>offer</h2>
        </div>
        <div
          className={toggleState === 4 ? "content  active-content" : "content"}
        >
          <h2>owned</h2>
        </div>
        <div
          className={toggleState === 5 ? "content  active-content" : "content"}
        >
          <h2>sold</h2>
        </div>
      </Content>
    </Cont>
  );
};

const Cont = styled.div`
  /* p */
`;
const Title = styled.h2`
  /* p */
  color: var(--Blue-1);
  margin-bottom: 5vh;
`;

const Menu = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  /* justify-content: center; */
  align-items: center;
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
const ItemsCont = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 40px;
  margin-bottom: 10vh;
  /* text-align: center; */
  /* justify-content: center; */

  /* hr {
    background: var(--gray-blue);
    border: 1px solid var(--gray-blue);
    width: 80%;
    margin: auto;
  } */

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
`;
const Tab = styled.button`
  &.tabs {
    padding: 7px 15px;
    margin: 5px;
    cursor: pointer;
    font-size: 15px;
    border: none;
    color: var(--Blue-1);
    background: var(--White);
    position: relative;
    outline: none;
    border-radius: 50px;
  }
  /* &.tabs:not(:last-child) {
    border-right: 1px solid rgba(0, 0, 0, 0.274);
  } */

  &.active-tabs {
    background: var(--Blue-1);
    /* border-bottom: 1px solid transparent; */
    color: var(--White);
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
  /* background: var(--gray-blue); */

  .content {
    padding: 2% 0;
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

export default All;
