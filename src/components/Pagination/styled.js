import styled from "styled-components";

const StyledPagination = styled.nav`

    ul {
        display: flex;
        list-style: none;
        padding: 0;
        margin: 20px 0;
        justify-content: center;
    }

    .page-item {
        margin: 0 5px;
    
    }

    .page-link {
        background-color: #fff;
        color: #393939;
        border: 1px solid #e0a449;
        padding: 5px 10px;
        font-size: 15px;
        border-radius: 4px;
        cursor: pointer;
        &:hover {
            background: #f17900;
        }
    }

    .active {
        background: #f17900;
        color: #fff;
        border-radius: 4px;
    }
`;

export default StyledPagination;