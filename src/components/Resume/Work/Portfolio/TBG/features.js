import React, {Component}  from 'react';
import { connect } from 'react-redux'
import * as actions from '../../../../../actions'


class Project extends  Component {
	render() {
		return (
            <div className="row">
                <div className="row">
                    <h2>Features<span style={{fontSize:'2rem'}}> | Goldstein &amp; McClintock Website</span></h2>
                    <div className="col m6">
                        <h5> Advanced Booking Forms</h5>
                        <p>Elaborare booking form with conditional field generation and validation.</p>
                        <h5>Advanced JS Animations</h5>
                        <p>Immersive scroll and load animations throughout site, including text-spliting, morphing svg, animating svgs and staggered element positioning.</p>
                    </div>
                    <div className="col m6">
                        <img src="/images/work/screen-shots/tbg-form.png" alt="" width="100%" />
                        <img src="/images/work/screen-shots/tbg-load-map.png" alt="" width="100%" />
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