import styled from "styled-components";
import "./style.css";
import showcaseImg from "../../Assets/mockups/in_hero1.png";
import bg from "../../Assets/mockups/sh_2.png";

const Showcase = () => {
  return (
    <Cont className="showcase">
      <div className="bg">
        <img src={bg} alt="" />
      </div>
      <Text>
        <h3 className="heading">Discover digital art and collect NFTs</h3>
        <p className="desc">
          raroin is a shared liquidity NFT market smart contract which is used
          by multiple websites to provide the users the best possible
          experience.
        </p>
        <div className="btn_group">
          <button className="colored">View market</button>
          <button className="white">Upload your item</button>
        </div>
      </Text>
      <Image>
        <img src={showcaseImg} alt="" />
      </Image>
    </Cont>
  );
};

const Cont = styled.div`
  padding: 15vh 5% 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 40px;
  align-items: center;
  .bg {
    z-index: 1;
    position: absolute;
    top: 100px;
    height: 200px;
    left: 0;
    width: 200px;
  }

  @media (max-width: 900px) {
    padding: 20vh 3% 0;
    grid-gap: 30px;
    grid-template-columns: repeat(1, 1fr);

    .bg {
      display: none;
    }
  }
`;
const Text = styled.div`
  z-index: 5;
  .heading {
    font-size: 50px;
    font-weight: 700;
    letter-spacing: 2px;
    color: var(--Blue-1);
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

  .btn_group {
    display: flex;
    align-items: center;
    @media (max-width: 900px) {
     flex-direction: column;
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
        width: 100%;
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
  }
`;

const Image = styled.div`
  /* padding: 0 5%; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  img {
    width: 100%;
  }
`;

export default Showcase;
