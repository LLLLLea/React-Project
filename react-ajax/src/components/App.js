import React from 'react';
import Search from './Search';
import List from './List';
class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            searchName: ''
        }
    }
    search = (searchName) => {
        this.setState({searchName});
    };
    render(){
        let {searchName} = this.state;
        return (
            <div className="container">
                <Search search={this.search}/>
                <List searchName={searchName}/>
            </div>
        );
    }
}
export default App;