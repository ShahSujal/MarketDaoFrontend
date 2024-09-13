import { defaultModalMessage, TModalMessage } from "@/constants/default";
import { EStatus } from "@/types/common";
import { User } from "@prisma/client";
import { atom } from "jotai";

export const statusAtom = atom<EStatus | null>(null);

export const modalMessageAtom = atom<TModalMessage>(defaultModalMessage);

export const userAtom = atom<User | undefined>(undefined);