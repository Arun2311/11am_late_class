import{ useCallback, useMemo, useState } from "react"
import About from "./Components/About"
import Contact from "./Components/Contact"
import Counter from "./Components/Counter"
import ListShow from "./Components/ListShow"
import LuffyComp from "./Components/LuffyComp"
import data from "../db"
import Card from "./Components/Card"
import "./App.css"
import CardOne from "./Components/CardOne"
import ConceptTwo from "./Components/ConceptTwo"
import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import HomeComp from "./Components/HomeComp"
import ProductComp from "./Components/ProductComp"
import CheckComp from "./Components/CheckComp"
import "bootstrap/dist/css/bootstrap.min.css"

import "bootstrap/dist/js/bootstrap.min.js"
import DetailsForm from "./Components/DetailsForm"
import GroceryList from "./Components/GroceryList"



function App() {
  // const [list, setlist] = useState(data)

  // const [isshow, setisshow] = useState(true)

  const handlelogout = useMemo(() => {
   return 12

  },[])

  return (
//     <BrowserRouter>
//       {/* <h1>Arun</h1> */}
//       {/* 
//   <Contact />
//       <About />
//       <Contact /> */}

//       {/* <Counter/> */}

//       {/* <ListShow/> */}

//       {/* props is used to pass a data from one to another com(ptoc) */}

//       {/* {list.map((name)=>(
// <LuffyComp name={name} />

// ))} */}

//       {/* <div className="fl">
   

//       {list.map((da) => (
//         <Card name={da.name} age={da.age} />

//       ))}

// </div> */}

//       {/* <CardOne/> */}

//       {/* <ConceptTwo/> */}

//       {/* {isshow ? <ConceptTwo/> : null} */}

//       {/* <button onClick={handlelogout}>Logout</button> */}
// {/* 
//       <Link to="/">Home</Link>
//       <br />

//       <Link to="/product">product</Link>
//       <br />

//       <Link to="/about" >about</Link> */}



//       {/* <Routes>

//         <Route path="/" element={<HomeComp />} />

//         <Route path="/product" element={<ProductComp />} />

//         <Route path="/about" element={<About />} />



//       </Routes> */}

//       {/* <CheckComp/> */}

//       {/* <DetailsForm/> */}



//       {/* usecallback is hook its is used meomorize whole function 

//       it only re render when depency array change
      
//       */}

//           {/* usememo is hook its is used meomorize  function return value

//       it only re render when depency array change
      
//       */}

//       {/* pros 1st vatti 2min  nxt tym it milli seconds */}







//     </BrowserRouter>

<div>

{/* <GroceryList/> */}


<h1>Arun</h1>

</div>


  )
}

export default App


// react.memo is used meomorize whole comp it omly re render when props or state chsnged


