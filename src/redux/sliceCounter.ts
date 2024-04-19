import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

export const sliceCounter = createSlice({
  name: "counter",
  initialState, //Inicijalno stanje tipa number postavljamo na 0
  reducers: {
    increment: (state) => {
        //Definiramo akciju koristeći "mutirajuću" logiku unutar reducer funkcije, što nam omogućuje 
        //redux toolkit.
        //Pritom se koristi Immer biblioteka koje radi privremenu kopiju originalnog stanja
        //poznatu kao "draft state",a ono se može mijenjati tijekom izvršavanja koda.
        //Immer biblioteka omogućuje praćenje svih promjena koje se događaju u "draft stanju"
        //i koristi te informacije za generiranje potpuno novog nepromjenjivog stanja kada 
        //je promjena vrijednosti "mutacija" završena. 
      console.log("Početna struktura aplikacije.");
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
      //REDUCER: klasična JS funkcija koja prima 2 ulazna argumenta
      
      //PAYLOAD: dodatni podatak koji se prenosi uz Redux akciju
      //Unutar incrementByAmount, PAYLOAD akcija omogućuje povećanje vrijednosti brojača za određeni iznos. 
      //Payload ovdje zapravo predstavlja taj iznos koji se dodaje trenutnoj vrijednosti brojača, 
      //kako bi se ona povećala
    },
  },
});

//Za svaki od slučajeva reducer funkcije, definiramo po 1 action
export const { increment, decrement, incrementByAmount } = sliceCounter.actions;
//Kada smo definirali state - trenutno stanje i action - akciju koja je uzrokovala poziv funkcije
//potrebno je vratiti jednu vrijednost - novo stanje
export default sliceCounter.reducer;