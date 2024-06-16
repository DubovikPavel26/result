import styled from "styled-components";

export const FooterWrapper = styled.div`
    height: 127px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 1439px) {
        padding: 32px 0px;
        justify-content: space-around;
        
  }

  @media (max-width:576px) {
        flex-direction: column;
  }
`

export const LogoMusem = styled.div`
    width: 206px;
    height: 63px;
    @media (max-width:576px) {
        width: 150px;
        margin-bottom: 40px;
  }

`;

export const LogoModsen = styled.div`
    width: 164px;
    height: 59px;
    @media (max-width:576px) {
        width: 150px;
  }
`