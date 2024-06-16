import React from 'react';
import { useSelectedItem } from '../Context/SelectedItemContext.tsx';
import {
    FavoriteTitle,
    FavoriteSubtitle,
    FavoriteText,
    FavoriteSubText,
    FavoriteContainer,
    FavoriteItem,
    FavoriteImage,
    RemoveButton,
    FavoriteDescription,
    FavoriteItemTitle,
    FavoriteItemDescr,
    FavoritePageLink
} from './styled'


const FavoritePage = () => {
    const { favorites, setSelectedItem, removeFromFavorites } = useSelectedItem();

    return (
        <>
            <FavoriteTitle>Here are your</FavoriteTitle>
            <FavoriteSubtitle>favorites</FavoriteSubtitle>
            <FavoriteText>Saved by you</FavoriteText>
            <FavoriteSubText>Your favorites list</FavoriteSubText>
            
            {favorites.length <= 0 && <FavoriteDescription>No favorites yet</FavoriteDescription> }
            <FavoriteContainer>
                {
                    favorites.map((artwork) => (
                       
                       <FavoriteItem key={artwork.id}>
                            <FavoritePageLink to={`/artworks/${artwork.id}`}>
                                <FavoriteImage src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/100,/0/default.jpg`} alt={artwork.title} onClick={() => setSelectedItem(artwork)} />
                            </FavoritePageLink>
                            <RemoveButton onClick={() => removeFromFavorites(artwork.id)}>Remove</RemoveButton>
                            <FavoriteItemTitle>{artwork.title}</FavoriteItemTitle>
                            <FavoriteItemDescr>{artwork.artist_display}</FavoriteItemDescr>
                        </FavoriteItem>
                    )) 
                }
            </FavoriteContainer>


        </>
    );
};

export default FavoritePage;
