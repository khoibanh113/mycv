import react, {Component} from 'react'
import '../../node_modules/font-awesome/css/font-awesome.min.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
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
                <div class="container">
                    <div class="row">
                        <div class="col-sm">
                            <li className="fa fa-map-marker"></li>
                        </div>
                        <div class="col-sm">
                            <span>{this.location}</span>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm">
                            <li className="fa fa-mobile" ></li>
                        </div>
                        <div class="col-sm">
                            <span>{this.phone}</span>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm">
                            <li className="fa fa-envelope"></li>
                        </div>
                        <div class="col-sm">
                            <span>{this.email}</span>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm">
                            <li className="fa fa-linkedin"></li>
                        </div>
                        <div class="col-sm">
                            <span>{this.linkedin}</span>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default contact;