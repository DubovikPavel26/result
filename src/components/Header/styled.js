import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderWrapper = styled.header`
    min-height: 100px;
    padding-top: 27px;
    background: linear-gradient(90deg, #343333 16.73%, #484848 58.63%, #282828 98.63%);
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

export const HeaderSubWrapper = styled.div`
    width: 1200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    position: relative;
    @media (max-width: 1439px) {
        justify-content: space-around;
  }

  @media (max-width: 1200px) {
        width: 900px;
  }

  @media (max-width: 992px) {
        width: 700px;
  }

  @media (max-width:768px) {
        width: 500px;
  }

  @media (max-width:576px) {
        width: 300px;
        justify-content: left;
  }

  
`


export const Logo = styled.div`
    width: 206px;
    height: 63px;
    @media (max-width:576px) {
        width: 60px;
        height: 40px;
  }
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    @media (max-width:576px) {
    display: none;
  }
`;

export const FavoriteIcon = styled.div`
    margin-right: 4px;
`;

export const FavoriteLink = styled(Link)`
    font-weight: 400;
    font-size: 18px;
    color: #fff;
    text-decoration: none;
    margin-right: 20px;
    &:hover {
        color: #E0A449;
    }
    @media (max-width: 576px){
        margin-right: 0;

}
`;

export const Burger = styled.div`
    display: none; 
    @media (max-width: 576px) {
        display: block; 
        width: 30px;
        height: 30px;
        background-color: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        position: absolute;
        right: 8px;

        div {
            width: 30px;
            height: 2px;
            background-color: #fff;
            margin: 4px 0;
            transition: transform 0.3s ease;
        }
    }
`;

export const BurgerContent = styled.div`
display: none;
@media (max-width: 576px){
    display: block;
    margin-top: 50px;
    text-align: center;
}
`

export const BurgerItem = styled.li`
color: white;
list-style: none;
`

