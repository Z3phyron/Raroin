import React from "react";
import Artists from "../blocks/Artists";
import styled from "styled-components";
import Showcase from "../blocks/Showcase";
import { Link } from "react-router-dom";
import { CollectionData, Items } from "../../lib/Data";
import Item from "../../components/cards/Item";
import Collections from "../../components/cards/Collections";
import Banner from "../blocks/Banner";
import hunt from "../../Assets/mockups/1.svg"
import radar from "../../Assets/mockups/2.svg"
import scfi from "../../Assets/mockups/3.svg"

const Home = () => {
  return (
    <Cont>
      <Showcase />
      <div className="sections">
        <Artists/>
        <ExploreCont>
          <div className="header">
            <h3 className="title">Explore</h3>
            <Link to="/" className="cta">
              view all
            </Link>
          </div>
          <div className="items">
            {Items.map((item, index) => (
              <Item key={index} item={item} />
            ))}
          </div>
          <Link to="/" className="cta_btn">
            View all items
          </Link>
        </ExploreCont>
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
        <Banner />
        <Sponsors>
          <div className="container">
            <h3>Loved by the community</h3>
            <div className="sponsors">
              <img src={hunt} alt="" />
            <img src={radar} alt="" />
            <img src={scfi} alt="" />
            </div>
            
          </div>
        </Sponsors>
      </div>
    </Cont>
  );
};


const Cont = styled.div`
  .sections {
    background: var(--gray-blue);
  }
`;
// const ArtistsCont = styled.div`
//   /* .sections {
//     background: var(--gray-blue);
// } */
// `;
const ExploreCont = styled.div`
  padding: 8% 5%;
  text-align: center;
  /* justify-content: center;
  display: flex;
  flex-direction: column; */

  .items {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 40px;
    margin-bottom: 10vh;
    /* text-align: center; */
    /* justify-content: center; */

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

  .cta_btn {
    justify-self: center;
    margin: auto;
    /* width: 100px; */
    padding: 7px 15px;
    border-radius: 50px;
    color: var(--Blue-1);
    background: var(--White);
  }
`;

const CollectionCont = styled.div`
  padding: 5% 5%;
  text-align: center;

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

const Sponsors = styled.div`
  padding: 5%;
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding: 10vh 50px;
    background: var(--White);
    border-radius: 20px;

    .sponsors {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;

      img {
        margin: 0 10px;
      }
    }

    @media (max-width: 900px) {
      text-align: center;
      padding: 30px 0;
      flex-direction: column;
      .sponsors {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        flex-direction: column;

        img {
          width: 80%;
          margin: 10px auto;
        }
      }

     
    }

    h3 {
      font-size: 30px;
      font-weight: 700;
      color: var(--Blue-1);
      @media (max-width: 900px) {
        font-size: 26px;
        margin-bottom: 20px;
        text-align: center;
      }
    }
  }
`;

export default Home;
