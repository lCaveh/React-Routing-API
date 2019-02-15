import React, { Component } from 'react';
import {ApiKey} from "../ApiKey"

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false
        }
    }

    componentDidMount() {
        fetch('https://api.unsplash.com/photos/?client_id='+ApiKey.id)
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    items: json
                })
            });
    }
    render() {
        var { isLoaded, items } = this.state;
        if (!isLoaded) {
            return <div>Loading...</div>
        } else {
            return (
                <ul className="uk-container">
                    {items.map(item => (
                        <li key={item.id}>
                            <div className="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin" data-uk-grid>
                                <div className="uk-card-media-left uk-cover-container">
                                    <img src={item.urls.thumb} alt="" data-uk-cover />
                                    <canvas width="200" height="400"></canvas>
                                </div>
                                <div>
                                    <div className="uk-card-body">
                                        <h3 className="uk-card-title">ID: {item.id}</h3>
                                        <p>{item.description}</p>
                                        <p>Create at: {item.created_at}</p>
                                    </div>
                                </div>
                            </div>


                        </li>
                    ))}
                </ul>
            )

        }
    }
}

export default Home;
