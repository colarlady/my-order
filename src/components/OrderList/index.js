import React, { Component } from 'react';
import OrderItem from '../OrderItem';


const data = {
    picture:"123",
    product:"百香果(冷饮)1扎",
    shop:"院落创意菜",
    price:'19.9',
    isComment:true
}

class index extends Component {
    render() {
        return (
            <div>
                <OrderItem data={data} />
            </div>
        );
    }
}

export default index;