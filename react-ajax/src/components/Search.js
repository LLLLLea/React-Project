import React from 'react';
class Search extends React.Component {
    constructor(props){
        super(props);
    }
    searchUser = () => {
        //收集数据
        let searchName = this.refs.searchName.value;
        //将数据交给App
        this.props.search(searchName);
    }
    render(){
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                    <input ref="searchName" type="text" placeholder="enter the name you search"/>
                    <button onClick={this.searchUser}>Search</button>
                </div>
            </section>
        );
    }
}
export default Search;