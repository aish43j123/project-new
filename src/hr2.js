import React ,{useState} from 'react';
const HrTwo=()=>{
const[booklist,Updatebook]=useState(["Java","Python","C","C++"]);
return(
    <div className="container">
    <div className="row">
        <div className="col-lg-12 text-center">
        <h1>ID Array:{booklist.length}</h1>
        {
            booklist.map((info,index)=>{
                return(
                <p key={index}>
                 {index}.{info}
                </p>
                )
            })
        }
        </div>
        </div>
        </div>
)
}
export default HrTwo;