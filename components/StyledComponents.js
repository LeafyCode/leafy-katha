import styled from 'styled-components';

export const AppWrapper = styled.div`
  overflow: hidden;
`;

export const Container = styled.div`
  min-height: 100vh;
  text-align: center;
  padding-top: 115px;
`;

export const TitleKatha = styled.span`
  font-family: 'Ayanna', serif;
  color: #2D3047;
  font-size: 2em;
`;

export const AppTitle = styled.h1`
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 100;
  font-style: italic;
  color: #E84855;
`;

export const Logo = styled.img`
  width: 70px;
  border: 7px solid #fff;
  position: fixed;
  margin: 15px;
  box-shadow: 0 2px 10px #ddd;
  background-color: #F2F6D0;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
`;

export const TagLine = styled.p`
  margin-top: -30px;
`;

export const Description = styled.p`
  margin-top: 24px;
  font-size: 0.9rem;
  line-height: 1rem;
`;

export const VideoItem = styled.div`
  a{
    text-decoration: none;
  }

  img{
    width: 100%;
    border: 4px solid #FFBA49;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
    max-width: 320px;
  }

  .video-description{
    color: #5c5f79;
    font-size: 0.9rem;
    margin-top: 3px;
    padding: 2px;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
  }

  &:hover{
    img{
      border: 4px solid #FFFFFF;
      box-shadow: 0 2px 10px #ddd;
    }

    .video-description{
      color: #2D3047;
    }
  }
`;

export const SocialProfiles = styled.div`
  position: fixed;
  margin-left: 105px;
  margin-top: 15px;
  text-decoration: none;

  img{
    width: 15px;
    background-color: #E7E247;
    border: 4px solid #ffffff;
    padding: 10px;
    float: left;
    margin-right: 5px;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;

    &:hover{
      box-shadow: 0 2px 10px #ddd;
    }
  }
`;

export const Footer = styled.footer`
  font-size: 0.7rem;
  color: #404040;

  p{
    display: inline-block;
  }

  a{
    color: #E84855;
  }

  img{
    width: 12px;
    margin-left: 6px;
    margin-bottom: -3px;
  }
`;
