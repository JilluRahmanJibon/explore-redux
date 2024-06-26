import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./features/counterSlice";
import Logger from "./middleware/Logger";

export const store = configureStore({
	reducer: {
		counter: counterSlice,
	},
	middleware: getDefaultMiddleWare => getDefaultMiddleWare().concat(Logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type appDispatch = typeof store.dispatch;
