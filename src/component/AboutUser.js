
import React, { useEffect, useState } from "react"

const  UserClass = (props)=>{

    const {name , city } = props;

    const [count , setCount] = useState(0)
    const [count2 ,setCount2] = useState(0)
    console.log("USER CLASS Component")
    // constructor(props){
    //     super(props);
    //     console.log("Child Class constructor");
    // this.state={
    //      count:0,
    //      count2:2
    // }

    // }

    // componentDidMount(){
    //     console.log("Child Class Mounted")
    // }

    useEffect(()=>{
        console.log("User class Component mounted")
    })

    // render(){
            
    //     console.log("Child Class Mounting")
    //     const {name , city} = this.props;
    //     const {count , count2} = this.state;
        
        return(
           
            <div className="class-comp">
                 {console.log("Redering User class")}
                <h1>This is User based Component</h1>
                <h2>Name {name}</h2>
                <h2>Address {city}</h2>
                <h2>Count {count} <button onClick={()=>{
                    // this.setState({
                    //     count : count +1
                    // })
                    setCount(count+1)
                }}>Count</button> </h2>
                
                <h2>Count {count2}</h2>
            </div>
        )
   
}

export default UserClass;