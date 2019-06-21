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

    // 提交评论
    handleCommentSubmit(id,comments,stars){
        console.log(id,comments,stars);
        const {data} = this.state;
        const newData = data.map(item=>{
            if(item.id===id){
                return {
                    ...item,
                    id,
                    comments,
                    stars,
                    ifCommented:true
                }
            }else{
                return item;
            }
        });

        this.setState({
            data:newData
        })
    }
    render() {
        const {data} = this.state;
        return (
            <div>
                <Header/>
                {
                    data.map(item=>{
                        return ( <OrderItem key={item.id}  data={item} onSubmit={(id,comments,stars)=>this.handleCommentSubmit(id,comments,stars)} />);
                    })
                }
               
            </div>
        );
    }
}

export default index;