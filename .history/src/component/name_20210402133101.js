import {Component} from 'react'

class name extends Component{
    constructor(props){
        super(props);
        this.name= props.name;
        // this.lastname = this.name.subtr(0,this.name.ge);
        // th

    }
    getmiddlespace(){
        // return Math.ceil((this.name.split(" ").length-1)/2);
        // return (this.name.indexOf(" ",this.name.indexOf(" ")+1));
        var tmp = this.name.indexOf(" ");
        var endLastname =  this.name.indexOf(" ",tmp+1);
        return this.name.slice(0,endLastname);
    };


    render(){
        const a = this.getmiddlespace();
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
