import React from 'react';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import { useStyles } from './ChipArrayStyles';

const ChipArray = ({ chips }) => {
  const classes = useStyles();

  return (
    <Paper component='ul' className={classes.mainPaperStyle} elevation={0}>
      {chips.map((chip, index) => {
        console.log(chip);
        return (
          <li key={`${chip.text}-${index}`}>
            <Chip
              label={chip.text}
              className={classes.chipStyle}
              variant='default'
              color='primary'
            />
          </li>
        );
      })}
    </Paper>
  );
};

export default ChipArray;
