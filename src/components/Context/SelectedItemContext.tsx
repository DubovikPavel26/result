import React, { createContext, useContext, useState } from 'react';
import { Artwork } from '../ArtList/ArtList';

interface SelectedItemContextType {
    selectedItem: Artwork | null;
    setSelectedItem: (item: Artwork | null) => void;
    favorites: Artwork[];
    addToFavorites: (artwork: Artwork) => void;
    removeFromFavorites: (artworkId: number) => void;
  }

  const SelectedItemContext = createContext<SelectedItemContextType | undefined>(undefined)

  export const useSelectedItem = () => {
    const context = useContext(SelectedItemContext);
    if (!context) {
      throw new Error('useSelectedItem must be used within a SelectedItemProvider');
    }
    return context;
  };

export const SelectedItemProvider = ({ children }) => {
  const [selectedItem, setSelectedItem] = useState<Artwork | null>(null);

  const [favorites, setFavorites] = useState<Artwork[]>(() => {
    const savedFavorites = localStorage.getItem('favorites');
    return savedFavorites ? JSON.parse(savedFavorites) : [];
});

const addToFavorites = (artwork: Artwork) => {
    setFavorites([...favorites, artwork]);
    localStorage.setItem('favorites', JSON.stringify([...favorites, artwork]));
};

const removeFromFavorites = (artworkId: number) => {
    const updatedFavorites = favorites.filter((artwork) => artwork.id !== artworkId);
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
};

  return (
    <SelectedItemContext.Provider value={{ selectedItem, setSelectedItem, favorites, addToFavorites, removeFromFavorites }}>
      {children}
    </SelectedItemContext.Provider>
  );
};