import React, { Component } from "react";
import axios from "axios";
import VideoCard from "../VideoCard/VideoCard";
import classes from "./Homepage.module.css";
import VideoPage from "../VideoPage/VideoPage";

class Homepage extends Component {
  state = {
    videoList: [],
    currentId: 1,
    videoData: {},
  };

  componentDidMount() {
    axios
      .get("https://5d76bf96515d1a0014085cf9.mockapi.io/playlist")
      .then((response) => {
        this.setState({ videoList: [...response.data] });
      })
      .catch((err) => {
        console.log("Call Failed!!");
      });
  }

  handleActive = (id) => {
    this.setState({
      currentId: id,
    });
  };

  render() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    const playlistdata = this.state.videoList.map((item) => {
      return (
        <div
          key={item.id}
          className={`${
            item.id === this.state.currentId ? classes.Active : null
          } ${classes.VCard}`}
          onClick={() => this.handleActive(item.id)}
        >
          <VideoCard
            thumbnail={item.thumbnail}
            title={item.title}
            currentId={item.id}
            handleActive={this.handleActive}
          />
        </div>
      );
    });

    return (
      <div className={classes.MainContainer}>
        <h1 className={classes.MainHeading}>The Video Player</h1>
        <div className={classes.VideoComponent}>
          <div className={classes.VideoCard}>
            <VideoPage currentId={this.state.currentId} />
          </div>

          <div className={classes.PlayList}>{playlistdata}</div>
        </div>
      </div>
    );
  }
}

export default Homepage;
