import { configureStore } from "@reduxjs/toolkit";
import themeSlice, {setTheme} from "./theme"


const store = configureStore({
    reducer: {
        theme: themeSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store

export const changeTheme = (data:string) => {
    store.dispatch(setTheme({theme: data}))
}
