import React from 'react'
import styled from "styled-components"
import badge from "../../Assets/mockups/Badge.svg"

const Artist = (props) => {
    const {avatar, handle, wallet} = props.artist
    return (
        <Card>
            <UserImg>
                <img src={avatar} alt="" />
                <img src={badge} alt="" className="verified" />
            </UserImg>
            <UserInfo>
                <h4 className="user_handle">@{handle}....</h4>
                <p className="wallet">{wallet} ETH</p>
            </UserInfo>
        </Card>
    )
}

const Card = styled.div`
padding: 10px;
width: 200px;
box-shadow: 0 1px 1px 1px var(--gray);
border-radius: 50px;
display: grid;
grid-template-columns: 30% auto;
grid-gap: 10px;
align-items: center;
`;
const UserImg = styled.div`
width: 50px;
height: 50px;
/* border-radius: 50px; */
overflow: hidden;
object-fit: fill;
position: relative;

img {
    width: 100%;
    /* object-fit: cover; */
    /* height: 100%; */
    border-radius: 50px;

    &.verified {
        width: 17px;
        position: absolute;
        bottom: 0;
        right: 0;
    }
}
`;
const UserInfo = styled.div`
display: grid;
grid-gap: 5px;

.user_handle {
    font-weight: 600;
    font-size: 13px;
    color: var(--Blue-1);
}
.wallet {
    font-weight: 300;
    font-size: 13px;
    color: var(--green);
}
`;



export default Artist
