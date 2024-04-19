//Za konfiguraciju REDUX STORE-a
import { configureStore } from "@reduxjs/toolkit";
//Treba nam brojač iz sliceCounter
import counterReducer from "./sliceCounter";

export const store = configureStore({
  // Definiramo counter reducer kao dio rootReducer-a i omogućujemo alate za razvoj (devTools).
  reducer: {
    counter: counterReducer,
  },
  devTools: true, 
  //Redux Developer Tools(alati za pregled i debagiranje Redux stanja i akcija u pregledniku) trebaju biti omogućeni 
});

// Trebamo "izvuci" `RootState` i `AppDispatch` iz globalnog state management-a, store-a
export type RootState = ReturnType<typeof store.getState>;
// Na primjer: {posts: PostsState, comments: CommentsState, users: UsersState}
//Dohvaćamo referencu na funkciju koja će nam služiti za aktiviranje akcija
export type AppDispatch = typeof store.dispatch;