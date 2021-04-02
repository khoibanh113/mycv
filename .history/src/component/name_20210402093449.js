import {Component} from 'react'

class name extends Component{
    constructor(props){
        super(props);
        this.name= props.name;
        

    }
    getmiddlespace(){
        return Math.ceil((this.name.split(" ").length-1)/2);
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
