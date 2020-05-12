import styled from 'styled-components';

export const StyledAlert = styled.div`

    display: flex;
    align-items: center;
    position: fixed;
    border-radius: 8px;
    top: 8%;
    left: 50%;
    transform: translate(-50%,-50%);
    background-color: ${props => props.theme.colors[`bg${props.status}`]};
    border-left: 7px solid ${props => props.theme.colors[`bt${props.status}`]};
    overflow: hidden;
    transition: transform .5s cubic-bezier(.51,-0.52,.6,1.05);
    transform: ${props => props.isVisible ? 'translate(-50%,0%)' : 'translate(-50%,-150%)'};
    z-index: 1003;

    svg {
        margin: .5rem 1rem;
        opacity: 1;
        width: 2rem;
        height: 2rem;
        fill: ${props => props.theme.colors[props.status]};
    }   

    p {
        line-height: 1.6rem;
        font-size: 1.6rem;
        color: ${props => props.theme.colors[`bt${props.status}`]};
        font-weight: 600;
    }

    button {
        margin-left: 1rem;
        padding: .5rem;
        align-self: stretch;
        justify-self: stretch;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: ${props => props.theme.colors[`bt${props.status}`]};
        border: none;
        outline: none;
        cursor: pointer;

        svg {
            fill: #fff;
            width: 1.6rem;
            height: 1.6rem;
        }

        

    }

`;
