import React from 'react'
import axios from 'axios'

export default class Yelp extends React.Component {
    state = {
        reviews: [],
    };

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts').then(res=> {
            console.log(res);
            this.setState({ reviews :res.data });
        });
    }
    render() {
        return(
            <div className="yelp-reviews">
                <ul>
                    {this.state.reviews.map(review => 
                        <div className="card text-center">
                            <div className="card-body">
                                <h5 className="card-title">{review.title}</h5>
                                <p className="card-text">{review.title}</p>
                                <p className="card-text"><small class="text-muted">{review.id}</small></p>
                            </div>
                        </div>
                    )}
                </ul>
            </div>
        )
    }
}

