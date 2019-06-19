import React, {Component} from 'react';
import './style.css'

class OrderItem extends Component {
    render() {
        return (
            <div className="orderItem">
                <div className="orderItem_picContainer">
                    <img className="orderItem_pic" src='../../assets/images/test.jpg' alt='商品图片'/>
                </div>
                <div className="orderItem_content">
                    <div className="orderItem_product">商品名称</div>
                    <div className="orderItem_shop">商品描述</div>
                    <div className="orderItem_detail">
                        <div className="orderItem_price">价格</div>
                        <button className="orderItem_btn">评价</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default OrderItem;