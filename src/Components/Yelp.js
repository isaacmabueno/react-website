import React from 'react'
import axios from 'axios'

const config = {
    headers: {'Authorization': 'Juyt4HDbaXyPRnY6Y1hZXTuC85vgkwGhD2tiDSIKZ1B8bJ6xkqiZZIq2WiD0SMFF95MhAcoQv-J7kikK3MZZNHh2zfxNBDANcjENuPtmPSGNr0NBykA-tk1sWNGKW3Yx'},
    params: {
      term: 'tacos',
      location: 'main 123st'
    }
  };
export default class Yelp extends React.Component {
   

    state = {
        reviews: [],
    };

    componentDidMount() {
        axios.get('https://api.yelp.com/v3/businesses/search', config)
        .then(res=> {
            console.log(res);
            // this.setState({ reviews :res.data });
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