import styled from "styled-components";
import { Link } from "react-router-dom";

export const FavoriteTitle = styled.h1`
font-weight: 700;
font-size: 64px;
text-transform: capitalize;
text-align: center;
color: #393939;
margin: 0;
margin-top: 120px;
`

export const FavoriteSubtitle = styled.p`
font-weight: 700;
font-size: 64px;
text-transform: capitalize;
text-align: center;
color: #f17900;
margin: 0;
`

export const FavoriteText = styled.p`
font-weight: 400;
font-size: 16px;
color: #e0a449;
text-align: center;
margin-top: 120px;
margin-bottom: 0;
`

export const FavoriteSubText = styled.p`
font-weight: 400;
font-size: 32px;
color: #393939;
text-align: center;
margin: 0;
`

export const FavoriteContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(5, minmax(220px, auto));
	grid-template-rows: repeat(2, minmax(100px, auto));
	column-gap: 24px;
	row-gap: 40px;
	padding: 0;
    margin-top: 40px;

    @media (max-width:  1439px) {
    grid-template-columns: repeat(4, minmax(200px, auto));
  }

  @media screen and (max-width: 992px) {
    grid-template-columns: repeat(3, minmax(200px, auto));
    
}

    @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(200px, auto));
  }

  @media (max-width:576px) {
    grid-template-columns: repeat(1, minmax(200px, auto));
  }
`;


export const FavoriteItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #f0f1f1;
    width: 150px; 
    margin-bottom: 40px; 
    padding: 8px;
    height: 100%;
    margin: 0 auto;
`;

export const FavoriteImage = styled.img`
    width: 150px;
    height: 150px; 
    cursor: pointer;
    object-fit: cover;
`;

export const RemoveButton = styled.button`
    margin-top: 10px;
    padding: 5px 10px;
    background-color: #f17900;
    color: white;
    font-size: 13px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`;

export const FavoriteDescription = styled.p`
font-weight: 600;
font-size: 30px;
color: #393939;
margin-top: 70px;
text-align: center;
`

export const FavoriteItemTitle = styled.p`
font-weight: 700;
font-size: 12px;
color: #393939;
text-align: center;
margin: 0;
margin-top: 15px;
margin-bottom: 10px;

`

export const FavoriteItemDescr = styled.p`
font-weight: 600;
font-size: 11px;
color: #393939;
text-align: center;
margin-top: 5px;
`

export const FavoritePageLink = styled(Link)`
text-decoration: none;
height: 150px;
`