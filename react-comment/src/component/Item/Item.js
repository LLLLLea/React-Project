import React,{ Component } from 'react';
import PubSub from 'pubsub-js';

class Item extends Component {
	delcomment = () => {
		if(window.confirm(`你确定删除 ${this.props.comment.username} 的评论吗`)){
            let {index} = this.props;
            //this.props.del(index);
			//发布消息
			PubSub.publish('message',index);
		}
	}
	render(){
		let { comment } = this.props;
		return(
			<div>
                <li className="list-group-item">
                    <div className="handle">
                        <a onClick={this.delcomment}>删除</a>
                    </div>
                    <p className="user"><span >{comment.username}</span><span>说:</span></p>
                    <p className="centence">{comment.words}</p>
                </li>
			</div>
		)
	}
}

export default Item;