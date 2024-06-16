import React, { useState } from 'react';
import { Like } from './styled';
import { useSelectedItem } from '../Context/SelectedItemContext.tsx';

const LikeButton = ({ artwork }) => {
    const { addToFavorites, removeFromFavorites, favorites } = useSelectedItem();
    const [isActive, setIsActive] = useState(false);

    const isFavorite = favorites.some((favorite) => favorite.id === artwork.id);

    const handleToggleFavorite = () => {
        if (isFavorite) {
            removeFromFavorites(artwork.id);
        } else {
            addToFavorites(artwork);
        }
        setIsActive(!isFavorite);
    };

    return (
        <Like onClick={handleToggleFavorite} className={isActive ? 'active' : ''}>
            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.5 21.5L12.375 17.5L5.25 21.5V5.5C5.25 4.96957 5.46448 4.46086 5.84625 4.08579C6.22802 3.71071 6.74581 3.5 7.28571 3.5H17.4643C18.0042 3.5 18.522 3.71071 18.9038 4.08579C19.2855 4.46086 19.5 4.96957 19.5 5.5V21.5Z" stroke="#E0A449" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </Like>
    );
};

export default LikeButton;
