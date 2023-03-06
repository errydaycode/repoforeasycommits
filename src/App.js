import logo from './logo.svg';
import './App.css';
import Header from "./header";
import Tech from "./tech";
import {useState} from "react";


const App = () => {

let [count, setCount] = useState(0)

  return (
        <div>
            <GucciFlipFlopps/>
      <Header />
          <Tech />
        </div>
  );
}




export default App;

