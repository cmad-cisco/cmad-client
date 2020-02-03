import React from 'react';
import BookList from './BookList.jsx';

class BookSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            subject : '',
            books : []
        }
        this.onSubject = (e) =>{
            this.setState({
                subject: e.target.value
            });
        }
        this.onSearch = () =>{
            fetch('http://localhost:8080/book?subject='+this.state.subject).then(response => {
                response.json().then(o => {
                    this.setState({
                        books: o
                    });
                })
             });
        }
    }
    componentDidMount() {
        fetch('http://localhost:8080/book?subject='+this.state.subject).then(response => {
           response.json().then(o => {
              this.setState({
                 books: o
              });
           })
        });
     }
    render() {
        return (
           <div>
                <h1>Search Books</h1>
                <div>
                    <input value={this.state.subject} onChange={this.onSubject} />
                    <button onClick={this.onSearch}>Search</button>
                </div>
                <hr />
                <BookList list={this.state.books}/>
           </div>
        )
    }
}

export default BookSearch;