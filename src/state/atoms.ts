import { atom } from "jotai";

const date = new Date();
const currentMonth = date.getMonth();
const currentYear = date.getFullYear();
export const monthAtom = atom(currentMonth);
export const yearAtom = atom(currentYear);