import styled from 'styled-components';


export const Container = styled.div`
    display: grid;
    grid-template-columns: 450px 550px;
    grid-template-rows: 650px;
    column-gap: 80px;
    margin-top: 80px;
    padding-left: 80px;
    @media (max-width: 1200px) {
        grid-template-columns: 350px 350px;
        grid-template-rows: 500px;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding-left: 0;
  }
`;


export const Image = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 8px;
    margin-bottom: 10px;
`;

export const Info = styled.div`
`