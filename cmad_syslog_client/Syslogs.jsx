import React from 'react';
import LogGridComp from './LogGridComp.jsx';
import LevelFilterComp from './LevelFilterComp.jsx';

class Syslogs extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         loglevels: {
            info: "off",
            warn: "off",
            debug: "off",
            err: "off",
            results: [],
            count: 0,
            loading: true    
         }
      }
      this.onAdd = (loglevel) => {
         this.setState({
            loglevels: loglevel
         });
      }
   }
   componentDidMount() {
      
   }
   render() {
      return (
         <div>
            <LevelFilterComp add={this.onAdd} />
            <hr />
            <LogGridComp list={this.state.loglevels} />
         </div>
      )
   }
}

export default Syslogs;