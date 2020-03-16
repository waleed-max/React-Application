import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DeviceHub from '@material-ui/icons/DeviceHub';
import IconButton from '@material-ui/core/IconButton';
import StarRateIcon from '@material-ui/icons/StarRate';
import BrightnessIcon from '@material-ui/icons/Brightness1';
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Grid from '@material-ui/core/Grid';




const useStyles = makeStyles(theme => ({
    root: {
      minWidth: 275,
      margin: '20px',
      flexGrow: 1,
    },
    bullet: {
      display: 'inline-block',
      margin: '5 6px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
      
    },
    group: {
      display: "flex",
      "& > *": {
        margin: theme.spacing(1)
      }
    },
    IconNew: {
        
        flexGrow: 1,
        
      },
      dividerInset: {
        margin: `5px 0 0 ${theme.spacing(9)}px`,
      },
    
    
  }));
  
export default function Repository({
    id,
    name,
    description,
    language,
    forks1,
    watchers1,
    diffDays,
    color
    }) {
  
      
      
        const classes = useStyles();
  

    return (
      
     
        <Card className={classes.root} variant="outlined">
          <Grid container spacing={3} direction="row" alignItems="center" justify="flex-end">
        
        <Grid item  xs={8} md={11}>
        <CardContent>
          <Typography variant="h4" component="h2" style={{color:'blue'}}>
            {name}
          </Typography>
          <br></br>
          <Typography variant="h5" component="h2">
            {description}
          </Typography>
          <br></br>
          
          <IconButton aria-label="language_type">
          <BrightnessIcon  style={{color}}/>{language}
        </IconButton>
        <IconButton aria-label="star">
          <StarRateIcon />{watchers1}
        </IconButton>
        <IconButton  aria-label="share" className={classes.IconNew}>
          <DeviceHub />{forks1}
        </IconButton>
        <IconButton  aria-label="share" className={classes.IconNew}>
          Updated {diffDays} days ago.
        </IconButton>
        </CardContent>
        
        </Grid>
        <Grid item  xs={4} md={1} >
          <div className={classes.group}>
          <ButtonGroup
        orientation="vertical"
        color="primary"
        aria-label="vertical contained primary button group"
        variant="text"
      >
        <Button
        variant="contained"
        color="primary"
        size="small"
        startIcon={<StarRateIcon />}
        aria-label="vertical contained primary button group"
      >
        Star
      </Button>
      
    
    </ButtonGroup>
      </div>
      
      
        </Grid>
        
      </Grid>
        
      </Card>
        
      
    )
}
