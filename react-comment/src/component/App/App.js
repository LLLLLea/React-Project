import React,{ Component } from 'react';
import Add from '../Add/Add';
import List from '../List/List';
import PubSub from 'pubsub-js';
class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			comments:[{username:'panda',words:'你的小可爱突然出现！'},{username:'沧瞳',words:'老夫的少女心爆棚！！'}]  //对象数组
		};
	}
	//在哪里设置this.state,就在哪里写更改state的语句
	add = (comment) => {
		//先获取state里面的数据
		let {comments} = this.state;
		//添加数据
		comments.unshift(comment);
		//更新state
		this.setState(comments);
	}
	//组件将要被渲染的时候订阅
	componentWillMount(){
		PubSub.subscribe('message',(msg,data)=>{
			let { comments } = this.state;
            comments.splice(data,1);
            this.setState({comments});
		});
	}
	/*del = (index) => {
		let { comments } = this.state;
		comments.splice(index,1);
		this.setState({comments});
	}*/
	render(){
		let {comments} = this.state;
		return(
			<div>
    			<header className="site-header jumbotron">
      				<div className="container">
        				<div className="row">
          					<div className="col-xs-12">
            					<h1>请发表对React的评论</h1>
          					</div>
        				</div>
      				</div>
    			</header>
    			<div className="container">
      				<Add add={this.add }/>
					<List comments={comments} del={this.del}/>
   				</div>
  			</div>
		)
	}
}
export default App;