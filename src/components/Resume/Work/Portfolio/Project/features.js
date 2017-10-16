import React, {Component}  from 'react';
import { connect } from 'react-redux'
import * as actions from '../../../../../actions'
import _ from 'lodash'

const data = {
    content: {
        project: 'Goldstein &amp; McClintock Website'
    },
    features:[
        {
            title:'Home Page Office Map',
            body:`<ul>
                    <li>Dynamically generated map markers from geo-coordinates and pop-ups from Office Info.</li>
                    <li>All customizable from admin area</li>
                </ul>
                <h5>vCard Generation to S3 Storage</h5>
                <ul>
                    <li>Automatically generate vCards per professional using information from ‘Primary Office’ relationship</li>
                    <li>Optional override for direct phone lines and offices. </li>
                </ul>`,
            image:'/images/work/screen-shots/gm-map.jpg'
        }
    ]
}

class Feature extends  Component {
    renderFeatures (){
       return _.map(data.features, (feature, i) => {
            return (
                <div key={i} className="row">
                    <div className="col m6">
                        <h5>{feature.title}</h5>
                        <div dangerouslySetInnerHTML={{__html:feature.body}} />
                    </div>
                    <div className="col m6">
                        <img src={feature.image} alt="" width="100%" />
                    </div>
                </div>
            );
        })
    }
    
    render() {
		return (
            <div className="row">
                <h4>Features</h4>
                <h6> Goldstein &amp; McClintock Website</h6>
                {this.renderFeatures()}
            </div>
		);
	}
}

// function mapStateToProps(state) {
//   return {
//     message: state.auth.message
//   }
// }

export default connect(null, actions)(Feature)