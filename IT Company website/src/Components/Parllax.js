import React from 'react';
import { Parallax, Background } from 'react-parallax';
 
const Parllax = () => (
    <div>
        
        <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={require('./image1.jpg')}
            bgImageAlt="the dog"
            strength={-200}
        >
            
            <div style={{ height: '200px' }} />
        </Parallax>
 
 
        
            
    </div>
);
export default Parllax;
