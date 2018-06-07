import React,{ Component } from 'react';

class Add extends Component {
    addcomment = () => {
        //获取数据
        let username = this.refs.username.value;
        let words = this.refs.words.value;
        //对数据进行判断
        if(!username || !words){
            alert('输入的内容必须完整');
            return ;
        }
        //整理数据
        let comment = {username,words};
        //传递数据给App组件
        this.props.add(comment);
        this.refs.username.value = '';
        this.refs.words.value = '';
    }

    render(){
        return(
            <div className="col-md-4">
                <form className="form-horizontal">
                    <div className="form-group">
                        <label>用户名</label>
                        <input ref="username" type="text" className="form-control" placeholder="用户名"/>
                    </div>
                    <div className="form-group">
                        <label>评论内容</label>
                        <textarea ref="words" className="form-control" rows="6" placeholder="评论内容"></textarea>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <button onClick={this.addcomment} type="button" className="btn btn-default pull-right">提交</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default Add;