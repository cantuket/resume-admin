import React, {Component}  from 'react';
import { connect } from 'react-redux'
import * as actions from '../../../../../actions'

class Project extends  Component {
	render() {
		return (
            <div className="row">
                <h2>Data Model<span style={{fontSize:'2rem'}}> Erin Auctions</span></h2>
                <div className="row">
                    <div className="col m4">
                        <h5>Flexible Auction Management</h5>
                        <p>The one-to-many Auction-to-Product relationship allows for very rapid and flexible auction manament capabilities, including 'draft mode' viewing, programmable defaults.</p>
                        <h5>Detailed 'Classifieds' Management</h5>
                        <p>Up to 7 images per classified, easy sorting and positioning, contact form integration with relationship to selected item.</p>
                    </div>
                    <div className="col m8">
                        <div className="col m10 offset-m1">
                            <img src="/images/work/diagrams/erin-auctions-data-structure.png" alt="" width="100%" />
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