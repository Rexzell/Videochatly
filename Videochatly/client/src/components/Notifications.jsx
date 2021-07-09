import React, { useContext } from "react";
import {Button} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

import {SocketContext} from "../SocketContext";
import { flexbox } from "@material-ui/system";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex", 
    justifyContent: "center",
    
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      textAlign: "center",
      width: '88%',
      marginLeft: "auto",
      marginRight: "auto",
      marginBottom: "20px",
    },
  },

  text:{
    fontSize: "20px",
    marginTop: "5px",

    [theme.breakpoints.down('xs')]: {
      marginBottom: "20px",
      marginTop: "0px",
    },
  },

  btn:{
    marginLeft: "10px",

    [theme.breakpoints.down('xs')]: {
      marginLeft: "0px",
    },
  }
}));

const Notifications = () => {
  const {answerCall, call, callAccepted} = useContext(SocketContext);
  const classes = useStyles();

  return(
    <>
      {call.isReceivedCall && !callAccepted && (
        <div className={classes.container}>
          <p className={classes.text}>{call.name} is calling:</p>
          <Button className={classes.btn} variant="contained" color="primary" onClick={answerCall}>
            Answer Call
          </Button>
        </div>
      )}
    </>
  );
}

export default Notifications;