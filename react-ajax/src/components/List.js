import React from 'react';
import axios from 'axios';
class List extends React.Component {
    constructor(props){
        super(props);
        this.state={
            firstView:true,
            loading:false,
            users:null,
            error:null
        }
    }
    //组件将要接收props数据或者props数据发送变化时调用
    componentWillReceiveProps(nextprops){
        this.setState({
            firstView:false,
            loading:true
        })
        let url =`https://api.github.com/search/users?q=${nextprops.searchName}`;
        axios.get(url)
            .then(response => {
                let data = response.data;
                this.setState({
                    loading:false,
                    users:data.items
                });
            })
            .catch(error => {
                this.setState({
                    lading:false,
                    error:error
                });
            })
    }
    render(){
        let {firstView,loading,users,error} = this.state;
        if(firstView)
            return <h2>Enter username to search</h2>
        else if(loading){
            return <h2>Loading...</h2>
        }
        else if(users){
            return(
                <div className="row">
                    {
                        users.map((item,index) => {
                            return (
                                <div key={index} className="card">
                                    <a href={item.html_url}>
                                        <img src={item.avatar_url} style={{width: '100px'}} alt="React.js"/>
                                    </a>
                                    <p className="card-text">{item.login}</p>
                                </div>
                            )
                        })
                    }
                </div>
            )
        }
        else
            return <p>没有匹配到用户，请重新匹配</p>
        return (
            <div className="row">
                <div className="card">
                    <a href="https://github.com/reactjs">
                        <img src="https://avatars.githubusercontent.com/u/6412038?v=3" style={{width: '100px'}} alt="React.js"/>
                    </a>
                    <p className="card-text">reactjs</p>
                </div>
            </div>
        );
    }
}
export default List;