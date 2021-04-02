import {Component} from 'react'

class name extends Component{
    constructor(props){
        super(props);
        this.name= props.name;
        getmiddlespace(()=>{
            return Math.ceil((this.name.split(" ").length-1)/2);
        });
        this.countspace = getmiddlespace;

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
