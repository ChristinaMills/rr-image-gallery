import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './app.css';
import Images from '../image/Images';
import Albums from '../album/Albums';
import { loadAlbums } from '../image/actions';
import Error from './Error';
import { connect } from 'react-redux';


class App extends Component {
  



  render() {
    const { error, loading } = this.props;
    
    return (

      <Router>
        
        <main id="main" role="main">
          <div id="loader">
            { error && <Error error={error}/>}
          </div>
          <div>Loading status is: {loading ? 'loading!!!!' : 'not loading!' }</div>
          {/* <div><Albums/></div> */}
          <Switch>
            <Route exact path="/" component={Albums}/>
            <Route path="/albums/:id" component={Images}/>
            <Redirect to="/"/>
          </Switch>
        </main>
     
      </Router>
    
      
    );
  }
}

function mapStateToProps(state) {
  return {
    loading: state.loading,
    error: state.error
  };
}

export default connect(
  mapStateToProps, { loadAlbums }
)(App);