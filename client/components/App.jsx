App = React.createClass({
    mixins:[ReactMeteorData],
    getMeteorData(){
      return {
      currentUser:Meteor.user()
      }
    },
    render(){
          return (
            <div>
              <NavBar currentUser={this.data.currentUser}/>
              {this.props.children}
            </div>
          )
        }
})
