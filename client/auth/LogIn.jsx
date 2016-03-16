const {Card,RaisedButton, TextField} = mui;
LogIn= React.createClass({
  contextTypes: {
  router: React.PropTypes.object.isRequired
},
  onSubmitLogin(e){
    e.preventDefault();
    let username = this.refs.username.getValue();
    let password = this.refs.password.getValue();
    Meteor.loginWithPassword({username:username},password,(error)=>{
      if(error){
        console.log(error);
        return;
      }
      this.context.router.push('/account')
    })
  },
  render(){
    return (
      <Card>
      <form onSubmit={this.onSubmitLogin}>
      <TextField ref='username' floatingLabelText="用户名"/>
      <TextField ref='password' floatingLabelText="密码" type='password'/>
      <RaisedButton label='登录' primary={true} type='submit'/>
      </form>
      </Card>
    )
  }
})
