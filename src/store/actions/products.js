import {createAsyncThunk} from '@reduxjs/toolkit'
import Api from "../../Api";

export const getProductsRequest = createAsyncThunk('get-Products',
    async (payload,thunkAPI) =>{
        try {
            const {data}= await Api.getProducts(payload);
            return data
        }catch (e){
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
)

export const getCategoriesRequest = createAsyncThunk("get-categories",
    async (payload, thunkAPI) =>{
        try {
            const {data}= await Api.getCategories(payload);
            return data
        }catch (e){
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
)