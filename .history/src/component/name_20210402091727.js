import {Component} from 'react'

class name extends Component{
    constructor(props){
        super(props);
        this.name= props.name;
        var n =this.name.length;
    }


    render(){
        return(
            <div>
                <span>
                    {n}
                </span>
            </div>
        )
    }
}

export default name;
