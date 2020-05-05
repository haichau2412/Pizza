import styled, { keyframes } from 'styled-components';
import pizza from "../../assets/pizza.png";

const fadein = keyframes`
  from 
      { 
        opacity: 0; 
        }
  to   
  { 
    opacity: 1; 
  }
`

export const StyledHome = styled.div`
    position: relative;
    height: 100vh;
    text-align: center;    
    overflow: hidden; 
`;

export const DetailBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem;

  @media (max-width: 768px) {
    margin-left: 0;
    }

`;

export const StyledHr = styled.hr`
  border: none;
  display: block;
  height: .5rem;
  width:  50rem;
  background-image: linear-gradient(90deg, red 0%, red 33%, yellow 33%, yellow 66% , green 66% , green 100%);

`;

export const StyledBanner = styled.section`
    z-index: 3;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 2rem;
    padding-top: 15vh;
    justify-content: center;

    
    h1 {
        display: inline;
        margin: 5rem auto;
        font-size: 8rem;
    }

    ul {
      margin-top: 3rem;
    }

    li {
        
        list-style: none;
        font-size: 3rem;
        :not(:first-child){
            margin-top: 3rem;
        }
    }

    button {
      color: #fff;
      margin-top: 5rem;
      font-size: 3rem;
      padding: 2rem 3rem;
      outline: none;
      border: none;
      border-radius: 3rem;
      background-color: ${props => props.theme.colors.primaryLight};
      text-transform: uppercase;
      cursor: pointer;

      :hover {

      }
    }
`;

export const ProductImage = styled.div`
  z-index: 2;
  position: absolute;
  transform: translate(-50%,-50%);
  top: 50%;
  left: 50%;
  width: 100rem;
  height: 100rem;
  opacity: .3;
  background-image: url(${pizza});
  background-repeat: no-repeat;
  background-size: 100%;

`;

export const StyledProcess = styled.div`
  display: block;
  height: 10rem;
  width:  50rem;
  border: 2px solid #000;

`;
