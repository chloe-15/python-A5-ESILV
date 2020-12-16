import React, { useEffect, useState } from 'react';
import '../App.css';
import axios from 'axios';
import Result from './Result';

const Model = (props) => {
  const [prediction, setPrediction] = useState(0);
  let link = 'http://localhost:5000/' + props.model;
  useEffect(() => {
    axios
      .post(link, props.states)
      .then(function (res) {
        setPrediction(Number(res.data.result));
      })
      .catch(function (err) {
        console.log(err);
      });
  }, []);

  console.log(props.states);
  return <Result prediction={prediction} accuracy={props.accuracy} />;
};

export default Model;
