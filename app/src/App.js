import React, { useState } from 'react';
import './App.css';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import { Tab, Grid, FormControlLabel, Switch, Box } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import logo from './assets/images/logoesilv.png';
import * as Constants from './constants/consts';
import SwipeableViews from 'react-swipeable-views';
import NumberBox from './components/NumberBox';
//ml models
import Model from './components/Model';

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

function App() {
  // form values
  const [state, setState] = useState({
    administrative: 0,
    administrativeDuration: 0,
    informational: 0,
    informationalDuration: 0,
    productRelated: 0,
    productRelatedDuration: 0,
    bounceRates: 0,
    exitRates: 0,
    pageValues: 0,
    region: 0,
    os: 0,
    browser: 0,
    trafficType: 0,
    specialDay: false,
    alreadyVisit: false,
    weekend: false,
  });

  // tab panel
  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role='tabpanel'
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === 0 && <Model states={state} model='logisticRegression' />}
        {value === 1 && <Model states={state} model='naiveBayes' />}
        {value === 2 && <Model states={state} model='randomForest' />}
        {value === 3 && <Model states={state} model='extraTree' />}
        {value === 4 && <Model states={state} model='neuralNetwork' />}
      </div>
    );
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };

  function a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
  }

  // for tab
  const classesMainBar = Constants.mainBar();
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const handleChangeField = (event) => {
    setState({ ...state, [event.target.name]: Number(event.target.value) });
  };
  const handleChangeSwitch = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <div className='App'>
      <AppBar position='static'>
        <Toolbar style={{ backgroundColor: 'rgb(207, 16, 83)' }}>
          <img src={logo} style={{ height: 60 }} />

          <Typography
            variant='h6'
            className={classesMainBar.title}
            style={{ fontWeight: 'bold' }}
          >
            PYTHON PROJECT
          </Typography>
          <Typography>By Chloé </Typography>
        </Toolbar>
      </AppBar>

      <div
        className={classes.root}
        style={{
          marginLeft: 150,
          marginRight: 150,
        }}
      >
        <Typography
          variant='h6'
          className={classesMainBar.title}
          style={{ fontWeight: 'bold', margin: 50 }}
        >
          REAL TIME ONLINE SHOPPER INTENTION PREDICTION
        </Typography>
        <div style={{ padding: 40 }}>
          <Box
            boxShadow={15}
            bgcolor='background.paper'
            m={1}
            p={1}
            style={{
              width: '8rem',
              height: '5rem',
              width: '100%',
              height: '80%',
            }}
          >
            <Grid container spacing={3}>
              <Grid item xs={3}>
                <NumberBox
                  label='Administrative'
                  helper='Number of administrative pages the user visisted'
                  name='administrative'
                  onChangeProp={handleChangeField}
                />
              </Grid>
              <Grid item xs={3}>
                <NumberBox
                  label='Administrative Duration'
                  helper='Amount of time spent on administrative pages'
                  name='administrativeDuration'
                  onChangeProp={handleChangeField}
                />
              </Grid>
              <Grid item xs={3}>
                <NumberBox
                  label='Informational'
                  helper='Number of informational pages the user visisted'
                  name='informational'
                  onChangeProp={handleChangeField}
                />
              </Grid>
              <Grid item xs={3}>
                <NumberBox
                  label='Informational Duration'
                  helper='Amount of time spent on informational pages'
                  name='informationalDuration'
                  onChangeProp={handleChangeField}
                />
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item xs={3}>
                <NumberBox
                  label='Product Related'
                  helper='Number of product related pages the user visisted'
                  name='productRelated'
                  onChangeProp={handleChangeField}
                />
              </Grid>
              <Grid item xs={3}>
                <NumberBox
                  label='Product Related Duration'
                  helper='Amount of time spent on product related pages'
                  name='productRelatedDuration'
                  onChangeProp={handleChangeField}
                />
              </Grid>
              <Grid item xs={3}>
                <NumberBox
                  label='Bounce Rates'
                  helper='Percentage of visitors who enter the site from that page and then left'
                  min={0}
                  max={100}
                  name='bounceRates'
                  onChangeProp={handleChangeField}
                />
              </Grid>
              <Grid item xs={3}>
                <NumberBox
                  label='Exit Rates'
                  helper='Percentage of visitors who left the site from a this page'
                  min={0}
                  max={100}
                  name='exitRates'
                  onChangeProp={handleChangeField}
                />
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item xs={3}>
                <NumberBox
                  label='Page Values'
                  helper='Average value for a web page that a user visited before completing a transaction'
                  name='pageValues'
                  onChangeProp={handleChangeField}
                />
              </Grid>
              <Grid item xs={3}>
                <NumberBox
                  label='Region'
                  helper='Region number of user at time of transaction'
                  min={1}
                  max={9}
                  name='region'
                  onChangeProp={handleChangeField}
                />
              </Grid>
              <Grid item xs={3}>
                <NumberBox
                  label='Operating Systems'
                  helper='Operating Systems used'
                  min={1}
                  max={5}
                  name='os'
                  onChangeProp={handleChangeField}
                />
              </Grid>
              <Grid item xs={3}>
                <NumberBox
                  label='Browser'
                  helper='Browser used'
                  min={1}
                  max={13}
                  name='browser'
                  onChangeProp={handleChangeField}
                />
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item xs={3}>
                <NumberBox
                  label='Traffic Type'
                  helper='Number of traffic type'
                  min={1}
                  max={20}
                  name='trafficType'
                  onChangeProp={handleChangeField}
                />
              </Grid>
              <Grid item xs={3}>
                <FormControlLabel
                  value='start'
                  control={
                    <Switch
                      color='primary'
                      onChange={handleChangeSwitch}
                      name='specifalDay'
                      checked={state.specifalDay}
                    />
                  }
                  label='Was the transaction made on a special day'
                  labelPlacement='start'
                />
              </Grid>
              <Grid item xs={3}>
                <FormControlLabel
                  value='start'
                  control={
                    <Switch
                      color='primary'
                      onChange={handleChangeSwitch}
                      name='alreadyVisit'
                      checked={state.alreadyVisit}
                    />
                  }
                  label='Did the user already visit this page'
                  labelPlacement='start'
                  onChangeProp={handleChangeSwitch}
                />
              </Grid>
              <Grid item xs={3}>
                <FormControlLabel
                  value='start'
                  control={
                    <Switch
                      color='primary'
                      onChange={handleChangeSwitch}
                      name='weekend'
                      checked={state.weekend}
                    />
                  }
                  label='Was the transaction made on a weekend'
                  labelPlacement='start'
                  onChangeProp={handleChangeSwitch}
                />
              </Grid>
            </Grid>
          </Box>
        </div>
      </div>

      <div style={{ marginTop: 100 }}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor='primary'
          textColor='primary'
          variant='fullWidth'
          aria-label='full width tabs example'
          style={{ margin: 150, marginTop: 50 }}
        >
          <Tab label='Logistic Regression' {...a11yProps(0)} />
          <Tab label='Naive Bayes' {...a11yProps(1)} />
          <Tab label='Random Forest' {...a11yProps(2)} />
          <Tab label='Extra Tree' {...a11yProps(3)} />
          <Tab label='Neural Networks' {...a11yProps(4)} />
        </Tabs>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}></TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}></TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}></TabPanel>
          <TabPanel value={value} index={3} dir={theme.direction}></TabPanel>
          <TabPanel value={value} index={4} dir={theme.direction}></TabPanel>
        </SwipeableViews>
      </div>
    </div>
  );
}

export default App;

/*


*/
