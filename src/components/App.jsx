import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Profile from './github/Profile.jsx';

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

  // Get user data from github
  getUserData() {
    $.ajax({
      url: 'https://api.github.com/users/'+this.state.username+'?client_id='+this.props.clientId+'&client_secret='+this.props.clientSecret,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({userData: data});
        console.log(data);
      }.bind(this),
      error: function(xhr, status, err){
        this.setState({username: null});
        alert(err);
      }.bind(this)
    });
  }

  componentDidMount() {
    this.getUserData();
  }

  render(){
    return (
      <div>
        <Profile userData = {this.state.userData} />
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
