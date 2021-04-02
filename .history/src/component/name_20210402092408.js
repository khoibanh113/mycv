import {Component} from 'react'

class name extends Component{
    constructor(props){
        super(props);
        this.name= props.name;
        this.countspace = this.name.split(" ").length-1;
    }


    render(){
        return(
            <div>
                <span>
                    {this.countspace}
                </span>
            </div>
        )
    }
}

export default name;
