import { createSlice } from "@reduxjs/toolkit";

export const collectionSlice = createSlice({
  name: "collection",
  initialState: {
    album: [
      {
        id: "1",
        name: "Vacation",
        description: "My honeymoon vacation",
        photos: [
          "https://smaller-pictures.appspot.com/images/dreamstime_xxl_65780868_small.jpg",
        ],
      },
      {
        id: "2",
        name: "Vacation",
        description: "My honeymoon vacation",
        photos: [
          "https://smaller-pictures.appspot.com/images/dreamstime_xxl_65780868_small.jpg",
        ],
      },
      {
        id: "3",
        name: "Vacation",
        description: "My honeymoon vacation",
        photos: [
          "https://smaller-pictures.appspot.com/images/dreamstime_xxl_65780868_small.jpg",
        ],
      },
    ],
  },

  reducers: {
    createCollection: (state, action) => {
      state.album.push(action.payload);
    },

    deleteCollection: (state, action) => {
      return state.album.filter((foto) => foto.id !== action.payload);
    },

    updateCollection: () => {},
  },
});

export const {createCollection, deleteCollection } =
  collectionSlice.actions;

export default collectionSlice.reducer;
