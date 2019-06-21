import React, {Component} from 'react';
import './style.css'

class OrderItem extends Component {

    constructor(props){
        super(props);
        this.state = {
            stars:props.data.comments||'',
            editing:false,
            comments:props.data.comments||''
        }
    }

    // 评价
    handleClickComment(){
        this.setState({
            editing:true
        })
    }

    //评价修改事件处理函数
    hanleChangeComment(e){
        this.setState({
            comments:e.target.value
        });
    }

    // 星星点击事件处理函数
    handleClickStar(value){
        this.setState({
            stars:value
        })
    }

    // 取消评论
    handleCancel(){
        this.setState({
            editing:false,
            comments:'',
            stars:0
        })
    }

    //提交评论内容
    handleSubmit(){
        const {onSubmit} = this.props;
        const {id} = this.props.data;
        const {comments,stars} = this.state;

        this.setState({
            editing:false
        });

        onSubmit && onSubmit(id,comments,stars);
    }


    // 渲染评价组件
    renderEditComment(){
        const {comments} = this.state;
        return(
            <div className='orderItem__CommentContainer'>
                <textarea className='orderItem__comment' value={comments} onChange={(e)=>this.hanleChangeComment(e)}></textarea>
                {this.renderStart()}
                <button className='orderItem__btn orderItem__btn--red' onClick={()=>this.handleSubmit()}>提交</button>
                <button className='orderItem__btn' onClick={()=>this.handleCancel()}>取消</button>
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
                        const lightClass = stars>=item?'orderItem__star--red':'';
                        return ( <span key={index} className={'orderItem__star '+lightClass} onClick={()=>this.handleClickStar(item)}>★</span>)
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
                            (<button className="orderItem__btn orderItem__btn--red " onClick={()=>this.handleClickComment()}>评价</button>)
                        }
                        
                    </div>
                </div>
                { editing?this.renderEditComment():null}   
            </div>
        );
    }
}

export default OrderItem;