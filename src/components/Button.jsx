import React, { useContext } from "react";
import { CalcContext } from "../context/CalcContext";
const getStyleName = btn =>{
    
const className = {
    '=': 'equals',
    'x': 'opt',
    '-': 'opt',
    '+': 'opt',
    '/': 'opt',
}
return className[btn]
}

const Button =({value})=>{
    const {calc, setCalc} = useContext(CalcContext);
     console.log(setCalc);
//user clicks dot
    const commaClick = ()=>{
      setCalc({
        ...calc,

     num: !calc.num.toString().includes('.')?calc.num + value : calc.num
      })
    }
//user clicks c 
    const resetClick = ()=>{
        setCalc({
            sign:"",
            num:0,
            res:0,
        })
    }
//user clicks any number    
    const handleClickBtn = ()=>{
    const numberString = value.toString()
    let numberValue;
    if(numberString==='0' && calc.num ===0 ){
    numberValue = "0";
    }else{
        numberValue = Number(calc.num+ numberString)
    }
    setCalc({
        ...calc,
        num: numberValue
    })
    }
    //user clicks sign like + - / x
    const signClick=()=>{
    setCalc({
        sign : value,
        res: !calc.res && calc.num  ? calc.num : calc.res,
        num : 0,
    })
    }
   //user click equal
   const  equalsClick = () => {
   if(calc.res&&calc.num ){

    const math = (a , b , sign)=>{
    const result ={
        '+' :(a,b)=> a + b,
        '-':(a,b)=> a - b,
        'x':(a,b)=> a * b,
        '/':(a,b)=> a / b,
    }
    return result[sign](a,b);
    }
    
    setCalc({
        res: math(calc.res,calc.num,calc.sign),
        sign:"",
        num : 0
    })
   }
   }
   // percentage button click
   const percentClick = () => {
    setCalc({
        num:(calc.num/100),
        res:(calc.res/100),
        sign:''
    })
   }
   // person click invert button
   const invertClick = () => {
    setCalc({
        num : calc.num? calc.num* -1 : 0,
        res : calc.res? calc.res* -1 : 0,
        sign:'',
    })
   }

    const handleBtnClick = ()=>{
       const results = {
        '.': commaClick,
        'C': resetClick,
        '/': signClick,
        'x': signClick,
        '-': signClick,
        '+': signClick,
        '=': equalsClick,
        '%': percentClick,
        '+-': invertClick,
       }
       if(results[value]){
        return results[value]()
       }else{
        return handleClickBtn()
       }
    }
    return (
        <button onClick={handleBtnClick} className={`${getStyleName(value)} button`}>{value}</button>
    )
   
}
export default Button;