import styled from "styled-components";

export const MainPageWrapper = styled.div`
margin-top: 120px;
margin-bottom: 120px;
`;

export const MainText = styled.h1`
font-weight: 700;
font-size: 64px;
text-transform: capitalize;
text-align: center;
color: #393939;
width: 684px;
margin: 0 auto;
margin-bottom: 72px;

@media (max-width:  1439px) {
    font-size: 55px;
  }

  @media (max-width: 768px) {
    width: 400px;
    font-size: 40px;
  }

  @media (max-width:576px) {
    width: 250px;
    font-size: 30px;
  }
`

export const MainSpan = styled.span`
color: #f17900;
`