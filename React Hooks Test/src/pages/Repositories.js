import React from 'react';
import RepositoriesList from '../Components/RepositoriesList';
import SearchForm from '../Components/SearchForm';
import Navbar from "../Components/Navbar";

export default function Repositories() {
    const [loading, setLoading] = React.useState(false);
    const [repositories, setRepositories] = React.useState([]);
    const [search, setSearch] = React.useState('');


    React.useEffect(()=>{
        setLoading(true);
        async function getRepository() {
            try {
                const response = await fetch(
                    'https://api.github.com/users/octocat/repos'
                );
                const data = await response.json();
              
                if (data) {
                    
                    
                        
                        const newFilter = data.filter(item => item.name.toLowerCase().includes(search));
                        
                        const repositories = newFilter.map(item =>{
                        const updated_atSplit = item.updated_at.split("T")[0];
                        const updated_at1 = new Date(updated_atSplit);
                        const setDate =  new Date() - updated_at1;
                        const diffDays = Math.ceil(setDate / (1000 * 60 * 60 * 24));
                        const watchers1 = Math.abs(item.watchers) > 999 ? Math.sign(item.watchers)*((Math.abs(item.watchers)/1000).toFixed(1)) + 'k' : Math.sign(item.watchers)*Math.abs(item.watchers);
                        const forks1 = Math.abs(item.forks) > 999 ? Math.sign(item.forks)*((Math.abs(item.forks)/1000).toFixed(1)) + 'k' : Math.sign(item.forks)*Math.abs(item.watchers);
                       
                        const {id,name,description,language,updated_at1:updated_at} = item;
                        let color = ''
                       if (item.language === 'HTML'){
                            color = 'red'
                       };
                       if (item.language === 'CSS'){
                        color = 'green'
                       };
                       if (item.language === 'Ruby'){
                        color = 'maroon'
                       };
                      
                      
                        return {
                              id:id,
                              name:name,
                              description:description,
                              language:language,
                              forks1:forks1,
                              watchers1:watchers1,
                              updated_at1:updated_at1,
                              diffDays:diffDays,
                              color:color
                              
                            };
                       }); 
                       repositories.sort((a,b) => b.updated_at1 - a.updated_at1);
                  
                   setRepositories(repositories)      
                   
                } else {
                    setRepositories([])
                }
            } catch (error){
                console.log(error);
            }
            setLoading(false);
        }
        getRepository();
    }, [search]);
    return (
        <main>
            <Navbar repositories={repositories}/>
            <SearchForm setSearch={setSearch} />
            <RepositoriesList loading={loading} repositories={repositories} />
        </main>
    )
}
