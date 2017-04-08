import React, { Component } from 'react';
import axios from 'axios';

import SiteHead from '../components/SiteHead';

// Import configs
import { YOUTUBE_ENDPOINT } from '../app_config';

// Import styled components
import {
  AppWrapper,
  Container,
  TitleKatha,
  AppTitle,
  Logo,
  TagLine,
  Description
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
        <Logo src="/static/images/logo.svg" alt="Logo" />
        <SiteHead />
        <Container className="row middle-xs center-xs">
          <div className="col-xs-7">
            <div className="box">
              <AppTitle>Leafy<TitleKatha>කථා</TitleKatha></AppTitle>
              <TagLine>
                A podcast created <strong>by</strong> developers <strong>for</strong>
                developers.
              </TagLine>
              <Description>
                We believe a very powerful community can do almost anything. Sri Lanka has
                incredible people with great capabilities. But for several reasons, only a few of
                these people reach their full potential and do something for the country.
                Some leave their country. Many won&apos;t get what they need to grow themselves.
                We want to find them, build a strong community and challenge the world together!
                The journey will be tough. If you think you can take it, come join us!
              </Description>
            </div>
          </div>
        </Container>
      </AppWrapper>
    );
  }
}

export default App;
