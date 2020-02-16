import React, { Component } from 'react';
import { FullLoading } from '../../Components/Loading';
import AlbunsComponent from '../../Components/Albuns';
import { requestApi } from '../../Commom/api';

export default class Albuns extends Component {
    state = {
        albuns: [],
        loading: false
    }
    componentDidMount = async () => {
        this.setState({ loading: true }, async () => {
            try {
                const data = await requestApi("/albums")
                this.setState({ albuns: data }, () => {
                    this.setState({ loading: false })
                })
            } catch (error) {
                console.log(error)
                this.setState({ loading: false })
            }
        })

    }

    render() {
        const { albuns, loading } = this.state
        return loading ? (<FullLoading />) : (
            <>
                <div className="col-12 pt-1 mt-5">
                    <div className="col-10 offset-1">
                        <div className="row">
                            {albuns.map(item => {
                                return <AlbunsComponent album={item} />
                            })}
                        </div>
                    </div>
                </div>
            </>
        )
    }
}