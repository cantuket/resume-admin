import React, {Component}  from 'react';
import { connect } from 'react-redux'
import * as actions from '../../../../../actions'

class Project extends  Component {
	render() {
		return (
            <div className="row">
                <h2>Routes<span style={{fontSize:'2rem'}}> The Bartend Group</span></h2>
                <div className="col m4">
                <p>To accomodate the expansion into new markets, whil mainting an unified brand and simplified administration, we created a site that can generate market specific landing pages through the dmin area.</p>
                </div>
                <div className="col m8">
                    <div className="col m10 offset-m1" style={{position:'relative'}}>
                        <img src="/images/work/diagrams/tbg-routes.png" alt="" width="100%" />
                    </div>
                </div>
            </div>
		);
	}
}

function mapStateToProps(state) {
  return {
    message: state.auth.message
  }
}

export default connect(mapStateToProps, actions)(Project)