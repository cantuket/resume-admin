import React, {Component}  from 'react';
import { connect } from 'react-redux'
import * as actions from '../../../../../actions'

class Project extends  Component {
	render() {
		return (
            <div className="row">
                <div className="row">
                    <h2>Features<span style={{fontSize:'2rem'}}> Erin Auctions</span></h2>
                    <div className="col m6">
                        <h5>Advanced JS Animations</h5>
                        <ul>
                            <li>Created subtle scroll and load animations throughout site, including text-spliting, morphing svg, animating svgs and staggered element positioning.</li>

                        </ul>
                        <h5>Advanced Image Mangement</h5>
                        <ul>
                            <li>Images wirtten locally to conserve resources given high volume of uploads</li>
                            <li>On-save transformations for optimized thumbnail and large versions</li>
                            <li>Ability rotate image presentation in admin area</li>
                        </ul>
                        <h5>Customized Social Sharing</h5>
                        <p>Dynamic 'open graph' formatting tags generated per product for detailed Facebook post formatting</p>
                        <p>Pulls content from both th product and related auction data.</p>
                    </div>
                    <div className="col m6">
                        <img src="/images/work/screen-shots/erinauc-scroll-section.png" alt="" width="100%" />
                        <img src="/images/work/screen-shots/erinauc-sharing.png" alt="" width="100%" />
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