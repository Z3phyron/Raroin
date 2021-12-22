import React from 'react'
import { ArtistsInfo } from '../../lib/Data';
import styled from "styled-components";
import Artist from '../../components/cards/Artist'

const Artists = () => {
    return (
        <Cont>
            <div className="header">
                <div className="title">Top Artists</div>
            </div>
            <div className="artists">
                {ArtistsInfo.map((artist, index) => (
                    <Artist key={index} artist={artist}/>  
                ))}
            </div>
        </Cont>
    )
}


const Cont = styled.div`
  padding: 2% 5%;

  .header {
      font-size: 25px;
      font-weight: 600;
      color: var(--Blue-1);
      margin-bottom: 30px;
  }


  @media (max-width: 900px) {
    

  
  }
`;

export default Artists
