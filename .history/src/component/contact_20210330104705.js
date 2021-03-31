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
                <ul className="address-line">
                    <li className="fa-map-marker">
                        Ho chi minh Vietnam
                    </li>
                    <li className="fa-phone">
                        02020202020
                    </li>
                </ul>
            </div>

        )
    }
}

export default contact;