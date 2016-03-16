const {Paper, TextField, RaisedButton}=mui;
SignUp= React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  handleSubmit(e){
    e.preventDefault();
    let username = this.refs.username.getValue();
    let password = this.refs.password.getValue();
    Accounts.createUser({
      username: username,
      password: password
    },(error)=>{
      if(error){
        console.log(error);
        return;
      }
      this.context.router.push('/account')
    })
  },
  render(){
    return (<Paper zDepth={2}>
      <form onSubmit={this.handleSubmit}>
      <TextField ref='username' floatingLabelText="用户名"/>
      <TextField ref='password' floatingLabelText="密码" type='password'/>
      <RaisedButton label='提交' primary={true} type='submit'/>
      </form>
      </Paper>)
  }
})
