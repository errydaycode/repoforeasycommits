import React, {useEffect, useState} from 'react';

const Time = () => {
    let [date, setDate] = useState(new Date())
    useEffect(()=>{
     let timer =   setInterval(()=> {
            console.log('hello')
            setDate(new Date())
        }, 1000)
        return ()=> {
         clearInterval(timer)
        }
    },[date])
    return (
        <div className={'time'}>
            <span>{date.getHours()}:</span>
            <span>{date.getMinutes()}:</span>
            <span className={'sec'}>{
                date.getSeconds() <= 9 ?
                    `0${date.getSeconds()}`
                    : date.getSeconds()
            }</span>
        </div>
    );
};

export default Time;