import {Component} from 'react'
import { useEffect } from 'react'

const TestComponent =()=>{

    console.log("TEST COMponent running")
    // constructor(props){
    //     super(props);
    //     console.log("Contructor of Test component")
    // }

    useEffect(()=>{
        console.log("Test component mouonted");
    })

     return(
       <div>Piece of JSX Code</div>
    )
}

export default TestComponent;