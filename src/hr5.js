import React from 'react';
const HrFive=(props)=>{


return(
    <div className="col-lg-4 mb-4">
        <div className="p-5 bg-primary rounded">
        <p>{props.name}</p>
        <p>{props.age}</p>
        <p>{props.edu}</p>
        </div>

    </div>
)
}
export default HrFive;