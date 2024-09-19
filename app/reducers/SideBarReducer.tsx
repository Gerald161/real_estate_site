import { StateType } from "../contexts/SideBarContext"

export interface ActionInterface{
  type: string, 
  payload?: string,
}

export const SidebarReducer = (state: StateType, action: ActionInterface) : StateType => {
  switch (action.type) {
    case 'OPEN_SIDEBAR':
      state = "open"
      return state
    case 'CLOSE_SIDEBAR':
      state = "close"
      return state
    default: 
      return state;
  }
} 