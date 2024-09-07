import { defaultModalMessage, TModalMessage } from "@/constants/default";
import { EStatus } from "@/types/common";
import { atom } from "jotai";

export const statusAtom = atom<EStatus | null>(null);

export const modalMessageAtom = atom<TModalMessage>(defaultModalMessage);