import React, { Component } from 'react';
import Gallery from 'react-grid-gallery';
import Header from '../../Components/Header';
import { IoMdArrowRoundBack } from "react-icons/io";
import { colors } from '../../Commom/colors';


export default class GalleryApp extends Component {
    state = { photos: [] }
    componentDidMount() {
        const { state } = this.props.location
        if (!state.photos || state.photos.lenght === 0) window.location.back()
        this.setState({ photos: state.photos })
    }
    render() {
        return (
            <div className="row min-div">
                <Header />
                    <div className="offset-1 mt-5 pt-4 clickable" onClick={()=>{window.history.back()}}>
                        <span className="back-Buttom">
                            <IoMdArrowRoundBack size={36} color={colors.gray} />
                            Voltar
                        </span>
                    </div>
                <div className="pt-3 offset-1">
                    <Gallery
                        enableImageSelection={false}
                        images={this.state.photos} />
                <div className="col-12 mt-5"/>
                </div>
            </div>
        )
    }
}