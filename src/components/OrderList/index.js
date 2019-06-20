import React, { Component } from 'react';
import OrderItem from '../OrderItem';
import Header from '../Header';



class index extends Component {

    constructor(props){
        super(props);
        this.state ={
            data:[],
            

        }
    }
    

    componentDidMount(){
        fetch('/mock/orders.json').then(res=>{
            if(res.ok){
                res.json().then(data=>{
                    this.setState({
                        data
                    })
                })
            }
        })      
    }


    render() {
        const {data} = this.state;
  
        return (
            <div>
                <Header/>
                {
                    data.map(item=>{
                        return ( <OrderItem key={item.id}  data={item} />);
                    })
                }
               
            </div>
        );
    }
}

export default index;