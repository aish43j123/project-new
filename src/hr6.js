import React from 'react';
import HrFive from './hr5.js';

    const user=[
        {name:"ramu",age:89,edu:"btech"},
        {name:"raju",age:89,edu:"btech"},
        {name:"radhu",age:89,edu:"btech"},
        {name:"reenu",age:89,edu:"btech"}
    ];
    const HrSix=()=>{

return(
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <h1>props</h1>
                </div>

                
                {
                    user.map((info, index)=>{
                        return(
                            <HrFive
                                fullname={info.name}
                                age={info.age}
                                edu={info.edu}
                                key={index}
                            />
                        )
                    })
    }
            </div>
        </div>
    
)
}
export default HrSix;