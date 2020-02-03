import React from 'react';

class BookList extends React.Component {
   render() {
      return (
         <table>
            <tbody>
               <tr>
                  <td>ISBN</td><td>Title</td><td>Subject</td><td>Price</td>
               </tr>
               {
                  this.props.list.map(e => <tr><td>{e.isbn}</td><td>{e.title}</td><td>{e.subject}</td><td>{e.price}</td></tr>)
               }
            </tbody>
         </table>
      )
   }
}

export default BookList;