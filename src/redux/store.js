import { configureStore } from '@reduxjs/toolkit'
import searchReducer from './features/searchSlice'

const store = configureStore({
    reducer:{
        search:searchReducer
        // collection:collectionReducer
    }
})

export default store