import { initializeApp } from "firebase/app"; //da možemo inicijalizirati Firebase app s konf. objektom 
import { getFirestore, collection } from "firebase/firestore";

//Podaci potrebni za konfiguraciju baze, dobiveni putem: https://console.firebase.google.com/u/0/project/smjestaj-za-beskucnike/overview
const firebaseConfig = {
    apiKey: "AIzaSyBOw3hdIA0oTH_3L71o19S5BEmkA19k4sw",
    authDomain: "smjestaj-za-beskucnike.firebaseapp.com",
    projectId: "smjestaj-za-beskucnike",
    storageBucket: "smjestaj-za-beskucnike.appspot.com",
    messagingSenderId: "313986990652",
    appId: "1:313986990652:web:11d0576c240c5d93a67939",
    measurementId: "G-S0PHKER4YG"
  };
  
//Inicijalizacija baze
const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);