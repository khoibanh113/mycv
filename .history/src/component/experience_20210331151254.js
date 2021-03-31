import {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/experience.css'
class experience extends Component{


    render(){
        return(
            <div>
                {/* <div className="row row-experience">
                    <div className="col-2">Project:</div>
                    <div className="col">Projectname</div>
                    
                </div> */}
                <div className='container-experience'>
                    <div className="row row-experience">
                        <div className="col-2 col-item"><b>Decription:</b></div>
                        <div className="col detail-content">
                            <span>
                            A free mobile app delivering Lancaster University services, resources, and information - at your fingertips - whenever you want them, from wherever you are!
                            </span>
                        </div>
                    </div>
                    <div className="row row-experience">
                        <div className="col-2 col-item"><b>Teamsize0:</b></div>
                        <div className="col detail-content">
                            <span>
                            5
                            </span>
                        </div>
                    </div>
                </div>

            
             </div>
        )
    }
}

export default experience;
