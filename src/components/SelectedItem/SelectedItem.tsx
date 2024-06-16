import React from 'react';
import { useSelectedItem } from '../Context/SelectedItemContext.tsx';
import { Container, Image, Info } from './styled.js'
import LikeButton from '../LikeButton/LikeButton.tsx';

const SelectedItem = () => {
    const { selectedItem} = useSelectedItem();

    if (!selectedItem) {
        return <div>No artwork selected</div>;
    }


    return (
        <Container>
            <Image src={`https://www.artic.edu/iiif/2/${selectedItem.image_id}/full/843,/0/default.jpg`} alt={selectedItem.title} />
            <Info>
                <h2>{selectedItem.title}</h2>
                <p>Artist: {selectedItem.artist_display}</p>
                <p>Date of creation: {selectedItem.date_start}</p>
                <p>Dimensions: Sheet: {selectedItem.dimensions}</p>
                <p>Materials: {selectedItem.medium_display}</p>
                <LikeButton artwork={selectedItem}/>
            </Info>
        </Container>
    );
};

export default SelectedItem;
