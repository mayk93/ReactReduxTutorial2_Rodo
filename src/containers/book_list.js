/**
 * Created by Michael on 15/05/16.
 */

import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { selectBook } from '../actions/index';
import BookInfo from '../components/book_info';

// <li key={ book.title } className="list-group-item">Title: { book.title } - Description: { book.book_description }</li>

class BookList extends Component {
    renderList() {
        const click_handler = this.props.selectBook;
        return this.props.books.map((book) => {
            return (
                <BookInfo
                    key={ book.key }
                    book={ book }
                    click_handler={ click_handler }
                />
            );
        });
    }

    render() {
        return (
            <div className="list-group-container">
                <ul className="list-group col-sm-4">
                { this.renderList() }
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    // Set props of BookList.
    // Return value is props of the class.
    return {
        books: state.books
    };
}

function mapDispatchToProps(dispatch) {
    // Results of mapDispatchToProps ends up as prop of BookList.
    // Pass result of selectBook to reducers.
    return bindActionCreators({ selectBook: selectBook }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);