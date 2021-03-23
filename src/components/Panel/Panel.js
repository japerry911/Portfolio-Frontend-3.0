import React, { Fragment } from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useStyles } from './PanelStyles';

const Panel = ({ title, content }) => {
  const classes = useStyles();

  return (
    <Fragment>
      <Accordion className={classes.accordionStyle}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.titleTypographyStyle}>
            {title}
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.panelDetailsStyle}>
          <Typography paragraph className={classes.contentTypographyStyle}>
            {content}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Fragment>
  );
};

export default Panel;
