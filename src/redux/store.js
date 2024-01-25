import { taskReducer } from "./taskSlice";
import { filterReducer } from "./filterSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers, legacy_createStore as createStore } from "redux";

const persistConfig = {
  key: 'root',
  storage
}

const rootReducer = combineReducers({
  tasks: taskReducer,
  filters: filterReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer)
export const persistor = persistStore(store)