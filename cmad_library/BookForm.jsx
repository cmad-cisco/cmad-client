import React from 'react';

class BookForm extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         isbn: '',
         title: '',
         subject: '',
         price: 0
      }
      this.onIsbn = (e) => {
         this.setState({
            isbn: e.target.value
         });
      }
      this.onTitle = (e) => {
         this.setState({
            title: e.target.value
         });

      }
      this.onSubject = (e) => {
         this.setState({
            subject: e.target.value
         });

      }
      this.onPrice = (e) => {
        this.setState({
           price: e.target.value
        });

     }
      this.onAdd = () => {
        var payload = {
            isbn: this.state.isbn,
            title: this.state.title,
            subject: this.state.subject,
            price: this.state.price
        }
        
        fetch("http://localhost:8080/book",
            {
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify(payload)
            })
            .then(function(res){ 
                console.log(res);
            })
            .catch(function(res){ console.log(res) });
            this.setState({
               isbn: '',
               title: '',
               subject: '',
               price: 0
            });

      }
   }
   render() {
      return (
         <table>
            <tbody>
               <tr>
                  <td>ISBN</td>
                  <td><input value={this.state.isbn} onChange={this.onIsbn} /></td>
               </tr>
               <tr>
                  <td>Title</td>
                  <td><input value={this.state.title} onChange={this.onTitle} /></td>
               </tr>
               <tr>
                  <td>Subject</td>
                  <td><input value={this.state.subject} onChange={this.onSubject} /></td>
               </tr>
               <tr>
                  <td>Price</td>
                  <td><input value={this.state.price} onChange={this.onPrice} /></td>
               </tr>
               <tr><td><button onClick={this.onAdd}>Add Book</button></td></tr>
            </tbody>
         </table>
      )
   }
}

export default BookForm;