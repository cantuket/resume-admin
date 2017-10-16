import React, {Component}  from 'react';
import { connect } from 'react-redux'
import * as actions from '../../../../../actions'

class Project extends  Component {
	render() {
		return (
            <div className="row">
                <div className="row">
                    <h2>Features<span style={{fontSize:'2rem'}}>  Townhouse Wine Bar</span></h2>
                    <div className="col m6">
                        <h5>Content Managed Menus</h5>
                        <ul>
                            <li>Provide ability to manage all aspects of the 'Menu Item' content from the admin area.</li>
                        </ul>
                        <h5>High-level Photography & Design</h5>
                        <ul>
                            <li>The photography was performed by 2 separate photographers, food expert and live-action expert, to highlight the best atributes of the business. The design and sketches were created by an extraordinarilly skilled designer.</li>
                        </ul>
                    </div>
                    <div className="col m6">
                        <img src="/images/work/screen-shots/townhouse-menu.png" alt="" width="100%" />
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