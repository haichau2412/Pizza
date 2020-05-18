import styled from 'styled-components';

export const StyledAlert = styled.div`
    display: flex;
    align-items: center;
    position: fixed;
    border-radius: 8px;
    top: ${props => props.menu ? '14%' : '9%'};
    left: 50%;
    transform: translate(-50%,-50%);
    background-color: ${props => props.theme.colors[`bg${props.status}`]};
    border-left: 7px solid ${props => props.theme.colors[`bt${props.status}`]};
    overflow: hidden;
    transition: transform .4s cubic-bezier(.51,-0.52,.6,1.05);
    transform: ${props => props.isVisible ? 'translate(-50%,0%)' : 'translate(-50%,-150%)'};
    z-index: 1002;

    @media only screen and (max-width: 1000px) {
        top: ${props => props.menu ? '13%' : '9%'};
    }

    @media only screen and (max-width: 600px) {
        width: 80vw;
    }

    @media only screen and (max-width: 600px) {
        top: ${props => props.menu ? '14%' : '9%'};
    }

    svg {
        margin: .5rem 1rem;
        opacity: 1;
        width: 2rem;
        height: 2rem;
        fill: ${props => props.theme.colors[props.status]};

        @media only screen and (max-width: 600px) {
            width: 1.6rem;
            height: 1.6rem;
    }
    }   

    p {
        margin-right: 1rem;
        text-align: center;
        display: inline-block;
        flex-grow: 2;
        line-height: 1.8rem;
        font-size: 1.8rem;
        color: ${props => props.theme.colors[`bt${props.status}`]};
        font-weight: 600;

        @media only screen and (max-width: 600px) {
            line-height: 1.4rem;
            font-size: 1.4rem;
    }
    }

    button {
        margin-right: 0;
        padding: .5rem;
        align-self: stretch;
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

            @media only screen and (max-width: 600px) {
                width: 1.4rem;
            height: 1.4rem;
    }
        }

        

    }



`;
