import React from 'react';
import FacebookLogin from 'react-facebook-login';

function FacebookLoginComponent() {
  const handleFacebookResponse = (response) => {
    console.log(response); // This response object contains user info and access token
    if (response.accessToken) {
      // Successfully logged in
      // You can now send this response to your backend to authenticate and create a session
    } else {
      // Failed to log in
      console.log("Facebook login failed");
    }
  };

  return (
    <div>
      <h1>My App with Facebook Login</h1>
      <FacebookLogin
        appId="1737342310431317"
        autoLoad={false}
        fields="name,email,picture"
        callback={handleFacebookResponse}
        icon="fa-facebook"
        textButton="Login with Facebook"
      />
    </div>
  );
}

export default FacebookLoginComponent;
