import React, { Component } from "react";
import Carousel from "react-elastic-carousel";
import { ArtistsInfo } from "../../lib/Data";
import styled from "styled-components";
import Artist from "../../components/cards/Artist";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
export default class Artists extends Component {
  render() {
    const breakPoints = [
      { width: 400, itemsToShow: 1 },
      { width: 600, itemsToShow: 2 },
      { width: 900, itemsToShow: 3 },
      { width: 1000, itemsToShow: 4 },
    ];
    return (
      <Cont>
        <div className="header">
          <div className="title">Top Artists</div>
          <div className="navs">
            <button onClick={() => this.carousel.slidePrev()}><MdKeyboardArrowLeft/></button>
            <button onClick={() => this.carousel.slideNext()}><MdKeyboardArrowRight/></button>
          </div>
        </div>
        <Carousel
          breakPoints={breakPoints}
          className="artists"
          ref={(ref) => (this.carousel = ref)}
        >
          {ArtistsInfo.map((artist, index) => (
            <Artist key={index} artist={artist} />
          ))}
        </Carousel>
      </Cont>
    );
  }
}

const Cont = styled.div`
  padding: 2% 5%;

  .header {
    font-size: 25px;
    font-weight: 600;
    color: var(--Blue-1);
    margin-bottom: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .navs {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 20px;
      align-items: center;

      button {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40px;
        height: 40px;
        border-radius: 50px;
        font-size: 20px;
        outline: none;
        border: none;
        color: var(--Blue-1);
        background: var(--White);
      }
    }
  }

  .artists {
    .rec.rec-arrow,
    .rec-dot {
      display: none;
    }
    /* round buttons on hover */
    .rec.rec-arrow:hover {
      border-radius: 50%;
    }
    /* hide disabled buttons */
    .rec.rec-arrow:disabled {
      visibility: hidden;
    }
  }

  @media (max-width: 900px) {
  }
`;
