import styled from "styled-components";

export const Like = styled.button`
border: none;
background-color: white;
cursor: pointer;
&.active {
        svg {
            path {
                stroke: red;
            }
        }
    }
`