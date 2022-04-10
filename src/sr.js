import React,{Component} from 'react';
class SrOne extends Component{
    constructor(){
    super();
    this.state={counter:5,message:""};
}
    one=()=>{
        this.setState({
            counter:this.state.counter+5,
            message:"Positive click"
        })
    }
     two=()=>{
       this.setState({
            counter:this.state.counter-5,
            message:"Negative click"
        })
    }
    
    render(){
        return(
    <div className="container">
        <div className="row">
            <div className="col-lg-12 text-center">
                <h4>Class Component</h4>
                <p>{this.state.counter}</p>
                <p>{this.state.message}</p>
                <button onClick={this.one} className='btn btn-info m-2'>PLUS</button>
                <button onClick={this.two} className='btn btn-info m-2'>PLUS</button>
            </div>
        </div>

    </div>
      );
    }
}
export default SrOne;