"use client"

import { createContext, useReducer, Dispatch } from "react"
import { ActionInterface, SidebarReducer } from "../reducers/SideBarReducer";

export type StateType = "open" | "close";

interface Props{
    children: React.ReactNode
}

const initState: StateType = "close";


// Define a type for the context value, including state and dispatch
interface SideBarContextType {
    sideBarState: StateType;
    dispatch: Dispatch<ActionInterface>;
}

export const SideBarContext = createContext<SideBarContextType>({
    sideBarState: initState,
    dispatch: () => null, // This will be overridden by useReducer
});

export default function SideBarContextProvider(props:Props) {
    const [sideBarState, dispatch] = useReducer(SidebarReducer, initState);

    return (
        <SideBarContext.Provider value={{ sideBarState, dispatch }}>
            {props.children}
        </SideBarContext.Provider>
    )
}
