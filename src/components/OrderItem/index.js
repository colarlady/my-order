import React, {Component} from 'react';
import './style.css'

class OrderItem extends Component {
    render() {
        return (
            <div className="OrderItem">
                <div className="OrderItem_picContainer">
                    <img className="OrderItem_pic" src='' alt="商品图片" />
                </div>
                <div className="OrderItem_content">
                    <div className="OrderItem_product">商品名称</div>
                    <div className="OrderItem_shop">商品描述</div>
                    <div className="OrderItem_detail">
                        <div className="OrderItem_price">价格</div>
                        <button className="OrderItem-btn">评价</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default OrderItem;