import react, {Component} from 'react'
import '../../node_modules/font-awesome/css/font-awesome.min.css'; 
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
                <i class="fa fa-user-alt">{this.name}</i>
                <i class='fa fa-bookmark'>{this.location}</i>
                <i className="fa fa-phone">{this.phone}</i>
                <i class="fa fa-at">{this.email}</i>
                <i className="fa fa-linkedin">{this.linkedin}</i>
            </div>
        )
    }
}

export default contact;