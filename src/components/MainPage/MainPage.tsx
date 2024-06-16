import React, { Suspense, useState } from 'react';
import { MainPageWrapper, MainText, MainSpan } from './styled'
import Input from '../input/Input.tsx';
import ArtList, { Artwork } from '../ArtList/ArtList.tsx';
import Loader from '../Loader/Loader.tsx'
import { useSelectedItem } from '../Context/SelectedItemContext.tsx';

const MainPage = () => {
    const [searchTerm, setSearchTerm] = useState<string>('')
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [sortByYear, setSortByYear] = useState<'asc' | 'desc' | null>(null);
    const { setSelectedItem } = useSelectedItem();


    const handleSearchChange = (value: string) => {
        setSearchTerm(value);
    }

    const handleArtWorkClick = (artwork: Artwork) => {
        setSelectedItem(artwork);

    };

    const handleSortByAscYear = () => {
        setSortByYear('asc');
    };

    const handleSortByDescYear = () => {
        setSortByYear('desc');
    };

    return (
        <MainPageWrapper>
            <MainText>Let's Find Some <MainSpan>Art</MainSpan> Here!</MainText>
            <Input searchTerm={searchTerm} onSearchChange={handleSearchChange} />

            <Suspense fallback={<Loader />}>
                {isLoading && <Loader />}

                <ArtList
                    searchTerm={searchTerm}
                    setIsLoading={setIsLoading}
                    handleArtWorkClick={handleArtWorkClick}
                    sortByYear={sortByYear}
                    handleSortByAscYear={handleSortByAscYear}
                    handleSortByDescYear={handleSortByDescYear} />
            </Suspense>
        </MainPageWrapper>
    );
};

export default MainPage;
