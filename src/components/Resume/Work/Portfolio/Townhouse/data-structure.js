import React, {Component}  from 'react';
import { connect } from 'react-redux'
import * as actions from '../../../../../actions'


class Project extends  Component {
	render() {
		return (
            <div className="row">
                <h2>Data Model<span style={{fontSize:'2rem'}}>  Townhouse Wine Bar</span></h2>
                <div className="row">
                    <div className="col m4">
                        <p>The data model for this application is fairly simple and flat because there aren't many relationships between the collections.</p>
                        <p>The 'Drink' collections were given their own 'Category' collections due to the diverse and changing categorization. All menu items can be positioned with a drag-and-drop UI in the admin area.</p>
                    </div>
                    <div className="col m8">
                        <div className="col m10 offset-m1">
                            <img src="/images/work/diagrams/townhouse-data-structure.png" alt="" width="100%" />
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