import React from 'react'

import Grid from '@material-ui/core/Grid';
import Switch from '@material-ui/core/Switch';
import Paper from '@material-ui/core/Paper';
import Slide from '@material-ui/core/Slide';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: 280,
  },
  
  paper: {
    zIndex: 1,
    position: 'relative',
    textAlign: 'center',
    margin: theme.spacing(1),
  },
  svg: {
    width: 500,
    height: 175,
  },
  polygon: {
    fill: theme.palette.common.white,
    stroke: theme.palette.divider,
    strokeWidth: 1,
  },
}));

export default function Service() {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(true);

  

  return (

    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          
          <div className={classes.root}>
      <div className={classes.wrapper}>
        
        <Slide direction="up" in={checked} mountOnEnter unmountOnExit style={{ transformOrigin: '0 0 0' }}
          {...(checked ? { timeout: 1000 } : {})}>
          <Paper elevation={4} className={classes.paper}>
          <p>service 1</p>
            <svg className={classes.svg}>
                
              <polygon  className={classes.polygon} />
            </svg>
          </Paper>
        </Slide>
      </div>
    </div>

          
        </Grid>
        <Grid item xs={4}>
          
          <div className={classes.root}>
      <div className={classes.wrapper}>
        
        <Slide direction="up" in={checked} mountOnEnter unmountOnExit style={{ transformOrigin: '0 0 0' }}
          {...(checked ? { timeout: 1000 } : {})}>
          <Paper elevation={4} className={classes.paper} >
          <p>service 2</p>
            <svg className={classes.svg}>
              <polygon  className={classes.polygon} />
            </svg>
          </Paper>
        </Slide>
      </div>
    </div>
          
        </Grid>
        <Grid item xs={4}>
          
          <div className={classes.root}>
      <div className={classes.wrapper}>
        
        <Slide direction="up" in={checked} mountOnEnter unmountOnExit style={{ transformOrigin: '0 0 0' }}
          {...(checked ? { timeout: 1000 } : {})}>
          <Paper elevation={4} className={classes.paper}>
          <p>service 3</p>
            <svg className={classes.svg}>
              <polygon  className={classes.polygon} />
            </svg>
          </Paper>
        </Slide>
      </div>
    </div>
          
        </Grid>
        
      </Grid>
      {/* ################# */}
      <Grid container spacing={3}>
        <Grid item xs={4}>
          
          <div className={classes.root}>
      <div className={classes.wrapper}>
        
        <Slide direction="up" in={checked} mountOnEnter unmountOnExit style={{ transformOrigin: '0 0 0' }}
          {...(checked ? { timeout: 1000 } : {})}>
          <Paper elevation={4} className={classes.paper}>
          <p>service 1</p>
            <svg className={classes.svg}>
                
              <polygon  className={classes.polygon} />
            </svg>
          </Paper>
        </Slide>
      </div>
    </div>

          
        </Grid>
        <Grid item xs={4}>
          
          <div className={classes.root}>
      <div className={classes.wrapper}>
        
        <Slide direction="up" in={checked} mountOnEnter unmountOnExit style={{ transformOrigin: '0 0 0' }}
          {...(checked ? { timeout: 1000 } : {})}>
          <Paper elevation={4} className={classes.paper} >
          <p>service 2</p>
            <svg className={classes.svg}>
              <polygon  className={classes.polygon} />
            </svg>
          </Paper>
        </Slide>
      </div>
    </div>
          
        </Grid>
        <Grid item xs={4}>
          
          <div className={classes.root}>
      <div className={classes.wrapper}>
        
        <Slide direction="up" in={checked} mountOnEnter unmountOnExit style={{ transformOrigin: '0 0 0' }}
          {...(checked ? { timeout: 1000 } : {})}>
          <Paper elevation={4} className={classes.paper}>
          <p>service 3</p>
            <svg className={classes.svg}>
              <polygon  className={classes.polygon} />
            </svg>
          </Paper>
        </Slide>
      </div>
    </div>
          
        </Grid>
        
      </Grid>

      
    </div>
    
  );
}