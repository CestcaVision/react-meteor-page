const {Card, TextField, RaisedButton} = mui;

Account= React.createClass({
  getInitialState() {
    return {
      user: {},
    };
  },
  handleSubmit(e) {
    e.preventDefault();
    const username = this.refs.username.getValue();
    const url = `https://api.github.com/users/${username}`;

    HTTP.call('get', url, (error, res) => {
      if(error) {
        console.log(error);
      } else {
        this.setState({user: JSON.parse(res.content)})
      }
    });
  },
  _handleClick(e) {
    e.preventDefault();

    Meteor.call('userProfile', this.state.user, (error) => {
      if(error) {
        console.log(error);
        return;
      }
      this.context.router.push('/chat');
    });
  },
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  render(){
    let GitHubInfo;

    if(!_.isEmpty(this.state.user)) {
      GitHubInfo = (
        <div>
          <UserInfo userInfo={this.state.user} />

          <RaisedButton
            primary={true}
            label="save"
            onClick={this._handleClick} />
        </div>
      );
    }
    return (
      <Card>
      <form onSubmit={this.handleSubmit}>
      <TextField ref='username'/>
      <RaisedButton label="SEARCH GITHUB" type='submit' primary={true}/>
      </form>
      {GitHubInfo}
      </Card>
    )
  }
})
