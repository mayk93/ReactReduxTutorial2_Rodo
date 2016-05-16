/**
 * Created by Michael on 16/05/16.
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';

import BookInfo from '../components/book_info'

class BookDetail extends Component {
    click_handler() {
        document.getElementsByClassName("selected_book").style.backgroundColor = "gold";
    }

    render() {
        if (this.props.book != null)  {
            return (
              <div className="selected_book">
                  <h3>Selected Book</h3>
                    <BookInfo
                        key={ this.props.book.key }
                        book={ this.props.book }
                        click_handler={ this.click_handler }
                    />
              </div>
            );
        }  else  {
            return (
              <div className="selected_book">
                  <h3>No book selected</h3>
              </div>
            );
        }
    }
}

function mapStateToProps(state) {
    return {
      book: state.activeBook
    };
}

export default connect(mapStateToProps)(BookDetail);