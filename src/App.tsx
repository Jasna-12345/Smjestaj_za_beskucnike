import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./redux/store";
//import { increment } from "./redux/sliceCounter";
import { useEffect } from "react";
import { database } from "./firebase/database";
import { collection, getDocs, query, where } from "firebase/firestore";

const homelessRef = collection(database, "homeless");
const q = query(homelessRef, where("name", "==", "Ivo Ivic"));

function App() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  const getData = async () => {
    const data = await getDocs(q);
    const homeless = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    console.log({ homeless });
  };

  useEffect(() => {
    getData();
  }, []);

  return <div></div>;
}

export default App;
