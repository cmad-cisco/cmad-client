import React from 'react';

class LevelFilterComp extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         info: '',
         warn: '',
         debug: '',
         err: '',
         results: [],
         count: 0,
         loading: true

      }
      this.onWarn = (e) => {
         this.setState({
            warn: !this.state.warn
         });
      }
      this.onInfo = (e) => {
         this.setState({
            info: !this.state.info
         });

      }
      this.onDebug = (e) => {
         this.setState({
            debug: !this.state.debug
         });

      }
      this.onErr = (e) => {
         this.setState({
            err: !this.state.err
         });

      }

      this.onAdd = () => {
         const url = "https://api.randomuser.me/";
         fetch(url)
            .then(response => response.json())
            .then((data) => {
               this.setState({ results: data.results })   
            })
         console.log("I got called" + this.state.count++);
         this.props.add({
            warn: this.state.warn,
            info: this.state.info,
            debug: this.state.debug,
            err: this.state.err,
            results: this.state.results,
            loading: false,
            count: this.state.count
         });
      }
   }
   render() {  
      return (
         <div>
            <table align="right" >
               <tbody>
                  <tr >
                     <b>Please Select Log Level</b>
                  </tr>
                  <tr>
                     <td >Warning</td>
                     <td><input type="checkbox" checked={this.state.warn} onChange={this.onWarn} /></td>
                     </tr>
                  <tr>
                     <td>Info</td>
                     <td><input type="checkbox" checked={this.state.info} onChange={this.onInfo} /></td>
                  </tr>
                  <tr>
                     <td>Debug</td>
                     <td><input type="checkbox" checked={this.state.debug} onChange={this.onDebug} /></td>
                  </tr>
                  <tr>
                     <td>Error</td>
                     <td><input type="checkbox" checked={this.state.err} onChange={this.onErr} /></td>
                  </tr>
                  <tr><td><button onClick={this.onAdd}>APPLY</button></td></tr>
               </tbody>
            </table>
         </div>
      )
   }
}

export default LevelFilterComp;