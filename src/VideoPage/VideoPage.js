import React from "react";
import axios from "axios";
import classes from "../VideoPage/VideoPage.module.css";

class VideoPage extends React.Component {
  state = {
    videoData: {},
  };

  componentDidMount() {
    axios
      .get(`https://5d76bf96515d1a0014085cf9.mockapi.io/video/1`)
      .then((response) => {
        this.setState({ videoData: { ...response.data } });
      })
      .catch((err) => {
        console.log("error in Default video");
      });
  }

  componentDidUpdate(pP, pS, sS) {
    console.log(pP, pS, sS);
    const videoId = this.props.currentId;
    if (videoId !== this.state.videoData.id) {
      axios
        .get(`https://5d76bf96515d1a0014085cf9.mockapi.io/video/${videoId}`)
        .then((response) => {
          this.setState({ videoData: { ...response.data } });
        })
        .catch((err) => {
          // console.log("Call Failed!!");
        });
    }
  }

  render() {
    return (
      <div>
        <iframe
          className={classes.VideoPlayer}
          src={`https://player.vimeo.com/video/${this.state.videoData.vimeoId}`}
          frameBorder="0"
        ></iframe>
        <div className={classes.Response}>
          <p className={classes.Views}>{this.state.videoData.views} views</p>
          <div className={classes.IconsDiv}>
            <i
              className={[
                "far",
                "fa-heart",
                this.state.videoData.isLiked === "true" ||
                this.state.videoData.isLiked === true
                  ? classes.Yellow
                  : classes.Heart,
              ].join(" ")}
            ></i>
            <i
              className="far fa-comment-alt"
              aria-hidden="true"
              style={{
                fontSize: "24px",
                color: "rgba(0, 0, 0, 0.7)",
                marginRight: "20px",
                marginTop: "16px",
              }}
            ></i>
            <i
              className={[
                "far",
                "fa-bookmark",
                this.state.videoData.isSaved === "true" ||
                this.state.videoData.isSaved === true
                  ? classes.Yellow
                  : classes.Heart,
              ].join(" ")}
              aria-hidden="true"
            ></i>
          </div>
        </div>
        <h3 className={classes.VideoTitle}>{this.state.videoData.title}</h3>
        <p className={classes.VideoDescription}>
          {this.state.videoData.description}
        </p>
      </div>
    );
  }
}

export default VideoPage;
