/**
 * Created by Michael on 15/05/16.
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';

import BookInfo from '../components/book_info';

// <li key={ book.title } className="list-group-item">Title: { book.title } - Description: { book.book_description }</li>

class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
                <BookInfo key={ book.key } book={ book } />
            );
        });
    }

    render() {
        return (
          <ul className="list-group col-sm-4">
              { this.renderList() }
          </ul>
        );
    }
}

function mapStateToProps(state) {
    // Set props of Book list:
    // Return value is props of the class.
    return {
        books: state.books
    };
}

export default connect(mapStateToProps)(BookList);