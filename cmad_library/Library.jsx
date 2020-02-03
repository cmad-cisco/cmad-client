import React from 'react';
import BookForm from './BookForm.jsx';
import BookSearch from './BookSearch.jsx';
import BookDetail from './BookDetail.jsx'
class Library extends React.Component {
   render() {
      return (
         <div>
            <BookForm />
            <hr />
            <BookSearch />
            <hr />
            <BookDetail />
         </div>
      )
   }
}

export default Library;