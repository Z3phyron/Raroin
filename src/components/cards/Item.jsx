import React from 'react'
import styled from "styled-components";
// import { CgHeart, CgRepeat } from 'react-icons/cg';
import { RiHeartFill } from 'react-icons/ri';
import { VscHistory } from 'react-icons/vsc';
import { Link } from 'react-router-dom';

const Item = (props) => {
    const { handler1, handler2, handle1, handle2, title, itemImg, review, amount, price   } = props.item
    return (
      <Card>
        <Handlers>
          <div className="handler">
            <img src={handler1} alt="" />
            <div className="handle">@{handle1}</div>
          </div>
          <div className="handler">
            <img src={handler2} alt="" />
            <div className="handle">@{handle2}</div>
          </div>
        </Handlers>
        <ItemImg>
          <img src={itemImg} alt="" />
          <div className="review">
            <RiHeartFill className="icon" />
            {review}k
          </div>
        </ItemImg>
        <ItemInfo>
          <h4 className="title">{title}</h4>
          <div className="stock_info">
            <p className="stock_amount">{amount} in stock</p>
            <p className="stock_price">
              Price: <span>{price} ETH</span>
            </p>
          </div>
        </ItemInfo>
        <hr />
        <Links>
          <Link className="history" to="/">
            <VscHistory className="icon" />
            View History
          </Link>
          <Link className="cta" to="/">
            Place Bid
          </Link>
        </Links>
      </Card>
    );
}


const Card = styled.div`
  background: var(--White);
  padding: 15px;
  margin: 0 auto;
  width: 270px;
  /* box-shadow: 0 1px 1px 1px var(--gray-blue); */
  border-radius: 10px;
  display: grid;
  grid-gap: 10px;
  align-items: center;


  /* @media (max-width: 1270px) {
    width: 200px;
  } */
  @media (max-width: 900px) {
    width: 100%;
  }
  @media (max-width: 900px) {
    width: 100%;
  }

  hr {
    /* background: var(--gray); */
    border: 1px solid var(--gray-blue);
  }
`;
const Handlers = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .handler {
    display: flex;
    /* justify-content: space-between; */
    align-items: center;
    img {
      width: 20px;
      border-radius: 50px;
      margin-right: 4px;
    }
    .handle {
      font-size: 10px;
      font-weight: 600;
      color: var(--Blue-1);
    }
  }
`;
const ItemImg = styled.div`
border-radius: 12px;
overflow: hidden;
position: relative;
width: 100%;
height: 250px;
object-fit: contain;
img {
    width: 100%;
    height: 100%;
}

.review {
    position: absolute;
    top: 10px;
    right: 10px;
    display: flex;
    align-items: center;
    padding: 5px 7px;
    background: var(--White);
    border-radius: 20px;
    font-size: 12px;

    .icon {
        font-size: 15px;
        margin-right: 3px;
        color: var(--pink);
    }
}

`;
const ItemInfo = styled.div`
.title {
    font-size: 18px;
    font-weight: 600;
    color: var(--Blue-1);
    margin-bottom: 15px;
    text-align: left;
    text-transform: capitalize;
}

.stock_info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 13px;

    .stock_amount {
        color: var(--gray);
    }

    .stock_price {
        font-weight: 600;
        span {
            color: var(--green);
            font-weight: 300;
        }
    }
    
}
  
`;
const Links = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
/* border-top: 1px solid #000; */
font-size: 12px;
a {
    color: var(--gray);
    display: flex;
    align-items: center;

    .icon {
        color: #000;
        margin-right: 3px;
        font-size: 15px;
    }
}

.cta {
    padding: 7px 15px;
    background: var(--Blue-2);
    color: var(--White);
    border-radius: 50px;
}
`;

export default Item
