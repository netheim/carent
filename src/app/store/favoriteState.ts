import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface FavoriteState {
    ids: string[];
    toggleId: (id: string) => void;

}


const useFavoriteState = create(
    persist<FavoriteState>(
        (set) => ({
            ids: [], // Начальное состояние списка идентификаторов
            toggleId: (id) =>
                set((state) => ({
                    ids: state.ids.includes(id)
                        ? state.ids.filter((existingId) => existingId !== id) // Удаление, если ID уже есть
                        : [...state.ids, id], // Добавление, если ID отсутствует
                })),
        }),
        {
            name: 'favorite-ids-storage', // Имя ключа в localStorage
        }
    )
);

export default useFavoriteState

