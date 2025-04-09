import { createContext, useContext } from 'react';

const MenuStateContext = createContext<[boolean, (open: boolean) => unknown]>([false, () => {}]);
export const MenuStateProvider = MenuStateContext.Provider;
export const useMenuState = () => useContext(MenuStateContext);