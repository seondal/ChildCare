import React, { useState, useContext, useEffect } from "react";
import Video from "./Video";
import { Grid } from "@material-ui/core";
import { AuthContext } from "../../context/auth";
import { Card } from "@material-ui/core";
import ButtonBar from "./ButtonBar";
import VideoDragDrop from "../../components/VideoDragDrop";
import {makeStyles} from "@material-ui/core"

const useStyles = makeStyles((theme) => ({

  dragdrop: {
    padding: "20px",
    marginBottom: "50px",
  },

}));
export default function Lectures() {
  const classes = useStyles();
  const { user } = useContext(AuthContext);
  const [videoFiles, setVideoFiles] = useState([]);
  const [step, setStep] = useState("1");
  const [uploaded, setUploaded] = useState(false); 

  const videoList = [
    "https://youtu.be/yDKPXHgImzc",
    "https://youtu.be/sVDT9rcdarM",
    "https://youtu.be/aBWGQKtD-uE",
    "https://youtu.be/ya80fqxoosQ",
    "https://youtu.be/tD9rV9fB8ew",
    "https://youtu.be/_Sn8yyogFjs",
    "https://youtu.be/-8mbQGdxC4U",
  ];

  const videoName = [
    "Your child's stage of communication",
    "Let your child lead",
    "Follow your child's lead",
    "Take turns to keep the interaction going",
    "Build interaction (SPARK)",
    "Add language",
    "Let's  play",
  ];
  function handleChange(newValue) {
    setStep(newValue);
  }

  function handleVideoUpload(videoData) {
    console.log("here now", videoData);
    setVideoFiles(videoData);
    setUploaded(true);
  }

  useEffect(() => {
    if (videoFiles.length != 0) {
      console.log(videoFiles[0].preview);
    }
  }, [videoFiles]);


  return (
  
    
    <Grid container direction="row" xs={12}>
      <Card style={{ width: "100%", height: "800px", overflowY: "scroll" }}>
        <ButtonBar step={step} onChange={handleChange} />
        <Video
          step={step}
          title={'"' + videoName[step - 1] + '"'}
          url={videoList[step - 1]}
        />
        <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        xs={12}
        className={classes.dragdrop}
      >
        {uploaded===false? <VideoDragDrop uploadCallBack={handleVideoUpload} /> : <p>Successfully Uploaded!</p>}
      </Grid>
      </Card>
    </Grid>
  );
}
