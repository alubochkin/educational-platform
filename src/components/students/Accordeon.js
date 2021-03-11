import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { fetchMethod } from '../../redux/thunkUtils';


const useStyles = makeStyles((theme) => ({
  namePage: {
    fontSize: 24,
    padding: 0,
    marginBottom: 50
  },

  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(18),
    fontWeight: 600,
    flexBasis: '90%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },

  textMaterials: {
    marginLeft: 30
  },
  titleAccardeon: { 
    background: '#fff',
    color: '#3f51b6',
  },
  expanded: {
    background: '#3f51b6',
    color: '#fff',
  }
  
}));

const Accordeon = ({index,  itemModule}) => {
  const classes = useStyles();

  const [expanded, setExpanded] = React.useState(false);
  const [data, setData] = React.useState('');

  const getSheduleItem = async (id, isExpanded) => {
    console.log(id, isExpanded)
    if (isExpanded) {
      try {
        const response = await fetchMethod({
          path: `http://localhost:3100/lesson/${id}`,
          method: 'GET',
      });
      if (!response.error) {
          setData(response.title)
          console.log('response', response)
       ;
      }
    } catch (err) {
      console.log('Err', err);
    }
    }

  }

  const handleChange = (panel, id) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
    getSheduleItem(id, isExpanded)
  };


  return (

    <Accordion 
      expanded={expanded === `panel${index}`} 
      onChange={handleChange(`panel${index}`, itemModule._id)}>
        <AccordionSummary
          className={expanded ? classes.expanded : classes.titleAccardeon }
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`panel${index}bh-content`} 
          id={`panel${index}bh-header`}
        >
          <Typography className={classes.heading}>{itemModule.title}</Typography>
          <Typography className={classes.secondaryHeading}>{expanded ? "Скрыть" : "Открыть"}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className={classes.video}>
          <iframe width="350" height="200" src="https://www.youtube.com/embed/nbaCw0iborI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <Typography className={classes.textMaterials}>
            {data }

          </Typography>
        </AccordionDetails>
      </Accordion>
  )
}

export default Accordeon
