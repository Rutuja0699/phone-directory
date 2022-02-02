import Header from "./Header";
import './App.css';
import { render } from "@testing-library/react";

function App() {
  render()
    let subscribers = [
      {
        name: 'Rutuja',
        phone: '8888888888'
      },
      {
        name: 'Mihir',
        phone: '5555555555'
      }
    ]

    
    return (
   // <><Header/>
   // <button> Add </button><div>
    //    <span> Name </span><br />
     //   <span> Phone </span>
       <> <Header />
        <div className="component-body-container">
          <button className="custom-btn add-btn">Add</button>

          <div className="grid-container heading-container">
            <span className="grid-item name-heading">Name</span>
            <span className="grid-item phone-heading">Phone</span>
           

          </div>

          {
            subscribers.map(sub => {
              return <div className="grid-container">
                <span className="grid-item">{sub.name}</span>
                <span className="grid-item">{sub.phone}</span>
                <button className="custom-btn delete-btn">Delete</button>
                
                </div>
            })
          }

              </div>
     </>

        );
}


export default App;
