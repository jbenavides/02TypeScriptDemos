import {Category} from './enums';

interface Book {
    id: number;
    title: string;
    author: string;
    available: boolean;
    category: Category;
    pages?: number;

    markDamage?:(reason: string) => void;
}

export {Book};