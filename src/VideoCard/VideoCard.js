import React from "react";
import { Link } from "react-router-dom";

import classes from "./VideoCard.module.css";

const VideoCard = (props) => {
  console.log(props);
  return (
    <Link
      className={classes.VideoCardLink}
      to={`/video/watch/${props.currentId}`}
    >
      <div className={classes.VideoCard}>
        <img
          className={classes.Thumbnail}
          src={props.thumbnail}
          alt="Video Thumbnail"
        />
        <h3 className={classes.Title}>{props.title}</h3>
      </div>
    </Link>
  );
};

export default VideoCard;
