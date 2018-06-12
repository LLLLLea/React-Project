# 1 React-comment
![image](https://github.com/LLLLLea/React-Project/blob/master/react-comment/img/1.JPG)
- 用React实现一个评论管理功能
## 技术：
- React
- ES6
- create-react-app
- PubSub.js 
### create-react-app
使用脚手架create-react-app特别方便，可以不用考虑像webpack的配置等。
- npm install -g create-react-app
- create-react-app xxx(项目名称)
- cd xxx
- npm start (启动)
### 拆分组件（拆分组件应该按功能拆分）
- 应用主组件：App
- 添加评论组件: Add
- 评论项组件: Item
- 评论列表组件: List  
### PubSub.js
- 在传值（index）时，需要从App->List->Item，在复杂项目中会繁琐，所以，可以使用PubSub。
- PubSub-js可以实现消息推送/订阅
- PubSub.publish('message',data);
- PubSub.subscribe('message',function(msg,data){...});

# 2 React-ajax
- 实现github用户搜索功能（模糊匹配）
![image](https://github.com/LLLLLea/React-Project/blob/master/react-ajax/img/1.JPG)
## 技术：
- React
- ES6
- create-react-app
- ajax(axios) 
### 拆分组件（拆分组件应该按功能拆分）
- 应用主组件：App
- 搜索组件: Search
- 结果显示组件: List  
编写静态组件

### 编写动态组件
  - componentWillReceiveProps(nextProps): 监视接收到新的props, 发送ajax
  - 使用axios库发送ajax请求
### axios
- 用npm安装：npm install axios
- 发送get请求：  

```
axios.get(url)
  .then(function (response) {
    console.log(response);
  }) //请求成功时调用
  .catch(function (error) {
    console.log(error);
  }); //请求失败时调用
```
