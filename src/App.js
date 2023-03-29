import logo from './logo.svg';
import './App.css';
import Header from "./header";
import Tech from "./tech";
import {useState} from "react";
import SuperButton from "./SuperButton";


const App = () => {

let [count, setCount] = useState(0)

    const increaseHandler=()=> {
        setCount(count +18)
    }
    const resetHandler=()=> {
        setCount(0)
    }

  return (
        <div className={'xD'}>
            {count}
            <div>
                <SuperButton name={'increase'} callBack={increaseHandler}/>
                <SuperButton name={'reset'} callBack={resetHandler}/>

            </div>
        </div>
  );
}




export default App;

