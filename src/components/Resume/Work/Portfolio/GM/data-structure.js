import React, {Component}  from 'react';
import { connect } from 'react-redux'
import * as actions from '../../../../../actions'

class Project extends  Component {
	render() {
		return (
            <div className="row">
                <h2>Data Model<span style={{fontSize:'2rem'}}> Goldstein &amp; McClintock Website</span></h2>
                <div className="row">
                    <div className="col m4">
                        <p>Central to the site is the Professionals collection and its relationships to most other collections on the site, allowing for seamless content changes.</p>
                        <p>There is almost no static typed content on the site, except for highly formatting dependent Home Page content, making site highly maintainable and scalable.</p>
                    </div>
                    <div className="col m8">
                        <div className="col m10 offset-m1">
                            <img src="/images/work/diagrams/gm-data-structure.png" alt="" width="100%" />
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