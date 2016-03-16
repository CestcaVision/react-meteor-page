const { Tabs, Tab, IconButton } = mui;

NavBar = React.createClass({
  getInitialState() {
    return {
      tabIndex: ''
    };
  },

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  componentWillMount() {
    this.setState({
      tabIndex: this._getSelectedIndex(),
    });
  },

  componentWillReceiveProps(nextProps) {
    this.setState({
      tabIndex: this._getSelectedIndex(),
    });
  },

  _handleTabsChange(value) {
    this.context.router.push(value);
    this.setState({tabsIndex: this._getSelectedIndex()});
  },

  _getSelectedIndex() {
    return this.context.router.isActive('/home') ? '/home' :
      this.context.router.isActive('/signup') ? '/signup' :
      this.context.router.isActive('/account') ? '/account' :
      this.context.router.isActive('/chat') ? '/chat' :
      this.context.router.isActive('/login') ? '/login' : '';
  },

  render() {
    let currentUser = this.props.currentUser;
    let logOutMenu;
    if(currentUser) {
      logOutMenu = (
        <LogOutMenu currentUser={currentUser} />
      );
    } else {
      logOutMenu = '';
    }
    return (
      <div className="app-header">
        <Tabs value={this.state.tabIndex}
          onChange={this._handleTabsChange}>
          <Tab
            label='111'
            value='/home' />
          <Tab
            label={ currentUser ? '222' : '333' }
            value={ currentUser ? '/account' : '/signup' }/>
          <Tab
            label={ currentUser ? '444' : '555' }
            value={ currentUser ? '/chat' : '/login' } />
        </Tabs>
        { logOutMenu }
      </div>
    );
  }
});
