import {Component} from 'react'

class name extends Component{
    constructor(props){
        super(props);
        this.name= props.name;
        // this.lastname = this.name.subtr(0,this.name.ge);
        // th

    }
    getLastname(){
        var tmp = this.name.indexOf(" ");
        var endLastname =  this.name.indexOf(" ",tmp+1);
        return this.name.slice(0,endLastname);
    };
    getFirstname(){
        var tmp = this.name.indexOf(" ");
        var endLastname =  this.name.indexOf(" ",tmp+1);
        return this.name.slice(-endLastname-1,this.name.length);
    };




    render(){
        const lastname = this.getLastname();
        const firstname = this.getFirstname();
        return(
            <div>
                <div className="last-Name">
                    <span>{lastname}</span>
                </div>
                <div className="first-Name">
                    <span>{firstname}</span>
                </div>
            </div>
        )
    }
}

export default name;
