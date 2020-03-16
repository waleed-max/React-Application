import React from 'react';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}))

export default function Error() {
    const classes = useStyles();
    return (
       <section>
   <center><h1> Wrong Page !!!</h1></center>
   <center><Button variant="contained" color="primary" disableElevation>
   <Link to="/">Back to first page</Link>
    </Button></center>
    <br></br>
   
   <div className={classes.root}>
      <LinearProgress variant="query" />
      <LinearProgress variant="query" color="secondary" />
    </div>
       </section>
    )
}
