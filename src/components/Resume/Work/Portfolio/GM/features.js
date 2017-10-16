import React, {Component}  from 'react';
import { connect } from 'react-redux'
import * as actions from '../../../../../actions'

class Project extends  Component {
	render() {
		return (
            <div className="row">
                <div className="row">
                    <h4>Features</h4>
                    <h6> Goldstein &amp; McClintock Website</h6>
                    <div className="col m6">
                        <h5>Home Page Office Map</h5>
                        <ul>
                            <li>Dynamically generated map markers from geo-coordinates and pop-ups from Office Info.</li>
                            <li>All customizable from admin area</li>
                        </ul>
                        <h5>vCard Generation to S3 Storage</h5>
                        <ul>
                            <li>Automatically generate vCards per professional using information from ‘Primary Office’ relationship</li>
                            <li>Optional override for direct phone lines and offices. </li>
                        </ul>
                    </div>
                    <div className="col m6">
                        <img src="/images/work/screen-shots/gm-map.jpg" alt="" width="100%" />
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