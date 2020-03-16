import React from 'react';
import ButtonSearch from './ButtonSearch';
import ButtonSearch2 from './ButtonSearch';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import './Form.css';
const useStyles = makeStyles(theme => ({
    root: {
        marginTop: '10px',
        marginLeft:'20px',
      flexGrow: 2,
      
    },
    button: {
      
      marginLeft: 50,
      
     },
     df: {
      
      marginLeft: 50,
      
     },
     
     
   
  }));


export default function SearchForm({setSearch}) {

    const searchValue = React.useRef("");

    React.useEffect(()=>{
        searchValue.current.focus();
    }, []);
    
    const handleSubmit = (e) =>{

        e.preventDefault();
        searchValue.current.value= "";

    }

    const searchRepo = () =>{
     setSearch(searchValue.current.value);
     
    }
    const classes = useStyles();
    return (
        <div className={classes.root}>
      <Grid container spacing={2}>
        
        <Grid item xs={12}  md={8}>
          <form className={classes.paper} onSubmit={handleSubmit}>
          <div className="form-control>">
          <input className="search-box-input"  type="text" placeholder="Find a Repository..."
                  name="name" id="name" onChange={searchRepo} ref={searchValue}/>
          </div>
                 
          </form>
                  
        </Grid>
        <Grid item xs={6}  md={2}>
         <ButtonSearch />
        </Grid>
        <Grid item xs={6}  md={2}>
        <ButtonSearch2 />
        </Grid>
        
      </Grid>
     </div>
    
      
    )
}