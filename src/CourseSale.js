import React, { Component } from "react";

class CourseSale extends Component {
    constructor(props) {
        super(props);
        this.state = {
            total: 0
        }
        this.getPrice = this.getPrice.bind(this)
    }
    getPrice(price) {
        this.setState({ total: this.state.total + price })
    }
    render() {
        var courses = this.props.courses.map((item, i) => {
            return <Course name={item.name} price={item.price} key={i} getPrice={this.getPrice} />
        })
        return (
            <div className="container" >
                <div className="title">These are your courses</div>
                <div className="course-container">
                    {courses}
                </div>
                <div className="total"><span>Total : </span>{this.state.total}</div>
            </div>
        );
    }
}

class Course extends Component {
    constructor(props) {
        super(props);
        this.state={
            active:false
        }
        this.changeState=this.changeState.bind(this)
    }
    changeState(){
        this.setState({active: !this.state.active});
        console.log('Actice : '+this.state.active)
        this.props.getPrice(!this.state.active ? this.props.price : -this.props.price)
    }
    render() {
        return (
            <div className="course">
                <p className="course-name">{this.props.name}</p>
                <p className="course-price">${this.props.price}</p>
                <button className={this.state.active? 'remove' : 'buy'} onClick={this.changeState}>{this.state.active? 'Remove' : 'Buy'}</button>
            </div>
        );
    }
}

export default CourseSale;