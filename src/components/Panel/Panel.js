import React, { Fragment } from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import useTheme from '@material-ui/core/styles/useTheme';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useStyles } from './PanelStyles';

const Panel = ({ title, content }) => {
  const classes = useStyles();
  const theme = useTheme();

  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Fragment>
      <Accordion className={classes.accordionStyle}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.titleTypographyStyle}>
            {title}
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.panelDetailsStyle}>
          <Typography
            paragraph
            className={classes.contentTypographyStyle}
            variant={matchesMD ? 'body1' : 'h6'}
          >
            {content}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Fragment>
  );
};

export default Panel;
