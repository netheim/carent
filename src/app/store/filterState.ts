import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface FilterState {
    type: string[]; // Массив выбранных типов (например, ["Sport", "SUV"])
    capacity: string[]; // Массив выбранных вместимостей (например, ["2 Person", "4 Person"])
    price: [number, number]; // Диапазон цен ([min, max])

    toggleType: (filter: string) => void; // Переключение типа (добавить/убрать)
    toggleCapacity: (filter: string) => void; // Переключение вместимости (добавить/убрать)
    setPrice: (price: [number, number]) => void;
}


const useFilterState = create(
    persist<FilterState>(
        (set) => ({
            type: [], // Изначально нет выбранных типов
            capacity: [], // Изначально нет выбранных вместимостей
            price: [0, 100], // Изначальный диапазон цен

            // Переключение типа (добавить/удалить)
            toggleType: (filter) =>
                set((state) => ({
                    type: state.type.includes(filter)
                        ? state.type.filter((item) => item !== filter) // Удаление, если уже есть
                        : [...state.type, filter], // Добавление, если нет
                })),

            // Переключение вместимости (добавить/удалить)
            toggleCapacity: (filter) =>
                set((state) => ({
                    capacity: state.capacity.includes(filter)
                        ? state.capacity.filter((item) => item !== filter) // Удаление, если уже есть
                        : [...state.capacity, filter], // Добавление, если нет
                })),

            // Установка диапазона цен
            setPrice: (price) => set(() => ({ price })),
        }),
        {
            name: 'filter-storage', // Имя ключа в localStorage
        }
    )
);

export default useFilterState
