import { Dish } from "../../types/models/Dish";

export const filterDishes = (category: string, entries: Dish[]): Dish[] => (
  category !== 'none' ? entries.filter(entry => entry.category === category) : entries
);
