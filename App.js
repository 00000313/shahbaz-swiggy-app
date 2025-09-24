// import ReactDOM from 'react-dom/client';
// import React  from "react";

// const heading = React.createElement("h1",
//                {id:"Heading", xyz:"abc"},
//             "Hello world from ReactJS");
// //   const root  = ReactDOM.createRoot(document.getElementById("root"));

// //   root.render(heading);

// /*
//  creating a nest html tags using react

//  <div id:'parent'>
//     <div id='child>
//       <h1>I am the html tag</h1>
//      </div>
//  </div>
// */
//  const object = React.createElement("div", {id:"Parent"} ,
//      [ 
//     React.createElement("div", {id:"childred"} , 
//                           [
//                              React.createElement("h1",{} , "I am a html tag"),
//                              React.createElement("h2",{} , "I am a html tag")

//                           ]
//                        ),
//      React.createElement("div", {id:"children2"} , 
//                           [
//                              React.createElement("h1",{} , "I am a html tag"),
//                              React.createElement("h2",{} , "I am a html tag")

//                           ]
//                        )
//                     ]
//     )
 
//  const anotherRoot = ReactDOM.createRoot(document.getElementById("root"));
//  anotherRoot.render(object);


/**
 * Header
 *  -Logo
 *  -Home
 *  -About 
 *  -Cart
 * Body
 *  -CardContainer
 *    -Reateurant Card
 * Footer
 *   -Copyright
 *   -Links
 *   -Address
 *   -Contact
 *   
 */

// const heading = (
//   <h1>
//    Hello React using JSX
//   </h1> 
// );


// const Element = <h1>THis is React Title Element</h1>
// const ReactElement2 = (
//   <span>
//     {Element}
//     This is second react elements
//   </span>
// )
// const Title = () =>(
//   <span>
// <h1>THis is title component</h1>
// </span>
// )
// const num =1000;
// const JsxHeading = () =>  {
//   return (
//   <div> 
// {Title()}
// {ReactElement2}
// <h1>Heading component in JSX</h1>
// </div>
// )
// }


// const ReactElement3 = (
//   <div>
//   <h1>This is React Element number 3</h1>
//   <div><JsxHeading /></div>
//   </div>
// )
// console.log("THIS IS RUNNING")





const CardContainer =() =>(
  // <div>
  //   <img src='https://images-platform.99static.com/PqkxPzdIGHYlwJzMzFSLbWCaI0g=/0x0:1181x1181/500x500/top/smart/99designs-contests-attachments/134/134197/attachment_134197839'></img>
  // </div>
  <h1>Card Container</h1>
)




import ReactDOM from 'react-dom/client'
import Header from './src/component/Header'
import Body from './src/component/Body'
import About from './src/component/About'
import Contact from './src/component/Contact'
import Error from './src/component/Error'
import RestaurantComponent from './src/component/Restaurant'
import { lazy, Suspense, useEffect, useState } from 'react'
import { createBrowserRouter , RouterProvider , Outlet} from 'react-router-dom'
import UserContext from './src/utils/UserContext'
import { Provider } from 'react-redux'
import appStore from './src/utils/appStore'
import Cart from './src/component/Cart'

const Grocery = lazy(()=>import("./src/component/Grocery"))


//Root level Component
const AppLayout = () =>{

  const [userName  , setUserName] = useState("")

  
  useEffect(()=>{
    const data ={
      name:"Shahbaz Nagori"
    };
    setUserName(data.name)
  },[])

  return (
     //default useer
     <Provider store={appStore}>
     <UserContext.Provider value={{loggedInUser:userName, setUserName}}>     
     {/*shahbaz nagori*/}
    <div className="App">
       
       <UserContext.Provider value={{loggedInUser:"Elon Musk"}}>
         {/*Elon Musk*/}
        <Header />
       </UserContext.Provider>
       <Outlet />
       //Footer
     
    </div>
    </UserContext.Provider>
    </Provider>
  )
};

const appRouter = createBrowserRouter([
  {
    path:"/",
    element: <AppLayout />,
    children:[{
        path:'/',
        element:<Body />
    },
    {
      path:'/about',
      element:<About />
    },
    {
      path:'/contact',
      element:<Contact  />
    },
    {
      path:'/grocery',
      element:<Suspense fallback={<h2>Loading</h2>}><Grocery  /></Suspense>
    },
    {
      path:'/restaurant/:resId',
      element:<RestaurantComponent />
    },
    {
      path:'/cart',
      element:<Cart />
    }  
  ],
    errorElement:<Error />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(<RouterProvider router={appRouter} />);