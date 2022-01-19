import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  text:"",
  value: 0,
  arr: [{val:"❌",
  id:0, b:"0" ,flightName:"15-134"},{val:"❌",
    id:1 , b:"0",flightName:"15-134"},{val:"❌",
      id:2 , b:"0",flightName:"15-134"},{val:"❌",
        id:3, b:"0",flightName:"15-134"},{val:"❌",
          id:4, b:"0",flightName:"15-134"},{val:"❌",
            id:5, b:"0",flightName:"15-134"},{val:"❌",
              id:6, b:"0",flightName:"15-134"},{val:"❌",
                id:7, b:"0",flightName:"15-134"},{val:"❌",
                  id:8, b:"0",flightName:"15-134"},{val:"❌",
                    id:9, b:"0",flightName:"15-134"},
                    {val:"❌",
                    id:10, b:"0",flightName:"15-134"},{val:"❌",
                      id:11, b:"0",flightName:"15-134"},{val:"❌",
                        id:12, b:"0",flightName:"15-134"},{val:"❌",
                          id:13, b:"0",flightName:"15-134"},{val:"❌",
                            id:14, b:"0",flightName:"15-134"},{val:"❌",
                              id:15, b:"0",flightName:"15-134"},{val:"❌",
                                id:16, b:"0",flightName:"15-134"},{val:"❌",
                                  id:17, b:"0",flightName:"15-134"},{val:"❌",
                                    id:18, b:"0",flightName:"15-134"},{val:"❌",
                                      id:19, b:"0",flightName:"15-134"},{val:"❌",
                                      id:20, b:"0",flightName:"19-187"},{val:"❌",
                                      id:21, b:"0",flightName:"19-187"},
                                      {val:"❌",
                                      id:22, b:"0",flightName:"19-187"},
                                      {val:"❌",
                                      id:23, b:"0",flightName:"19-187"},
                                      {val:"❌",
                                      id:24, b:"0",flightName:"19-187"},
                                      {val:"❌",
                                      id:25, b:"0",flightName:"19-187"},
                                      {val:"❌",
                                      id:26, b:"0",flightName:"19-187"},
                                      {val:"❌",
                                      id:27, b:"0",flightName:"19-187"},
                                      {val:"❌",
                                      id:28, b:"0",flightName:"19-187"},
                                      {val:"❌",
                                      id:29, b:"0",flightName:"19-187"},
                                      {val:"❌",
                                      id:30, b:"0",flightName:"19-187"},
                                      {val:"❌",
                                      id:31, b:"0",flightName:"19-187"},
                                      {val:"❌",
                                      id:32, b:"0",flightName:"19-187"},
                                      {val:"❌",
                                      id:33, b:"0",flightName:"19-187"},
                                      {val:"❌",
                                      id:34, b:"0",flightName:"19-187"},
                                      {val:"❌",
                                      id:35, b:"0",flightName:"19-187"},
                                      {val:"❌",
                                      id:36, b:"0",flightName:"19-187"},{val:"❌",
                                      id:37, b:"0",flightName:"19-187"},
                                      {val:"❌",
                                      id:38, b:"0",flightName:"19-187"},
                                      {val:"❌",
                                      id:39, b:"0",flightName:"19-187"},
                                      {val:"❌",
                                      id:40, b:"0",flightName:"19-187"},],
  obj: null,
  peopleArr:[],
  price:0
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
    changeString: (state, action) => {
      state.text = action.payload
    },
    insertArr: (state, action) => {
      state.arr[action.payload.id]={val: action.payload.val, id: action.payload.id,b:action.payload.b,flightName:action.payload.flightName}
    },
    insertPeopleArr: (state, action) => {
      state.peopleArr=action.payload
    },
    insertObj: (state, action) => {
      state.obj=( action.payload)
    },
    insertPrice: (state, action) => {
      state.price=( action.payload)
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount,changeString,insertArr,insertObj,insertPeopleArr,insertPrice} = counterSlice.actions

export default counterSlice.reducer