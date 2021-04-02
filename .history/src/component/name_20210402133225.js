import {Component} from 'react'

class name extends Component{
    constructor(props){
        super(props);
        this.name= props.name;
        // this.lastname = this.name.subtr(0,this.name.ge);
        // th

    }
    getLastname(){
        var tmp = this.name.indexOf(" ");
        var endLastname =  this.name.indexOf(" ",tmp+1);
        return this.name.slice(0,endLastname);
    };

    


    render(){
        const a = this.getLastname();
        return(
            <div>
                <span>
                    {this.name}
                </span>
                <br/>
                <span>
                    {a}
                </span>
            </div>
        )
    }
}

export default name;
