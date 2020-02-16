import React, { Component } from 'react';

export const List = (props) => {
    return (
        <div className="col-md-6 col-12 mt-2 offset-md-3 text-center">
            <div className="container-posts row">
                <span className="col-12 title-post-text">
                    {props.title}
                </span>
                <span className="col-12 body-post-text">
                    {props.text}
                </span>

            </div>
        </div>
    )
}