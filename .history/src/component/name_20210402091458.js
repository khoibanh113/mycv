import {Component} from 'react'

class name extends Component{
    constructor(props){
        super(props);
        this.name= props.name;
    }


    render(){
        return(
            <div>
                <span>
                    {this.name}
                </span>
            </div>
        )
    }
}

export default name;
