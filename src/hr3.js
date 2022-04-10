import React ,{useState} from 'react';
const HrThree=()=>{
    const[booklist,Updatebook]=useState(["java","c","c++","python"]);
    const[message,Updatemessage]=useState("");
    const[newbook,pickBook]=useState("");
    
    const save=()=>{
        Updatebook(booklist=>[...booklist,newbook]);
        Updatemessage(newbook + " added successfully");
        pickBook("");
    }
    
    const deletebook=(index)=>{
        booklist.splice(index,1);
        Updatebook(booklist=>[...booklist]);
        Updatemessage(booklist[index] +" Book deleted successfully");
    }





    return(
        <div className="container">
        <div className="row">
            <div className="col-lg-12 text-center">
            <h1 className="text-center">Array:{booklist.length}</h1>
            <p>
                <input type="text" onChange={obj=>pickBook(obj.target.value)} value={newbook}/>
                <button onClick={save} className="btn btn-primary m-3">Save</button>
            </p>
            <p>{message}</p>
            <table className="table table-hovered p-4 text-center">
                <thead>
                    <tr className="bg-light text-primary shadow">
                        <th>index</th>
                        <th>Book</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        booklist.map((info,index)=>{
                            return(
                            <tr key={index}>
                             <td>{index}</td>
                             <td>{info}</td>
                             <td>
                                 <button onClick={deletebook.bind(this,index)} className="btn btn-danger">Delete</button>
                             </td>
                            </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            </div>
        </div>
        </div>
)
}
export default HrThree;