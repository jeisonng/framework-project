import React, { Component } from 'react';
import { Loading } from '../Loading';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazyload';
import { requestApi } from '../../Commom/api';




export default class AlbunsComponent extends Component {
    state = {
        photos: [],
        loading: false
    }
    componentDidMount = async () => {
        this.setState({ loading: true }, async () => {
            try {
                const data = await requestApi(`/photos?albumId=${this.props.album && this.props.album.id}`)

                const photos = data.map(photo => {
                    const item = {
                        src: photo.url,
                        thumbnail: photo.thumbnailUrl,
                        thumbnailWidth: 150,
                        thumbnailHeight: 150,
                    }
                    return item
                })

                this.setState({ photos }, () => {
                    this.setState({ loading: false })
                })
            } catch (error) {
                this.setState({ loading: false })
                console.log(error)
            }
        })
    }
    render() {
        const { photos, loading } = this.state
        return (
            <Link
                className="col-md-2 col-sm-4"
                to={{
                    pathname: '/gallery',
                    state: {
                        photos,
                    },
                }}>
                <div className="mb-1 clickable">
                    <LazyLoad height={100}>
                        {loading && <Loading />}
                        <img className="col-12 p-0" src={photos[0] && photos[0].thumbnail} />
                    </LazyLoad>

                    <span className="text-card pl-3 pl-sm-0">{this.props.album && this.props.album.title}</span>
                </div>
            </Link>
        )
    }
}