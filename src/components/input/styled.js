import styled from "styled-components";

export const InputStyles = styled.input`
border-radius: 16px;
padding: 16px;
width: 762px;
height: 64px;
display: block;
margin: 0 auto;
border: none;
background: rgba(57, 57, 57, 0.05);
font-weight: 400;
font-size: 14px;
color: rgba(57, 57, 57, 0.5);
margin-bottom: 120px;


@media (max-width: 1200px) {
    width: 600px;
  }

  @media (max-width: 768px) {
    width: 400px;
  }

  @media (max-width:576px) {
        width: 300px;
        height: 40px;
  }
`