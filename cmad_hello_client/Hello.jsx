import React from 'react';

class Hello extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         message: ''
      }
   }
   componentDidMount() {
      fetch('http://localhost:8080/hello').then(response => {
         response.json().then(o => {
            this.setState({
               message: o.message
            });
         })
      });
   }
   render() {
      return (
         <div>
            <h1>CMAD Essentials</h1>
            <hr />
            {this.state.message}
         </div>
      )
   }
}

export default Hello;