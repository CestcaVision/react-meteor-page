const { Tabs, Tab } = mui;
NavBar = React.createClass({
  getInitialState() {
    return {
      value: '/home'
    };
  },
  componentWillReceiveProps() {
    this.setState({
      value: this._getSelectedIndex()
    });
  },
  componentWillMount() {
    this.setState({
      value: this._getSelectedIndex()
    });
  },
  _getSelectedIndex() {
    return this.context.router.isActive('/home')?'/home':
           this.context.router.isActive('/signup')?'/signup':
           this.context.router.isActive('/account')?'/account':
           this.context.router.isActive('/login')?'/login':'/home';
  },
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  _handleChange(value) {
    this.context.router.push(value);
  },
  render() {
    let currentUser = this.props.currentUser;
    let logoutMenu;
    if(currentUser){
      logoutMenu= (
        <LogOutMenu currentUser={currentUser}/>
      )
    }else {
      logoutMenu = '';
    }
    return (
      <div>
        <Tabs onChange={this._handleChange} value={this.state.value}>
          <Tab label="Home" value="/home" />
          <Tab label={currentUser?'Account' : 'Sign Up'}
               value={currentUser?'/account' : '/signup'} />
          <Tab label="Log In" value="/login" />
        </Tabs>
        {logoutMenu}
      </div>
    );
  }
});
