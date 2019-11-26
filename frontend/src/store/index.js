import { createStore } from 'redux'

import reducers from './reducers/root'

const store = createStore(reducers)

export default store