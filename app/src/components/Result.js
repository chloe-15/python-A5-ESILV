import React from 'react';
import { Typography } from '@material-ui/core';
import '../App.css';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const Result = (props) => {
  const classes = useStyles();
  const prediction = props.prediction;
  let result;
  console.log('HERE ARE THE RESULTS : ', prediction);
  console.log('ACCURACY : ', props.accuracy);
  if (prediction == 0) {
    result = (
      <Typography style={{ color: 'white', paddingLeft: 30, fontSize: 30 }}>
        No
      </Typography>
    );
  } else {
    result = (
      <Typography style={{ color: 'white', paddingLeft: 30, fontSize: 30 }}>
        Yes
      </Typography>
    );
  }
  return (
    <div
      className={classes.root}
      style={{
        marginBottom: 100,
        marginLeft: 500,
        marginRight: 500,
        marginTop: 15,
      }}
    >
      <Grid container spacing={3}>
        <Grid
          item
          xs={12}
          style={{
            backgroundColor: 'rgb(207, 16, 83)',
            borderRadius: 20,
          }}
        >
          <Grid container spacing={3}>
            <Grid item xs={6} style={{ textAlign: 'left' }}>
              <Typography style={{ color: 'white', paddingLeft: 30 }}>
                The shopper has the intention of buying a product?
              </Typography>
            </Grid>
            <Grid item xs={6} style={{ textAlign: 'center' }}>
              <Typography
                style={{ color: 'white', paddingLeft: 30, fontSize: 30 }}
              >
                {result}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          style={{
            borderColor: 'rgb(207, 16, 83)',
            border: '3px solid rgb(207, 16, 83)',
            borderRadius: 20,
            marginTop: 10,
          }}
        >
          <Grid container spacing={3}>
            <Grid item xs={6} style={{ textAlign: 'left' }}>
              <Typography
                style={{ color: 'rgb(207, 16, 83)', paddingLeft: 30 }}
              >
                Accuracy
              </Typography>
            </Grid>
            <Grid item xs={6} style={{ textAlign: 'center' }}>
              <Typography
                style={{
                  color: 'rgb(207,16,83)',
                  paddingLeft: 30,
                  fontSize: 20,
                }}
              >
                {props.accuracy} %
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Result;
