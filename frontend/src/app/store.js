import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice'
import goalReducer from '../features/goals/goalSlice'
import messageReducer from '../features/messages/messageSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    goals: goalReducer,
    message: messageReducer
  },
});
