function Tests() {
   return (
      <div>
         <Header />
         <ReactPage1 />
         <ReactPage2 />
      </div>
   );
}

const Header = () => {
   return (
      <div>
         <header>
            <nav>
               <img src="./React-icon.svg" className="images"></img>
               <ul className='nav-item'>
                  <li>home</li>
                  <li>about</li>
                  <li>contact</li>
               </ul>
            </nav>
               <h1>Reasons</h1>
         </header>
      </div>
   );
};

const ReactPage1 = () => {
   return (
      <div>
      <h3>main content</h3>
         <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque tenetur nemo suscipit. Exercitationem voluptate esse enim. Doloribus eveniet nobis odit. n</p>
      </div>
   );
};

const ReactPage2 = () => {
   return <footer>©2022 musa all rights reserved</footer>;
};

ReactDOM.createRoot(document.getElementById("root")).render(<Tests />);
//ReactDOM.render(<Test />, document.getElementById("root"));
