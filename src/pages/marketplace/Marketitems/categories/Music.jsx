import React from 'react'
import { Link } from 'react-router-dom';
import styled from "styled-components";
import Item from "../../../../components/cards/Item";
import { Items } from "../../../../lib/Data";

const Music = () => {
  return (
    <Cont>
      <Title>Music</Title>
      <ItemsCont>
        {Items.slice(0, 7).map((item, index) => (
          <Link to="/itemDetails">
            <Item key={index} item={item} />
          </Link>
        ))}
      </ItemsCont>
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


export default Music
