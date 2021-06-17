import { ReactNode } from "react";

export type PropsPlayer = {
    videoId: string;
    prevVideo?: string;
    nextVideo?: string;
    onChangePrev?: (state: string) => void;
    onChangeNext?: (state: string) => void;
    onChangePip?: (state: TypePIP) => void;
    children?: ReactNode;
};

export type PropsPlayerContent = {
    togglePlaying: () => void;
    playing: boolean;
    state: TypeState;
};

export type TypeResultPIP = {
    inPipMode : TypePIP;
};

export type TypeState =  "unstarted" | "video cue" | "buffering" | "playing" | "paused" | "ended";

export type TypePIP = "IS_ACTIVE" | "NO_ACTIVE";