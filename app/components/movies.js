import React, {Component} from 'react';
import axios from 'axios';

export default class Movies extends Component {

state = {
  post: [],
  loading: true,
  error:null
}

  componentDidMount() {
    axios.get('https://api.themoviedb.org/3/discover/movie?api_key=2cdce3bbe05c745f380ca0af5874a2d8&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1')
      .then(res =>{
        this.setState({
          post: res.data.results,
          loading: false,
          error: null
        })
      }).catch(err =>{
      this.setState({
        loding: false,
        error: err
      });
    })
  }
  renderLoding(){
    return (
      <div>loading...</div>
    );
  }


  renderError(){
    return(
      <div>Something went wrong {this.stste.error.message}</div>
    )
  }
  renderPosts(){
    const {error, post} = this.state;
    if(error){
  return this.renderError;
    }

    return (
      <div className="mainBox">
        {post.map(post => (
          <div key={post.id} className="card">
            <img className="img1" src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${post.poster_path}`} alt="#"/>
            <h3>{post.title}</h3>
            <div className="cardForText">
              <div className="cardForTextSmall1">
                <h4>language: {post.original_language}</h4>
              </div>
              <div className="cardForTextSmall2">
                <h4 className="left1">Rating: <span className="red">{post.vote_average}</span></h4>
              </div>
              <p>{post.overview}</p>
            </div>
          </div>
        )
      )}``
      </div>
    );
  }
  render() {
    const {loding} = this.state;

    return (
      <div>
        <h1>Movies</h1>
        {loding ? this.renderLoding():this.renderPosts()}
        <p>.</p>
      </div>
    );
  }
};
