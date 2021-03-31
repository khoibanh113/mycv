import react, {Component} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
                    <li className="fa-phone">
                        <span>{this.location}</span>
                    </li>
                    <FontAwesomeIcon icon="coffee">
                        <span>{this.phone}</span>
                    </FontAwesomeIcon>
                    <li className="fa-phone">
                        <span>{this.email}</span>
                    </li>
                    <li className="fa-phone">
                        <span>{this.linkedin}</span>
                    </li>
                </ul>
            </div>

        )
    }
}

export default contact;