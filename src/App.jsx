import "./App.css"
import ReactDOM from "react-dom/client";
import ProductTab from "./ProductTab.jsx"

// function App(){
//   return <ProductTab/>
// }
// //React element 
// const heading = (
//   <div>
//     <h1>This is my first react</h1>
//   </div>
// );
// //Component Coposition
// const Title=()=>(       //functional react component
//   <h1>This is my function component</h1>
// );
// const Headings=()=>(
  
//   <div>
//     {heading}
//     <Title/>
//     <h1>used composition component</h1>
//   </div>
// );
// Functional component
const Title=function (){
  return <h1>This is my function component</h1>
};     

const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Headings/>);
root.render(<Title/>);
// export default Headings;
export default Title;