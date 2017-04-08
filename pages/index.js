import React, { Component } from 'react';
import axios from 'axios';

import SiteHead from '../components/SiteHead';

// Import configs
import { YOUTUBE_ENDPOINT } from '../app_config';

// Import styled components
import {
  AppWrapper,
  Container
} from '../components/StyledComponents';

class App extends Component {
  static async getInitialProps() {
    let videos = [];

    await axios.get(YOUTUBE_ENDPOINT)
      .then((response) => {
        const { items } = response.data;

        videos = items;
      });

    return {
      videos
    };
  }

  constructor(props) {
    super(props);

    this.state = {
      videos: props.videos
    };
  }

  render() {
    return (
      <AppWrapper>
        <SiteHead />
        <Container className="row middle-xs center-xs">
          <div className="col-xs-6">
            <div className="box">
              <h1>LeafyKatha</h1>
            </div>
          </div>
        </Container>
      </AppWrapper>
    );
  }
}

export default App;
