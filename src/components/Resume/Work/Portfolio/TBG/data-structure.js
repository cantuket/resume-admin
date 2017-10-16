import React, {Component}  from 'react';
import { connect } from 'react-redux'
import * as actions from '../../../../../actions'

class Project extends  Component {
	render() {
		return (
            <div className="row">
                <h2>Data Model<span style={{fontSize:'2rem'}}>  The Bartend Group</span></h2>
                <div className="row">
                    <div className="col m4">
                        <h5>Multi-site Capabilities</h5>
                        <p>To accomodate the expansion into new markets, whil mainting an unified brand and simplified administration, we created a site that can generate market specific landing pages through the dmin area.</p>
                        <p>Ability to customize much of the content per market, while streamlining the booking request system.</p>
                    </div>
                    <div className="col m8">
                        <div className="col m10 offset-m1">
                            <img src="/images/work/diagrams/tbg-data-structure.png" alt="" width="100%" />
                        </div>
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