import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ThemeState {
    theme: string
}

const getInitialTheme = () => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('selectedTheme');
      if(!savedTheme){
        if(window.matchMedia("(prefers-color-scheme: dark)").matches){
            return "dark"
        }
      }
      return savedTheme || 'light';
    }
    return 'light';
  };
  
  const initialState: ThemeState = {
    theme: getInitialTheme(),
  };

const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        setTheme: (state,action: PayloadAction<ThemeState>) => {
            state.theme = action.payload.theme
            if(action.payload.theme !== null){
            localStorage.setItem("selectedTheme",action.payload.theme)}
        }
    }
})

export const {setTheme} = themeSlice.actions
export default themeSlice.reducer