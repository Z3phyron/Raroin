import React, { useState } from "react";
import styled from "styled-components";
import img from "../../Assets/mockups/item_2.png";
import { RiHeartFill, RiShareLine } from "react-icons/ri";
import { BsThreeDots } from "react-icons/bs";

const ItemDetails = () => {
  const [proofOfAuth, setProofOfAuth] = useState("View proof of authenticity");
  const [toggleState, setToggleState] = useState(1);

  const handleSelectChange = (e) => {
    setProofOfAuth(e.target.value);
  };

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <Cont>
      <BackBtn>Back to home</BackBtn>
      <Details>
        <ItemImg>
          <img src={img} alt="" />
        </ItemImg>
        <ItemInfo>
          <Title>Creative girl illustration</Title>
          <StockDetail>
            <div>
              <div className="amount">1 of 1</div>
                          <div className="rating">
                              <RiHeartFill className="icon"/> 2.1k
              </div>
            </div>
            <div>
              <button><RiShareLine/></button>
              <button><BsThreeDots/></button>
            </div>
          </StockDetail>
          <Select onChange={handleSelectChange} value={proofOfAuth}>
            <option value="view proof of authenticity">
              View proof of authenticity
            </option>
            <option value="view on ipfs">view on IPFS</option>
            <option value="view on Etherscan">view on Etherscan</option>
          </Select>
          <DetailTab>
            <Menu>
              <Tab
                className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(1)}
              >
                Details
              </Tab>
              <Tab
                className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(2)}
              >
                {/* <RiGamepadLine className="icon" /> */}
                Bids
              </Tab>
              <Tab
                className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(3)}
              >
                History
              </Tab>
            </Menu>
            <hr />

            <Content className="content-tabs">
              <div
                className={
                  toggleState === 1 ? "content  active-content" : "content"
                }
              >
                <p>
                  Hey guys! New exploration about NFT Marketplace Web Design,
                  this time I'm inspired by one of my favorite NFT website
                  called Rarible (with crypto payment)! What do you think?
                </p>
              </div>

              <div
                className={
                  toggleState === 2 ? "content  active-content" : "content"
                }
              >
                <p> No active bids yet. Be the first to make a bid!</p>
              </div>

              <div
                className={
                  toggleState === 3 ? "content  active-content" : "content"
                }
              >
                <h2>cards</h2>
              </div>
            </Content>
          </DetailTab>
          <AucDetails>
            <div className="bid">
                          <h5 className="header">Minimum bid</h5>
                          <h3><span>2.4000</span>ETH/ $4769.88</h3>
            </div>
            <div className="countdown">
                          <h5 className="header">countdown</h5>
                          <h3><span>21 : 12 : 28</span></h3>
            </div>
          </AucDetails>
          <hr />
          <Handlers>
            <div className="handler">
              {/* <img src={handler} alt="" /> */}
              <p className="handle">@ayoub_fennouni / fouzi...</p>
            </div>
            <div className="handler">
              {/* <img src={handler} alt="" /> */}
              <p className="handle">@makinzi_jamy......</p>
            </div>
          </Handlers>
          <BtnGrp>
            <button>Buy Now</button>
            <button className="gradient">Place Bid</button>
          </BtnGrp>
        </ItemInfo>
      </Details>
    </Cont>
  );
};

const Cont = styled.div`
  /* p */

  padding: 20vh 5%;
  background: var(--gray-blue);
`;
const BackBtn = styled.button`
  /* p */
  padding: 7px 15px;
  outline: none;
  border: none;
  border-radius: 50px;
  background: var(--White);
  color: var(--Blue-1);
  margin-bottom: 10vh;
`;
const Details = styled.div`
  /* p */
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;

  hr {
      background: var(--gray-blue);

  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
const ItemImg = styled.div`
  /* p */
  width: 100%;
  height: 90vh;
  border-radius: 20px;
  overflow: hidden;
  object-fit: cover;

  img {
    width: 100%;
    height: 100%;
  }
`;
const ItemInfo = styled.div`
  /* p */
`;
const Title = styled.h2`
  /* p */
  color: var(--Blue-1);
  font-size: 26px;
  margin-bottom: 20px;
`;
const Select = styled.select`
  /* p */
  padding: 7px 15px;
  outline: none;
  border: none;
  border-radius: 50px;
  background: var(--Blue-1);
  color: var(--White);
  margin-bottom: 30px;
`;
const StockDetail = styled.div`
  /* p */
  margin: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    /* justify-content:  ; */
    align-items: center;

    .amount {
      margin-right: 10px;
    }
    .rating {
      /* margin-right: 10px; */
      padding: 5px 10px;
      background: var(--White);
      border-radius: 50px;

      .icon {
        color: var(--pink);

      }
    }
  }

  button {
    width: 50px;
    height: 50px;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    outline: none;
    font-size: 20px;
    border: none;
    background: var(--White);
    color: var(--Blue-1);
    margin-left: 10px;
  }
`;
const DetailTab = styled.div`
  /* p */
  background: var(--White);
  border-radius: 20px;
  padding: 20px;
  margin-bottom: 20px;

  hr {
      background: var(--gray-blue);
  }
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

const Tab = styled.button`
  &.tabs {
    padding: 7px 15px;
    margin: 5px;
    margin-left: 0;
    margin-right: 10px;
    cursor: pointer;
    font-size: 16px;
    box-shadow: 0 1px 1px 1px var(--gray-blue);
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

  p {
    line-height: 150%;
    font-size: 18px;
  }

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

const AucDetails = styled.div`
  /* p  */
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  margin: 20px 0;
  color: var(--gray);
  font-size: 18px;

  .header {
      margin-bottom: 15px;
      font-size: 16px;
  }

  span {
      color: var(--black);
  }
`;
const Handlers = styled.div`
  /* p  */display: grid;
  margin: 20px 0;
    grid-template-columns: repeat(2, 1fr);

  .handler {
    display: flex;
    /* justify-content: space-between; */
    align-items: center;
    /* margin-left: 10px; */

    img {
      width: 30px;
      border: 50px;
      /* margin-right: 2px;
       */
      margin: 0 3px;
      border: 2px solid var(--White);
      border-radius: 50px;
    }
  }
`;
const BtnGrp = styled.div`
  /* p  */
  button {
      padding: 10px 25px;
      outline: none;
      border: none;
      border-radius: 50px;
      color: var(--White);
      text-transform: capitalize;
      margin-right: 20px;
      background: var(--Blue-2);

      &.gradient {
          background: linear-gradient(150deg, var(--Blue-2), var(--Blue-3));
      }
  }
`;

export default ItemDetails;
