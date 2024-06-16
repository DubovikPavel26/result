import React, { useEffect, useState } from 'react';
import './Artlist.css';
import { Link } from 'react-router-dom';
import SortButtons from '../SortButtons/SortButtons.tsx';
import LikeButton from '../LikeButton/LikeButton.tsx';
import Pagination from '../Pagination/Pagination.tsx';

export interface Artwork {
    id: number;
    title: string;
    image_id: string;
    artist_display: string;
    date_start: number;
    dimensions: string;
    medium_display: string;
}

interface ArtListProps {
    searchTerm: string;
    setIsLoading: (value: boolean) => void;
    handleArtWorkClick: (artwork: Artwork) => void;
    sortByYear: 'asc' | 'desc' | null;
    handleSortByAscYear: () => void;
    handleSortByDescYear: () => void;
}

const ArtList = (props: ArtListProps) => {
    const [artworks, setArtworks] = useState<Artwork[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(1); 
    const limit = 3;

    useEffect(() => {
        const fetchArtworks = async () => {
            try {
                let url;

                if (props.searchTerm === '') {
                    url = `https://api.artic.edu/api/v1/artworks?fields=id,title,image_id,artist_display,date_start,dimensions,medium_display&page=${currentPage}&limit=${limit}`;
                } else {
                    url = `https://api.artic.edu/api/v1/artworks/search?q=${props.searchTerm}&fields=id,title,image_id,artist_display,date_start,dimensions,medium_display&page=${currentPage}&limit=${limit}`;
                }
                const response = await fetch(url);
                const data = await response.json();

                if (response.ok) {
                    let filteredArtworks = data.data;

                    if (props.sortByYear === 'asc') {
                        filteredArtworks = filteredArtworks.sort((a, b) => a.date_start - b.date_start);
                    } else if (props.sortByYear === 'desc') {
                        filteredArtworks = filteredArtworks.sort((a, b) => b.date_start - a.date_start);
                    }

                    setArtworks(filteredArtworks);
                    props.setIsLoading(false);

                    const totalPagesFromApi = Math.ceil(data.pagination.total / limit);
                    setTotalPages(totalPagesFromApi);
                } else {
                    console.error('Ошибка при получении данных:', data.message);
                }
            } catch (error) {
                console.error('Ошибка при получении данных:', error);
            }
        };

        fetchArtworks();
    }, [props.searchTerm, props.sortByYear, currentPage, props.setIsLoading, limit]);

    const paginate = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="gallery__container">
            <p className='gallery__subtitle'>Topics for you</p>
            <h2 className='gallery__title'>Our special gallery</h2>

            <SortButtons handleSortByAscYear={props.handleSortByAscYear} handleSortByDescYear={props.handleSortByDescYear} />

            <div className="artworks">
                {artworks.map((artwork) => (
                    <div key={artwork.id} className="artwork" onClick={() => props.handleArtWorkClick(artwork)}>
                        <Link to={`/artworks/${artwork.id}`}>
                            <img src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`} alt={artwork.title} />
                        </Link>
                        <div className="artwork__details">
                            <div className='artwork__text'>
                                <h3>{artwork.title}</h3>
                                <h4>{artwork.artist_display}</h4>
                            </div>
                            <LikeButton artwork={artwork} />
                        </div>
                    </div>
                ))}
            </div>

            <Pagination currentPage={currentPage} totalPages={totalPages} paginate={paginate} />
        </div>
    );
};

export default ArtList;
