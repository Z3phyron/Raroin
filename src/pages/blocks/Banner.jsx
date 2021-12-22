import React from "react";
import styled from "styled-components";
import logoIlistration from "../../Assets/mockups/Logo_illustrstion.png";

const Banner = () => {
  return (
    <Cont>
      <Text>
        <h3 className="heading">Start your own collection today</h3>
        <p className="desc">
          raroin is a shared liquidity NFT market smart contract which is used
          by multiple websites to provide the users the best possible
          experience.
        </p>
        <button className="colored">Start Collecting</button>
      </Text>
      <Image>
        <img src={logoIlistration} alt="" />
      </Image>
    </Cont>
  );
};

const Cont = styled.div`
  padding: 15vh 5%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 40px;
  align-items: center;
  background: var(--Blue-1);

  @media (max-width: 900px) {
    padding: 20vh 3% 0;
    grid-gap: 30px;
    text-align: center;
    grid-template-columns: repeat(1, 1fr);
  }
`;
const Text = styled.div`
  z-index: 5;
  width: 95%;
  .heading {
    font-size: 50px;
    font-weight: 700;
    letter-spacing: 2px;
    color: var(--White);
    z-index: 999;
    margin-bottom: 20px;
    @media (max-width: 900px) {
      font-size: 30px;
      font-weight: 700;
    }
  }

  .desc {
    color: var(--gray);
    font-size: 20px;
    line-height: 150%;
    letter-spacing: 1px;
    margin-bottom: 20px;

    @media (max-width: 900px) {
      font-size: 17px;
    }
  }

  button {
    padding: 10px 25px;
    border-radius: 50px;
    border: none;
    font-size: 17px;
    margin-right: 20px;
    outline: none;
    transition: all 0.5s;
    @media (max-width: 900px) {
      /* width: 100%; */
      margin: 0;
      margin-bottom: 20px;
    }

    &.colored {
      color: var(--White);
      background: var(--Blue-2);
      box-shadow: 0 1px 1px 1px var(--Blue-3);
    }

    &.white {
      background: var(--White);
      color: var(--Blue-1);
      box-shadow: 0 1px 1px 1px var(--Blue-3);
    }
  }
`;

const Image = styled.div`
  /* padding: 0 5%; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  img {
    width: 70%;
    margin: auto;
  }
`;

export default Banner;
