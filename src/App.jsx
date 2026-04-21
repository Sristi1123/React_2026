// import "./App.css"

// // // import ProductTab from "./ProductTab.jsx"
// import Header from "./components/Header.jsx";
// import Body from "./components/Body.jsx";
// // // function App(){
// // //   return <ProductTab/>
// // // }
// // // //React element 
// // // const heading = (
// // //   <div>
// // //     <h1>This is my first react</h1>
// // //   </div>
// // // );
// // // //Component Coposition
// // // const Title=()=>(       //functional react component
// // //   <h1>This is my function component</h1>
// // // );
// // // const Headings=()=>(
  
// // //   <div>
// // //     {heading}
// // //     <Title/>
// // //     <h1>used composition component</h1>
// // //   </div>
// // // );
// // // Functional component
// // const Title=function (){
// //   return <h1>This is my function component</h1>
// // };     

// // const root=ReactDOM.createRoot(document.getElementById("root"));
// // // root.render(<Headings/>);
// // root.render(<Title/>);
// // // export default Headings;
// // export default Title;

// const AppLayout=()=>{
//   return(
//     <div className="app">
//       {/* Header */}
//       {/* Body */}
//       {/* Footer */}
//        <Header/>
//        <Body/>
//     </div>
//   )
// }

// export default AppLayout;

import Ptab from "./Ptab";

function App() {
  return (
    <div>
      <Ptab />
    </div>
  );
}

export default App;