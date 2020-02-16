import React, { Component } from 'react';
import { List } from '../../Components/Lists';
import { FullLoading } from '../../Components/Loading';
import { requestApi } from '../../Commom/api'


export default class Posts extends Component {

    state = {
        posts: [],
        loading: false
    }

    componentDidMount = async () => {
        this.setState({ loading: true }, async () => {
            try {
                const data = await requestApi("/posts")
                this.setState({ posts: data, loading: false })
            } catch (error) {
                this.setState({ loading: false })
                console.log(error)
            }
        })

    }

    render() {
        const { posts, loading } = this.state
        return loading ? (<FullLoading />) : (
            <div className="col-12 pt-1 mt-5">
                {
                    posts.map(item => {
                        return <List key={item.id} title={item.title} text={item.body} ></List>
                    })
                }
            </div>
        )
    }
}