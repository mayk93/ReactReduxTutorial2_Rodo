/**
 * Created by Michael on 15/05/16.
 */

import React from 'react';

export default function (props) {
    return (
        <li id={ props.book.title } onClick={() => props.click_handler(props.book)} key={ props.book.title } className="list-group-item">
            <div className="important">
                <p className="topic-title">{ props.book.title }</p>
            </div>
            <div className="section">
                <p className="attention">{ props.book.book_description }</p>
            </div>
        </li>
    );
}