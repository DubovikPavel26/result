import styled from "styled-components";


export const SortButton = styled.button`
cursor: pointer;
height: 60px;
width: 200px;
font-size: 14px;
padding: 8px;
border-radius: 8px;
border: none;
@media (max-width:576px) {
    width: 160px;
    font-size: 11px;
  }


&:hover {
        transition: 0.5s all;
        background-color: #E0A449;
    }
`