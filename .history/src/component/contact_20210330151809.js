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

                <div class="row">
                        <div className="col-1">
                            <li className="fa fa-map-marker"></li>
                        </div>
                        <div className="col">
                            <span>{this.location}</span>
                        </div>
                    

                </div>
                <div class="row">
                    <div className="col-1">
                        <li className="fa fa-mobile" ></li>
                    </div>
                    <div className="col">
                        <span>{this.phone}</span>
                    </div>
                </div>
                <div className="row">
                    <div className="col-1">
                        <li className="fa fa-envelope"></li>
                    </div>
                    <div class="col">
                        <span>{this.email}</span>
                    </div>
                </div>
                <div className="row">
                    <div className="col-1">
                        <li className="fa fa-linkedin"></li>
                    </div>
                    <div className="col">
                        <a href={this.linkedin} >{this.linkedin}</a>
                    </div>
                </div>
                
            </div>

        )
    }
}

export default contact;