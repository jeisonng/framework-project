import React, { Component } from 'react';
import { IoMdPhotos } from "react-icons/io";
import { FaRegListAlt } from "react-icons/fa";
import {GoArchive} from "react-icons/go"
import { colors } from '../../Commom/colors';
import * as routes from '../../Commom/routes';


export default class Nav extends Component {
    activeUrl(route) {
        const { pathname } = window.location;
        return pathname === route
    }
    render() {
        return (
            <div className="row nav-container m-0">
                <div className="col-4 p-0 col-md-12 text-center left-nav clickable" onClick={() => {
                    window.location = "/"
                }}>
                    <div className="col-12">
                        <GoArchive color={this.activeUrl(routes.POSTS) ? colors.white : colors.gray} />
                    </div>
                    <span className="col-12 p-0" style={{ color: this.activeUrl(routes.POSTS) ? colors.white : colors.gray }}>Postagens</span>
                    {this.activeUrl(routes.POSTS) && <div className="bottom-div" />}
                </div>
                <div className="col-4 col-md-12 p-0 text-center left-nav clickable" onClick={() => {
                    window.location = "/albuns"
                }}>
                    <div className="col-12">
                        <IoMdPhotos color={this.activeUrl(routes.ALBUNS) ? colors.white : colors.gray} />
                    </div>
                    <span className="col-12 p-0" style={{ color: this.activeUrl(routes.ALBUNS) ? colors.white : colors.gray }}>Álbuns</span>
                    {this.activeUrl(routes.ALBUNS) && <div className="bottom-div" />}
                </div>
                <div className="col-4 col-md-12 p-0 text-center left-nav clickable" onClick={() => {
                    window.location = "/to-do"
                }}>
                    <div className="col-12">
                        <FaRegListAlt color={this.activeUrl(routes.TODOLIST) ? colors.white : colors.gray} />
                    </div>
                    <span className="col-12 p-0" style={{ color: this.activeUrl(routes.TODOLIST) ? colors.white : colors.gray }}>To Do List</span>
                    {this.activeUrl(routes.TODOLIST) && <div className="bottom-div" />}
                </div>                
            </div>
        )
    }
}