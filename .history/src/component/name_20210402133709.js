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
    getFisrtname(){
        var tmp = this.name.indexOf(" ");
        var endLastname =  this.name.indexOf(" ",tmp+1);
        return this.name.slice(endLastname+1);
    };




    render(){
        const lastname = this.getLastname();
        const firstname = this.getFirstname();
        return(
            <div>
                <span>
                    {this.name}
                </span>
                <br/>
                <span>
                    {lastname}
                </span>
            </div>
        )
    }
}

export default name;
