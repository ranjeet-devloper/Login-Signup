// import logo from './logo.svg';
// import './App.css';


// import { createContext } from 'react';
import Mycars from './Components/Mycar';
import userContext from './Components/Mycontext'
// const userContext=createContext();

function App() {

  let Obj1={
    car00:{name:"hunndia",model:"2016",price:200},
    car01:{name:"audi",model:"2018",price:500},
    car02:{name:"marcedez",model:"2019",price:900},

  }

  return (
    <userContext.Provider value={Obj1}>
  <div>
     {/* <Mycars cars={Obj1}/> */}
     <Mycars/>
    </div>
  </userContext.Provider>
  );
}

export default App;
