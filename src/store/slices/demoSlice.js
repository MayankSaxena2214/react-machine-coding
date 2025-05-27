    import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

    const initialState={
        name:"",
        email:"",
        phone:"",
        users:[],
        loading:false,
        error:null
    }

    export const fetchUsers=createAsyncThunk("demo/fetchUsers",async()=>{
        const response=await axios.get('https://jsonplaceholder.typicode.com/users');
        return response.data; //this will become the action.payload;
    })
    const demoSlice=createSlice({
        name:"demo",
        initialState,
        reducers:{
            setData:(state,action)=>{
                const {name,email,phone}=action.payload;
                state.name=name;
                state.email=email;
                state.phone=phone;
            }
        },
        extraReducers:(builder)=>{
            builder
                .addCase(fetchUsers.pending,(state)=>{
                    state.loading=true;
                    state.error=null;
                })
                .addCase(fetchUsers.fulfilled,(state,action)=>{
                    state.users=action.payload;
                    state.error=null;
                    state.loading=false;

                })
                .addCase(fetchUsers.rejected,(state,action)=>{
                    state.loading=false,
                    state.error=action.error.message;
                    
                })
        }
    });

    export const {setData}=demoSlice.actions;

    export default demoSlice.reducer;