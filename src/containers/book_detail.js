/**
 * Created by Michael on 16/05/16.
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
    render() {
        return (
          <div>
              <p className="topic-title">Selected Book</p>
          </div>
        );
    }
}

function mapStateToProps(state) {
    return {
      book: state.activeBook;
    };
}

export default connect(mapStateToProps)(BookDetail);