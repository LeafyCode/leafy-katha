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
  Description,
  VideoItem,
  SocialProfiles,
  Footer
} from '../components/StyledComponents';

class App extends Component {
  static async getInitialProps() {
    let videos = [];

    const params = {
      part: 'snippet,id',
      key: 'AIzaSyCbP-krSbnuVvVmc-0Ka7rf7n-Myv5pIkY',
      q: '',
      type: 'video',
      channelId: 'UCMb-c2UdxjqkQu82aNo1fhw'
    };

    await axios.get(YOUTUBE_ENDPOINT, { params })
      .then((response) => {
        const { items } = response.data;

        videos = items;
      }).catch(() => ({
        videos
      }));

    return {
      videos
    };
  }

  constructor(props) {
    super(props);

    this.videosList = this.videosList.bind(this);
  }

  videosList() {
    const { videos } = this.props;

    return videos.map(video => (
      <VideoItem key={video.id.videoId} className="col-xs-10 col-sm-6 col-lg-4">
        <a
          href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div >
            <img src={video.snippet.thumbnails.medium.url} alt="" />
            <p className="video-description">{video.snippet.title}</p>
          </div>
        </a>
      </VideoItem>
      ));
  }

  render() {
    return (
      <AppWrapper>
        <Logo src="/static/images/logo.svg" alt="Logo" />
        <SocialProfiles>
          <a
            href="https://www.facebook.com/LeafyKatha/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/static/images/facebook.svg" alt="Facebook" />
          </a>
          <a
            href="https://twitter.com/LeafyKatha"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/static/images/twitter.svg" alt="Twitter" />
          </a>
          <a
            href="https://www.youtube.com/channel/UCMb-c2UdxjqkQu82aNo1fhw"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/static/images/youtube.svg" alt="YouTube" />
          </a>
        </SocialProfiles>

        <SiteHead />
        <Container className="row middle-xs center-xs">
          <div className="col-xs-11 col-sm-7 col-md-7">
            <div className="box">
              <AppTitle>Leafy<TitleKatha>කථා</TitleKatha></AppTitle>
              <TagLine>
                A podcast created <strong>by</strong> developers <strong>for </strong>
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

            <br />
            <br />

            <div className="row center-xs">
              {this.videosList()}
            </div>

            <br />

            <Footer>
              <p>
                <img src="/static/images/heart.svg" alt="Heart" />&nbsp;
                Created by <a
                  href="http://leafycode.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LeafyCode
                </a> for the community.
              </p>

              <p>
                &nbsp;Fonts by
                <a
                  href="http://mooniak.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  &nbsp;Mooniak
                </a>.
              Powered by NextJS and React.
              <a
                href="https://github.com/LeafyCode/leafy-katha"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/static/images/github.svg" alt="Github" />
              </a>
              </p>
            </Footer>
          </div>


        </Container>
      </AppWrapper>
    );
  }
}

export default App;
