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
                <i class="fa fa-user-alt"></i>
                <span className="name">{this.name}</span>
                <i class='fa fa-bookmark'></i>
                <span className="location">{this.location}</span>
                <i className="fa fa-phone"></i>
                <span className="phone">{this.phone}</span>
                <i class="fa fa-at"></i>
                <span className="email">{this.email}</span>
                <i className="fa fa-linkedin"></i>
                <span className="linkedin">{this.linkedin}</span>
            </div>
        )
    }
}

export default contact;