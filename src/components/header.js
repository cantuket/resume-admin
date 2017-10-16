import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import _ from 'lodash'

import Drawer from 'material-ui/Drawer';
  import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';
  import RaisedButton from 'material-ui/RaisedButton';

const styles = {
  title: {
    cursor: 'pointer',
  },
  linkBtn: {
    height:'100%',
    borderRadius:0
  }
};

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});
  handleClose = () => this.setState({open: false});
  
  getAuthLinks (authenticated) { 
    if (authenticated) {
      return ([
        // {title:'Welcome',route:'/welcome'},
        {title:'Experience',route:'/experience'},
        // {title:'Work',route:'/work'},
        // {title:'Contact',route:'/contact'},
        {title:'Sign Out',route:'/signout'},
      ]
    );
    } else {
      return([
        {title:'Experience',route:'/experience'},
        {title:'Work',route:'/work'}
      ]);
    }
  }

  renderLinks(){
    let authLinks = this.getAuthLinks(this.props.authenticated);
    let width = 100 / authLinks.length;
    return _.map(authLinks, (link,i) => {
      return (
        <div className="col" style={{width:width+"%"}} key={i}>
          <Link to={link.route}  onClick={this.handleClose}>
            <RaisedButton 
              fullWidth={true} 
              style={styles.linkBtn} 
              label={link.title} 
              primary={true}
              disabled={this.props.currentLocation.pathname.includes(link.route) ? true : false}
            />
          </Link>
        </div>
      );
    })
  }

  renderMobileLinks(){
    let authLinks = this.getAuthLinks(this.props.authenticated);
    return _.map(authLinks, (link,i) => {
      return (
        <Link to={link.route} key={i}>
          <MenuItem 
            onClick={this.handleClose}
            disabled={this.props.currentLocation.pathname.indexOf(link.route) !== -1 ? true : false}
          >{link.title}</MenuItem>
        </Link>
      );
    })
  }

  render() {
    return (
      <nav>
          <div className="row">
            <AppBar
              style={{position:'fixed',top:'0',left:'0'}}
              title="Kyle's Resume"
              iconClassNameRight="muidocs-icon-navigation-expand-more"
              onLeftIconButtonTouchTap={this.handleToggle}
            />
            {/* <Drawer
              style={{zIndex:'100', paddingTop:'80px'}}
              width={200}
              open={true}
              onRequestChange={(open) => this.setState({open})}
            > */}
            <div className="z-depth-2" style={{position:'fixed',left:'0',top:'0',bottom:'0',paddingTop:'80px', width:'200px'}}>
              {this.renderMobileLinks()}
            </div>
            {/* </Drawer> */}
          </div>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  }
}

export default connect(mapStateToProps)(withRouter(Header))