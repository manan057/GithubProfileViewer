import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: 'manan057',
      userData: [],
      userRepos: [],
      perPage: 5
    }
  }


  render(){
    return (
      <div>
        {this.state.username}
        <hr />
        {this.props.clientId}
        <hr />
        {this.props.clientSecret}
      </div>
    )
  }
}

App.propTypes = {
  clientId: React.PropTypes.string,
  clientSecret: React.PropTypes.string
};
App.defaultProps = {
  clientId: '33fb9c1bf76ead21a91a',
  clientSecret: 'a39c1e1e1bd407274323ed491e0fb4b329d9f711'
};

export default App
