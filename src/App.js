import React, { Component } from 'react';
import { database } from './firebase';
import Auth from './containers/Auth';
import Authenticate from './components/Authenticate';
import TopNav from './components/TopNav';
import './App.css';

class Database extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null
    };
  }
  componentDidMount() {
    database.ref(this.props.ref).on('value', snapshot => {
      this.setState(() => ({
        data: snapshot.val()
      }));
    });
  }

  update = () => {
    database.ref(this.props.ref).set(this.state.data + 1);
  };
  render() {
    const { data } = this.state;
    if (this.props.children) {
      return this.props.children({
        data,
        update: this.update
      });
    } else if (this.props.render) {
      return this.props.render({
        data,
        update: this.update
      });
    }
    return <div>You did not provide a render or children prop.</div>;
  }
}

class App extends Component {
  render() {
    return (
      <Auth>
        {({ user, handleSignOut, handleSignIn, handleSignUp }) => (
          <div>
            <TopNav>
              <Authenticate
                user={user}
                onSignOut={handleSignOut}
                onSignIn={handleSignIn}
                onSignUp={handleSignUp}
              />
            </TopNav>
            {user && (
              <Database ref="/counter">
                {({ data: counter, update }) => (
                  <div>
                    {JSON.stringify(counter, null, 2)}
                    <button onClick={update}>click me</button>
                  </div>
                )}
              </Database>
            )}
          </div>
        )}
      </Auth>
    );
  }
}

export default App;
