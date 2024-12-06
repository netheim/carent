import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface GlobalState {
    titles: string[];
    searchCar: (query: string) => void;

}


const useGlobalState = create(
    persist<GlobalState>(
        (set) => ({
            titles: [], // Начальное состояние списка идентификаторов
            searchCar: (query) =>
                set((state) => ({
                    titles: state.titles.includes(query)
                        ? [...state.titles, query] : []

                })),
        }),
        {
            name: 'global-ids-storage', // Имя ключа в localStorage
        }
    )
);

export default useGlobalState


