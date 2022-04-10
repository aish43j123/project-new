import React,{useState} from 'react';
const HrOne=()=>{
const[abc,xyz]=useState(10);
const one=()=>{
    xyz(abc+5)
}
const two=()=>{
    xyz(abc-5)
}
return(
<div className="container">
    <div className="row">
        <div className="col-lg-12 text-center">
            <h1>Counter:{abc}</h1>
         <button onClick={one} className="btn btn-danger m-2">PLUS</button>
         <button onClick={two} className="btn btn-danger m-2">MINUS</button>
        </div>
    </div>
</div>
)
}

export default HrOne;