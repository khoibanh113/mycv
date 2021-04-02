import {Component} from 'react'

class name extends Component{
    constructor(props){
        super(props);
        this.name= props.name;

        this.minhdang = this.minhdang.bind(this);
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
        // return this.name.slice(0,endLastname);
        return this.name.slice(-5);
    };

    minhdang(){
        var a = this.name.split(' ');
        var first = a.slice(0,-1).join(' ');
        var last = a.slice(-1).joint(' ');
        return this.name.slice(-5);
    };



    render(){
        const lastname = minhdang();
        // const firstname = abc[1];
        return(
            <div>
                <span>
                    {this.name}
                </span>
                <br/>
                <span>
                    {lastname}
                </span>
                <br/>
                <span>
                    {/* {firstname} */}
                </span>
            </div>
        )
    }
}

export default name;
