function nvvv() {
   return reactPage1, reactPage2;
}
const reactPage1 = (
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
   </nav>
);
const reactPage2 = (
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
   </nav>
);

ReactDOM.createRoot(document.getElementById("root")).render(nvvv());
