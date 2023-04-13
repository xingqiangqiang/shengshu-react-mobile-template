import reducer from '@/config/reducer';
import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';

const logger = createLogger({ collapsed: true });

const store = configureStore({
  reducer: {
    ...reducer,
  },
  middleware: process.env.NODE_ENV !== 'production' ? [logger] : [],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
