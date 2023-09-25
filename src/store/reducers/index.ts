import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';

import { checkoutReducer } from '@/store/slices/checkoutSlice';
import { customStorage } from '@/store/customStorage';

const authPersistConfig = {
  key: 'checkout',
  storage: customStorage,
};

export const rootReducer = combineReducers({
  checkout: persistReducer(authPersistConfig, checkoutReducer),
});
