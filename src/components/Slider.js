import React from 'react';
import { Slider } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/styles';

import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

import '../styles/Slider.css';

export default function CustomSlider(props) {

  const CustomSlider = createMuiTheme({
    overrides: {
      MuiSlider: {
        root: {
          color: "#fab131",
          height: 8
        },
        thumb: {
          height: 24,
          width: 24,
          backgroundColor: "#fff",
          borderRadius: 45,
          boxShadow: "0px 8px 15px #888888",
          marginTop: -8,
          marginLeft: -12,
          "&:focus,&:hover,&$active": {
            boxShadow: "0px 8px 15px #888888"
          }
        },
        active: {},
        valueLabel: {
          left: "calc(-50% + 14px)",
          top: -22,
          "& *": {
            background: "transparent",
            color: "#000"
          }
        },
        track: {
          height: 8,
          borderRadius: 4
        },
        rail: {
          height: 8,
          backgroundColor: '#e6e4e3',
          borderRadius: 4
        }
      }
    }
  });

  const handleChange = (event, value) => {
    props.onChange(value);
  };

  return (
    <div className="Slider">
      <div className="SliderLabel">
        <p className="SliderText">Initial deposit</p>
        <p className="SliderText">{props.value}</p>
      </div>
      <ThemeProvider theme={CustomSlider}>
        <Slider
          value={props.value}
          onChange={handleChange}
        />
      </ThemeProvider>
    </div>
  );

}