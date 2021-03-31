import {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/experience.css'
class experience extends Component{
    constructor(props){
        super(props);
        this.decription = props.decription;
        this.teamsize = props.teamsize;
        this.responsiblities = props.responsiblities;
        this.accomplishments = props.accomplishments;
        this.technologies = props.technologies;
        this.projectname = props.projectname;
        this.projecttime = props.projecttime;
        this.projectlocation = props.projectlocation;
    }

    render(){
        return(
            <div>
                <div className='container-experience'>
                    <div className='project-name'>
                        <span>{this.projectname}</span>
                    </div>
                    <div className='project-location'>
                        <span>{this.projectlocation}</span>
                    </div>
                    <div className='project-time'>
                        <span>{this.projecttime}</span>
                    </div>

                    <div className="row row-experience">
                        <div className="col-2 col-item"><b>Decription:</b></div>
                        <div className="col detail-content">
                            <span>
                                {this.decription}
                            </span>
                        </div>
                    </div>
                    <div className="row row-experience">
                        <div className="col-2 col-item"><b>Teamsize:</b></div>
                        <div className="col detail-content">
                            <span>
                            {this.teamsize}
                            </span>
                        </div>
                    </div>
                    <div className="row row-experience">
                        <div className="col-2 col-item"><b>Responsiblities:</b></div>
                        <div className="col detail-content">
                            <span>
                            {this.responsiblities}
                            </span>
                        </div>
                    </div>
                    <div className="row row-experience">
                        <div className="col-2 col-item"><b>Accomplishments:</b></div>
                        <div className="col detail-content">
                            <span>
                            {this.accomplishments}
                            </span>
                        </div>
                    </div>
                    <div className="row row-experience">
                        <div className="col-2 col-item"><b>Technologies:</b></div>
                        <div className="col detail-content">
                            <span>
                            {this.technologies}
                            </span>
                        </div>
                    </div>
                </div>

            
             </div>
        )
    }
}

export default experience;
