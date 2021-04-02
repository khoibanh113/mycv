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
        // return (this.name.indexOf(this.name.indexOf(" ")," "));
        // return this.name.indexOf(" ");
    };


    render(){
        const a = this.getmiddlespace();
        return(
            <div>
                <span>
                    {a}
                </span>
            </div>
        )
    }
}

export default name;
