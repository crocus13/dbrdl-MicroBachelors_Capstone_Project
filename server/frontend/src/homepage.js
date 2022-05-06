import './bootstrap.min.css';
import React from 'react';

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <div style={{display:"flex"}}>
        <img src='/cardealership.jpeg' style={{width: "300px"}}/>
        <div style={{margin:"100px"}}>
             <span style={{margin:"60px"}}>
             "Welcome to dealership homepage.If you need to make an appoinment or any other help, please chat with our web assistant"
               </span >
           </div>

        </div>
        
      </div>
    );
  }
}

export default HomePage;
