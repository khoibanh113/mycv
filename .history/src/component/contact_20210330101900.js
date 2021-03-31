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
                <i class="fa fa-user-alt">name</i>
                <div className="name">{this.name}</div>
                <i class='fa fa-bookmark'>location</i>
                <div className="location">{this.location}</div>
                <i className="fa fa-phone">phone</i>
                <div  className="phone">{this.phone}</div>
                <i class="fa fa-at">email</i>
                <div  className="email">{this.email}</div>
                <i className="fa fa-linkedin">linkedin</i>
                <div  className="linkedin">{this.linkedin}</div>
            </div>
        )
    }
}

export default contact;