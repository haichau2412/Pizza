import styled, { keyframes } from 'styled-components';
import pizza from "../../assets/pizza.png";
import { Link } from 'react-router-dom';

const zoom = keyframes`
  from {
    transform: scale(1);
    opacity: .7;
  }
  to {
    transform:scale(1.1);
    opacity: 1;
  }
`;

export const StyledHome = styled.div`
    position: relative;
    padding-top: 3rem;
    text-align: center;    
    display: flex;
    justify-content: flex-end;
    min-height: 100vh;
    overflow: hidden;
    align-items: center;

  @media only screen and (max-width: 1024px) {
    justify-content: center;
    }
`;

export const DetailBox = styled.div`
  margin-right:20rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem;

  @media only screen and (max-width: 1024px) {
    margin-right:0;
    }

    @media only screen and (max-width: 600px) {
      padding: 1rem;
    }

`;


export const Logo = styled.img`
    height: 10rem;
    width: 20rem;

    @media only screen and (max-width: 1000px) {
      height: 8rem;
    width: 16rem;
    }

    @media only screen and (max-width: 600px) {
      height: 6rem;
    width: 12rem;
    }
`;



export const StyledHr = styled.hr`
  border: none;
  display: block;
  height: 1rem;
  width:  50rem;
  background-image: linear-gradient(90deg, red 0%, red 33%, yellow 33%, yellow 66% , green 66% , green 100%);

`;

export const StyledBanner = styled.section`
    z-index: 3;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 2rem;
    padding-top: 5vh;
    justify-content: center;

    svg {
      width: 20rem;
      height: 10rem;
      background-color: #000;
    }

    
    h1 {
        display: inline-block;
        padding: 2rem 1.5rem;
        margin: 3rem auto;
        font-size: 8rem;
        line-height: 8rem;
        background-color: ${props => props.theme.colors.h1};
        color: #fff;
        border-radius: 10px;
        border: 1rem solid ${props => props.theme.colors.h1};
    }

    ul {
      margin-top: 3rem;
    }

    li {
      line-height: 3rem;
        list-style: none;
        font-size: 3rem;
        font-weight:600;
        :not(:first-child){
            margin-top: 3rem;
        }
    }

    @media only screen and (max-width: 1000px) {
    h1 {
      line-height: 7rem;
      font-size: 7rem;
      padding: 1.5rem 1rem;
    }
    li {
      font-weight:600;
      line-height: 2.5rem;
      font-size: 2.5rem;
    }
    }

    @media only screen and (max-width: 600px) {
    h1 {
      line-height: 6rem;
      font-size: 6rem;
      padding: 1rem .5rem;
    }
    li {
      line-height: 2rem;
      font-size: 2rem;
    }
    }

    @media only screen and (max-width: 375px) {
      h1 {
      line-height: 4rem;
      font-size: 4rem;
    }
    li {
      line-height: 1.5rem;
      font-size: 1.5rem;
    }
    }
`;

export const LinkButton = styled(Link)`
  text-decoration: none;
  color: #fff;
  margin-top: 3rem;
  font-size: 3rem;
  padding: 2rem;
  outline: none;
  border: none;
  border-radius: 8px;
  background-color: ${props => props.theme.colors.primary};
  text-transform: uppercase;
  cursor: pointer;
  animation: ${zoom} .7s linear alternate infinite;

  :hover{
    background-color: ${props => props.theme.colors.primaryLight};
  }

  @media only screen and (max-width: 1000px) {
    padding: 1.5rem;
    font-size: 2rem;
  }

  @media only screen and (max-width: 600px) {
    padding: 1rem;
    font-size: 1.5rem;
  }
`;


export const ProductImage = styled.div`
  z-index: 2;
  position: absolute;
  transform: translate(-110%,-50%);
  top: 57%;
  left: 50%;
  width: 120rem;
  height: 120rem;
  /* opacity: .3; */
  background-image: url(${pizza});
  background-repeat: no-repeat;
  background-size: 100%;


  @media only screen and (max-width: 1000px) {
    /* top: 25%; */
    transform: translate(-50%,-50%);
    opacity: .5;
    }

    /* @media only screen and (max-width: 600px) {
      width: 100%;
  height: 100%;
    } */
`;


export const ShopInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 2rem;
  line-height:2rem;

  div {
    margin-top:2rem;
    p {
      display: block;
    }
    p:nth-child(1){
    font-weight: 600;
  }

  }

  @media only screen and (max-width: 1000px) {
    font-size: 1.6rem;
    line-height:1.6rem;
    }
`;