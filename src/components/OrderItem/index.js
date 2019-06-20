import React, {Component} from 'react';
import './style.css'

class OrderItem extends Component {

    constructor(props){
        super(props);
        this.state = {
            stars:0,
            editing:false
        }
    }


    // 渲染评价组件
    renderEditComment(){
        return(
            <div className='orderItem__CommentContainer'>
                <textarea className='orderItem__comment'></textarea>
                {this.renderStart()}
                <button className='orderItem__btn orderItem__btn--red'>提交</button>
                <button className='orderItem__btn'>取消</button>
            </div>
        );
    }

    // 渲染 星星
    renderStart(){
        const {stars} = this.state;
        return(
            <div>
                {
                    [1,2,3,4,5].map((item,index)=>{
                        const light = stars>=item?'orderItem__star--red':'';
                        return ( <span key={index} className='orderItem__star'>★</span>)
                    })
                }
               
            </div>
        );
    }


    render() {
        const { picture,product,shop,price,ifCommented} = this.props.data;
        const {editing} = this.state;
        return (
            <div className="orderItem">
                <div className="orderItem__picContainer">
                    <img className="orderItem__pic" alt='商品图片' src={picture}/>
                </div>
                <div className="orderItem__content">
                    <div className="orderItem__product">{product}</div>
                    <div className="orderItem__shop">{shop}</div>
                    <div className="orderItem__detail">
                        <div className="orderItem__price">{price}</div>
                        {
                            ifCommented ?
                            (<button className="orderItem__btn orderItem__btn--gray ">已评价</button>):
                            (<button className="orderItem__btn orderItem__btn--red ">评价</button>)
                        }
                        
                    </div>
                </div>
                { editing?this.renderEditComment():null}   
            </div>
        );
    }
}

export default OrderItem;