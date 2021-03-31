import react, {Component} from 'react'
import '../../node_modules/font-awesome/css/font-awesome.css'; 
import '../css/contact.css'

class contact extends Component{
    constructor(props){
        super(props);
        this.name = props.name;
        this.location = props.location;
        this.phone = props.phone;
        this.email = props.email;
        this.linkedin = props.linkedin;
    }



    render(){
        return(
            <div className="container-contact">
                <i class="fa fa-phone-rotary">123</i>
                <i class="fa fa-500px">123456</i>
            </div>

        )
    }
}

export default contact;