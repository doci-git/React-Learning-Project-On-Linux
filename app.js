function Tests() {
   return (
      <div>
         <ReactPage1/>
      </div>
   );
}
const ReactPage1 = () =>{
   return(
      <nav>
         <div>
            {/* <img src="React-icon.svg" width="50%"></img> */}
            <h1>Fun facts about React</h1>
            <ul>
               <li>Was first realised in 2013</li>
               <li>Was created by Jordan Wakle</li>
               <li>Is maintained by facebook</li>
            </ul>
         </div>
      </nav>)
   
}


// const ReactPage2 = () => {
//    return;
//    <nav>
//       <div>
//          {/* <img src="React-icon.svg" width="50%"></img> */}
//          <h1>Fun facts about React</h1>
//          <ul>
//             <li>Was first realised in 2013</li>
//             <li>Was created by Jordan Wakle</li>
//             <li>Is maintained by facebook</li>
//          </ul>
//       </div>
//    </nav>;
// };

ReactDOM.createRoot(document.getElementById("root")).render(<Tests/>);
//ReactDOM.render(<Test />, document.getElementById("root"));
