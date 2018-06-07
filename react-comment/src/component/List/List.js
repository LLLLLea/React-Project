import React,{ Component } from 'react';
import Item from '../Item/Item';

class List extends Component {
	render(){
        let {comments} = this.props;
        let display = comments.length ? 'none' : 'block';
        return(
            <div className="col-md-8">
                <h3 className="reply">评论回复：</h3>
                <h4 style={{display}}>暂无评论，点击左侧添加评论！</h4>
                <ul className="list-group">
                    {
                        comments.map(
                            (item,index) => <Item key={index} comment={item} index={index} del={this.props.del} />
                        )
                    }
                </ul>
            </div>
		)
	}
}

export default List;