import { atom } from "jotai";

const date = new Date();
const currentMonth = date.getMonth();
export const monthAtom = atom(currentMonth);