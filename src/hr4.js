import React ,{useState} from 'react';
const HrFour=()=>{
    const temp=
        {name:"Apple",price:200,qty:45};
  
    const[booklist,Updatebook]=useState([temp]);
    const[message,Updatemessage]=useState("");
    const[bookname,pickName]=useState("");
    const[bookprice,pickPrice]=useState("");
    const[bookqty,pickQty]=useState("");
    
    const save=()=>{
        var newbook={name:bookname,price:bookprice,qty:bookqty}
        Updatebook(booklist=>[...booklist,newbook]);
        Updatemessage(bookname + " added successfully");
        pickName("");
        pickPrice("");
        pickQty("");
    }
    
    const deletebook=(index)=>{
        booklist.splice(index,1);
        Updatebook(booklist=>[...booklist]);
        Updatemessage(" Book deleted successfully");
    }





    return(
        <div className="container">
        <div className="row">
            <div className="col-lg-12 text-center">
            <h1 className="text-center">Array:{booklist.length}</h1>
            <p>
            Name:    <input type="text" onChange={obj=>pickName(obj.target.value)} value={bookname} className="m-2"/>
               Price <input type="text" onChange={obj=>pickPrice(obj.target.value)} value={bookprice} className="m-2"/>
                Quantity:<input type="text" onChange={obj=>pickQty(obj.target.value)} value={bookqty} className="m-2"/>
                <button onClick={save} className="btn btn-primary m-2">Save</button>
            </p>
            <p>{message}</p>
            <table className="table table-hovered p-4 text-center">
                <thead>
                    <tr className="bg-light text-primary shadow">
                        <th>index</th>
                        <th>Book</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        booklist.map((info,index)=>{
                            return(
                            <tr key={index}>
                             <td>{index}</td>
                             <td>{info.name}</td>
                             <td>{info.price}</td>
                             <td>{info.qty}</td>
        
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
export default HrFour;