import { combineReducers } from 'redux';

import { auth } from './auth.reducer';
import { alert } from './alert.reducer';
import { brand } from './brand.reducer';

const rootReducer = combineReducers({
    auth,
    alert,
    brand,
});

export default rootReducer;