import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import queryString from 'query-string'
import * as actions from '../../actions'
import {Col, Row} from 'react-grid-system'

class UrlsIgnin extends Component {

  componentDidMount () {  
      const signinParams = queryString.parse(this.props.location.search);

      if (signinParams.password && signinParams.user) {
       this.props.signinUrl(signinParams.user, signinParams.password, this.props.history);
      }
  }

  checkAuth (){
    console.log(this.props);
  }

  render() {
    return (
      <div>
        <Row>
          <Col md={3}>
            {this.checkAuth()}
          </Col>
        </Row>
       
      </div>
    );
  }
}

// function mapStateToProps({listing}) {
//   return {listing};
// }

UrlsIgnin = connect(null,actions)(UrlsIgnin)

export default UrlsIgnin
