import { atom } from "jotai";
import { currentMonth, currentYear } from "../util/DateUtils";

export const monthAtom = atom(currentMonth);
export const yearAtom = atom(currentYear);