import { Component } from "react";
import AboutUser from "./AboutUser"
import TestComponent from "./TestComponent";
import UserContext from "../utils/userContext";


class About extends Component {

    constructor(){
        super()
        console.log("Parant class contructor")
    }
    
    componentDidMount(){
        console.log("Parent Class Component Mounted");
    }


    render(){
        console.log("Parent Class Mounting");
        return <div>
             <AboutUser />
             <UserContext.Consumer>
                {({loggedInUser})=><h1 className="text-xl font-bold">{loggedInUser}</h1>}
             </UserContext.Consumer>
             <TestComponent />
             {console.log("This should print")}

        </div>
    }
}


// const About = () =>{
//     return (
//         <div>
//          <h1>THis is about component</h1>
//          <AboutUser 
//          name={"Shahbaz"}
//          city={"Ujjain"}
//           />
//          </div>
//     );
// }

export default About;