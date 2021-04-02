import {Component} from 'react'

class name extends Component{
    constructor(props){
        super(props);
        this.name= props.name;
        this.n =this.name.length;
    }


    render(){
        return(
            <div>
                <span>
                    {this.n}
                </span>
            </div>
        )
    }
}

export default name;
