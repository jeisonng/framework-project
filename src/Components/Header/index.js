import React, { Component } from 'react';
import { TiCogOutline } from "react-icons/ti";
import { colors } from '../../Commom/colors';
import * as routes from '../../Commom/routes';

export default class Header extends Component {
     componentDidMount(){
         console.log(this.props)
     }
    path(){
        if(window.location.pathname === routes.ALBUNS) return "Álbuns"
        if(window.location.pathname === routes.POSTS) return "Postagens"
        if(window.location.pathname === routes.GALLERY) return "Galeria"
        if(window.location.pathname === routes.TODOLIST) return "To Do List"
    }
    render() {
        return (
            <div className="col-12 text-center pt-2 header-style">
                <span className="pt-3 font-header">
                    {this.path()}
                </span>
            </div>
        )
    }
}