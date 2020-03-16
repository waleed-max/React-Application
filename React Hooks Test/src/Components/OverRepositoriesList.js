import React from 'react';
import Loading from './Loading';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import StarRateIcon from '@material-ui/icons/StarRate';
import Brightness1Icon from '@material-ui/icons/Brightness1';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import DeviceHub from '@material-ui/icons/DeviceHub';




const useStyles = makeStyles(theme => ({
  root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    height:'auto',
    minHeight: '300px',
    textAlign: 'left',
    marginLeft: '20px',
    marginRight: '20px',
    color: theme.palette.text.secondary,
    
    
  },
  name: {
    color: 'blue',
    
  },

}));
  


export default function OverRepositoriesList({repositories, loading}) {

    const classes = useStyles();

    

    if (loading){
        return <Loading /> 
    }
    
    return (

      
  
      <div className={classes.root}>
      <Grid container spacing={3}>
        {repositories.map(item => {
          
          const style ={
            color: item.color,
            
          }
         
         
          return <Grid  key={item.id} item xs={12} sm={12} md={6}>
          <Paper className={classes.paper}>
          <Typography variant="h4" component="h2" className={classes.name}>
            {item.name}
          </Typography>
          <br></br>
          <Typography variant="h5" component="h3">
            {item.description}
          </Typography>
          <br></br>
          <br></br>
          <IconButton aria-label="language_type">
          <Brightness1Icon  style={style} />{item.language}
          
         </IconButton>
         <IconButton aria-label="star">
          <StarRateIcon />{item.watchers1}
         </IconButton>
         <IconButton  aria-label="share" className={classes.IconNew}>
          <DeviceHub />{item.forks1}
         </IconButton>
         <IconButton  aria-label="share" className={classes.IconNew}>
          Updated {item.diffDays} days ago.
         </IconButton>
          </Paper>
        </Grid>
         
      })}
        
        
      </Grid>
    </div>

    )
}