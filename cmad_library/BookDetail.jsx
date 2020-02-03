import React from 'react';

class BookDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            isbn : '',
            book : {}
        }
        this.onIsbn = (e) =>{
            this.setState({
                isbn: e.target.value
            });
        }
        this.onSearch = () =>{
            if(this.state.isbn != null && this.state.isbn != undefined){
                fetch('http://localhost:8080/book/'+this.state.isbn).then(response => {
                    response.json().then(o => {
                        this.setState({
                            book: o
                        });
                    })
                 });
            }else{
                book = {};
            }
            
        }
    }
    render() {
        return (
           <div>
                <h1> Book Detail</h1>
                <div>
                    <input value={this.state.isbn} onChange={this.onIsbn} />
                    <button onClick={this.onSearch}>Search</button>
                </div>
                <hr />
                <table>
                    <tbody>
                        <tr>
                            <td>ISBN</td>
                            <td>{this.state.book.isbn}</td>
                        </tr>
                        <tr>
                            <td>Title</td>
                            <td>{this.state.book.title}</td>
                        </tr>
                        <tr>
                            <td>Subject</td>
                            <td>{this.state.book.subject}</td>
                        </tr>
                        <tr>
                            <td>Price</td>
                            <td>{this.state.book.price}</td>
                        </tr>
                    </tbody>
                </table>
           </div>
        )
    }
}

export default BookDetail;