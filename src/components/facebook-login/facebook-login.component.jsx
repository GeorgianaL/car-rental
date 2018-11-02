import React from 'react';
import FacebookLogin from 'react-facebook-login';
import facebookIcon from '../../../public/assets/facebook-app-logo.png';

class Facebook extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      'isLoggedIn': false,
      'userID': '',
      'name': '',
      'email': '',
      'picture': '',
    };

    this.responseFacebook = this.responseFacebook.bind(this);
    this.componentClicked = this.componentClicked.bind(this);
  }

  componentClicked() {
    console.log('clicked');
  }

  responseFacebook(response) {
    console.log(response);
    this.setState({
      'isLoggedIn': true,
      'userID': response.userID,
      'name': response.name,
      'email': response.email,
      'picture': response.picture,
    });
  }

  render() {
    let fbContent;

    if (this.state.isLoggedIn) {
      fbContent = (
        <div>
          <img src={this.state.picture.data.url} alt={this.state.name} />
          <h2>Welcome {this.state.name}</h2>
        </div>
      );
    } else {
      fbContent = (
        <FacebookLogin
          className="fb-login-button"
          appId="279858939324534"
          autoLoad={true}
          fields="name,email,picture"
          onClick={this.componentClicked}
          callback={this.responseFacebook}
        />
      )
    }

    return (
      <div>{fbContent}</div>
    )
  }
}

export default Facebook;
