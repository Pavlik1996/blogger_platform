import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { authApi } from '../modules/authModules/authApi/authApi'
import { appReducer } from './app.reducer.ts'

const rootReducer = combineReducers({
	[authApi.reducerPath]: authApi.reducer,
	app: appReducer
})

export const store = configureStore({
	reducer: rootReducer,
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(authApi.middleware)
})

export type AppRootStateType = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch
