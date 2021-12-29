import React, { useState } from "react";
import { FiSearch } from "react-icons/fi"
import styled from "styled-components";
import { Link } from "react-router-dom";

const SignedOut = ({ toggle }) => {
  const [search, setSearch] = useState("")
  return (
    <Links className={toggle ? "active" : ""}>
      <LinkItem>
        <Link to="/marketplace">Marketplace</Link>
      </LinkItem>
      <LinkItem>
        <Link to="/contact">Collections</Link>
      </LinkItem>
      <LinkItem>
        <Link to="/signIn">Profile</Link>
      </LinkItem>
      <LinkItem>
        <Link to="/signIn">Creators</Link>
      </LinkItem>
      <LinkItem>
        <Link to="/signIn">Pages</Link>
      </LinkItem>
      <LinkItem>
        <div className="input_field">
          <div className="search_icon">
            <FiSearch/>
          </div>
          <input type="text" value={search} onChange={(e) => setSearch(e.target.value)}/>
        </div>
      </LinkItem>

      <LinkItem>
        <Link to="/signUp" className="cta">
         Connect Wallet
        </Link>
      </LinkItem>
    </Links>
  );
};

const Links = styled.ul`
  align-items: center;

  @media (max-width: 900px) {
    padding: 20px;
    position: absolute;
    top: 10vh;
    right: 0;
    height: auto;
    display: none;
    width: 100%;
    background: var(--White);
    /* color: var(--); */
    transition: all 2s;

    &.active {
      display: block;
      transition: all 0.5s cubic-bezier(0.88, 0.19, 0.37, 1.11);
      transform: scale(0);
      animation-name: showIn;
      animation-duration: 0.3s;
      animation-iteration-count: 1;
      animation-direction: normal;
      animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
      animation-fill-mode: both;
      animation-delay: 0.2s;

      @keyframes showIn {
        0% {
          transform: scale(0);
        }
        100% {
          transform: scale(1);
        }
      }
    }
  }
`;

const LinkItem = styled.li`
  display: inline-block;
  margin-left: 40px;
  a {
    color: var(--Color-3);
  }

  .input_field {
    position: relative;

    .search_icon {
      position: absolute;
      top: 8px;
      left: 7px;
      width: 25px;
      height: 25px;
      font-size: 15px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: var(--White);
      border-radius: 50px;
    }

    input {
      padding: 13px 13px 13px 35px;
      border: 0.1rem solid var(--Blue-3);
      outline: none;
      background: var(--Blue-3);
      border-radius: 8px;
      transition: all 0.5s;

      &:hover {
        background: var(--White);
      }
    }
  }

  .cta {
    background: linear-gradient(
      190deg,
      var(--Blue-1),
      var(--Blue-2),
      var(--Blue-1)
    );
    padding: 10px 17px;
    color: var(--White);
    border-radius: 20px;
    transition: all .5s;

    &:hover {
      background: linear-gradient(
        120deg,
        var(--Blue-2),
        var(--Blue-1)
      );
    }
  }

  @media (max-width: 900px) {
    display: block;
    margin: 20px 0;
    transition: all 0.5s cubic-bezier(0.88, 0.19, 0.37, 1.11);
    transform: scale(0);
    animation-name: showIn;
    animation-duration: 0.3s;
    animation-iteration-count: 1;
    animation-direction: normal;
    animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
    animation-fill-mode: both;
    animation-delay: 0.2s;

    @keyframes showIn {
      0% {
        transform: scale(0);
      }
      100% {
        transform: scale(1);
      }
    }
  }
`;

// @media (max-width: 900px) {

// }

export default SignedOut;
