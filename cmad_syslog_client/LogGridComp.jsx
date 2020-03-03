import React from 'react';

class LogGridComp extends React.Component {
  render() {
      return (
         <div>   
            <table>
               <tbody>
                  <tr>
                     <td>Warn</td><td>Debug</td><td>Info</td><td>Err</td>
                  </tr>
                  <tr>
                     <td>{this.props.list.warn.toString()}</td><td>{this.props.list.debug.toString()}</td><td>{this.props.list.info.toString()}</td><td>{this.props.list.err.toString()}</td>
                     <td>{this.props.list.loading || !this.props.list.results ? (
                           <div>loading...</div>
                        ) : (
                           <div>{this.props.list.results.name.first} </div>
                        )}
                     </td>
                  </tr>
               </tbody>
            </table>
         </div>
      )
   }
}

export default LogGridComp;