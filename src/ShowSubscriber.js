import Header from "./Header";
import './ShowSubscriber.css';
import { render } from "@testing-library/react";
import { Component } from "react/cjs/react.production.min";
import './common.css'
import './ShowSubscriber.css';


class ShowSubscriber extends Component {


  // componentDidMount(){
  //   let newSubscriber = {
  //     id: 1,
  //     name: 'Rutuja Patil',
  //     phone: '99999999999'
  //   }
  //   let subscribersList = this.state.subscribersListToShow;
  //   subscribersList.push(newSubscriber);
  //   this.setState({subscribersListToShow: subscribersList});

  // }

  render(){
    //console.log('render Called')
  // let subscribers = [
  //   {
  //     name: 'Rutuja',
  //     phone: '8888888888'
  //   },
  //   {
  //     name: 'Mihir',
  //     phone: '5555555555'
  //   }
  //];
  return(
      <><Header heading='Phone Directory' /><div className="component-body-container">
        <button className="custom-btn add-btn">Add</button>

        <div className="grid-container heading-container">
          <span className="grid-item name-heading">Name</span>
          <span className="grid-item phone-heading">Phone</span>


        </div>
        {

          this.props.subscribersList.map(sub => {
          return <div key={sub.id} className="grid-container">
            <span className="grid-item">{sub.name}</span>
            <span className="grid-item">{sub.phone}</span>
            <button className="custom-btn delete-btn">Delete</button>

          </div>;
        })}

      </div></>
      

    );
  }
}


export default ShowSubscriber;
