import styled from 'styled-components';

export const StyledBanner = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 100%;
    
    
    h1 {
        margin: 3rem auto;
        font-size: 5rem;
    }

    li {
        list-style: none;
        font-size: 2rem;

        :not(:first-child){
            margin-top: 1rem;
        }
    }
`;