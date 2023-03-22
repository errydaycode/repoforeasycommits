import logo from './logo.svg';
import './App.css';
import Header from "./header";
import Tech from "./tech";
import {useState} from "react";


const App = () => {

let [count, setCount] = useState(0)

  return (
        <div className={'divka'}>
            {count}
            <div>
                <button onClick={ ()=>setCount(count +1)}>increase</button>
                <button onClick={()=> setCount(0)}>reset</button>
            </div>
        </div>
  );
}




export default App;

