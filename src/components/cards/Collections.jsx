import React from "react";
// import { FiHeart } from "react-icons/fi";
import styled from "styled-components";
import { RiHeartFill } from "react-icons/ri";

const Collections = (props) => {
  const { img1, img2, img3, img4, title, handler, review, amount, handle } =
    props.collection;

  return (
    <Box>
      <Card>
        <Thumb>
          <SubImg>
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
          </SubImg>
          <img src={img4} alt="" />
        </Thumb>
      </Card>
      <Info>
        <h3 className="title">{title}</h3>
        <p className="review">
          <RiHeartFill className="icon" />
          {review}k
        </p>
      </Info>
      <Maker>
        <p className="amount_made">{amount} items</p>
        <div className="created_by">Created by 
          <img src={handler} alt="" />
          <p className="handle">@{handle}..</p>
        </div>
      </Maker>
    </Box>
  );
};

const Box = styled.div`
  width: 300px;
  margin: 0 auto;
`;
const Card = styled.div`
  background: var(--White);
  padding: 15px;
  margin: 0 auto;
  width: 300px;
  border-radius: 10px;
  display: grid;
  grid-gap: 10px;
  align-items: center;
  margin-bottom: 15px;
`;

const Thumb = styled.div`
  border-radius: 10px;
  overflow: hidden;
  display: grid;
  grid-gap: 10px;
  img {
    width: 100%;
  }
`;
const SubImg = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  width: 100%;

  img {
    width: 100%;
  }
`;
const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
margin-bottom: 15px;
  .title {
    font-size: 18px;
    font-weight: 600;
    color: var(--Blue-1);
    
    text-align: left;
    text-transform: capitalize;
  }

  .review {
      display: flex;
      align-items: center;

      .icon {
          color: var(--gray);
          margin-right: 3px;
      }
  }
`;

const Maker = styled.div`
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  color: var(--gray);

  .amount_made {
      /* margin-right: 10px; */
  }

  .created_by {
    display: flex;
    /* justify-content: space-between; */
    align-items: center;
    margin-left: 10px;

    img {
      width: 30px;
      border: 50px;
      /* margin-right: 2px;
       */
      margin: 0 3px;
      border: 1px solid var(--White);
      border-radius: 50px;
    }
  }
`;

export default Collections;
