function Tests() {
   return (
      <div>
         <ReactPage1 />
         <Header />
         <ReactPage2 />
      </div>
   );
}
const ReactPage1 = () => {
   return (
      <nav>
         <div>
            <img src="React-icon.svg" width="20%"></img>
            <h1>Fun facts about React</h1>
            <ul>
               <li>Was first realised in 2013</li>
               <li>Was created by Jordan Wakle</li>
               <li>Is maintained by facebook</li>
            </ul>
         </div>
      </nav>
   );
};

const ReactPage2 = () => {
   return (
      <nav>
         <div>
            <img src="React-icon.svg" width="50%"></img>
            <h1>Fun facts 2 about React</h1>
            <ul>
               <li>Was first realised in 2013</li>
               <li>Was created by Jordan Wakle</li>
               <li>Is maintained by facebook</li>
            </ul>
         </div>
      </nav>
   );
};
const Header = () => {
   return (
      <div>
         <header>
            <nav>
               <img src="./React-icon.svg" width="35%"></img>
               <h1>reasons</h1>
            </nav>
         </header>
         <ol>
            <li>its amazing</li>
            <li>very fun</li>
         </ol>
         <footer>© 2021 Musa development. All rights reserved.</footer>
      </div>
   );
};

ReactDOM.createRoot(document.getElementById("root")).render(<Tests />);
//ReactDOM.render(<Test />, document.getElementById("root"));
