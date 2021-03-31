import react, {Component} from 'react'
import '../../node_modules/font-awesome/css/font-awesome.min.css'; 
import '../css/contact.css'

class contact extends Component{
    constructor(props){
        super(props);
        this.location = props.location;
        this.phone = props.phone;
        this.email = props.email;
        this.linkedin = props.linkedin;
    }



    render(){
        return(
            <div className="container-contact">
                <ul className="address-line">
                    <li className="fa fa-map-marker fa-fw">
                        <span>{this.location}</span>
                    </li>
                    <li className="fa fa-mobile fa-fw" >
                        <span>{this.phone}</span>
                    </li>
                    <li className="fa fa-envelope fa-fw">
                        <span>{this.email}</span>
                    </li>
                    <li className="fa fa-linkedin fa-fw">
                        <span>{this.linkedin}</span>
                    </li>
                </ul>
            </div>

        )
    }
}

export default contact;