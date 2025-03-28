import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import { persistReducer , persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import usersReducer from "./thunk";

const persistConfig = {
    key: 'root',
    storage,
}

const persistedCartReducer = persistReducer(persistConfig , usersReducer);

export const store = configureStore({
    reducer: { counter: persistReducer},
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

