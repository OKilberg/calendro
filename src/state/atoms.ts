import { atom } from "jotai";
import { currentMonth, currentYear } from "../util/dateUtils";

export const monthAtom = atom(currentMonth);
export const yearAtom = atom(currentYear);