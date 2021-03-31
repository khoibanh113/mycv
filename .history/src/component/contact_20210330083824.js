import react, {Component} from 'react'

class contact extends Component{
    constructor(props){
        super(props);
    }



    render(){
        return(
            <div className="container">
                <span className="name">{this.props.name}</span>
            </div>
        )
    }
}

export default contact;