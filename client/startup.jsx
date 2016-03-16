const {Router, Route, IndexRoute}= ReactRouter;
Meteor.startup(
 function(){
 ReactDOM.render(
<Router history={browserHistory}>
<Route path='/' component={App}>
<Route path='/home' component={Home}/>
<Route path='/signup' component={SignUp}/>
<Route path='/login' component={LogIn}/>
<Route path='/account' component={Account}/>
<Route path='/chat' component={Chat}/>
<IndexRoute component={Home}/>
</Route>
</Router>
   ,document.getElementById('container'))
 }
)
