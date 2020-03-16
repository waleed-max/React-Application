import React from 'react';
import Repository from './Repository';
import Loading from './Loading';

export default function RepositoriesList({repositories, loading}) {

    

    if (loading){
     
        return <Loading />
        
    }
    return (
        <section>
    
    
            {repositories.map(item => {
               
                return <Repository key={item.id} {...item} />
                
            })}
        </section>
    )
}
