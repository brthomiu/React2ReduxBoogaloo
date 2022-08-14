import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  liked: false,
}

export const likeSlice = createSlice({
  name: 'like',
  initialState,
  reducers: {
    like: (state) => {
      if (state.liked === false) {
        state.liked = true
      } else {
        if (state.liked === true) {
          state.liked = false
        } else {
          console.log("Nobody liked that.")
        }
      }
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { like } = likeSlice.actions

export default likeSlice.reducer