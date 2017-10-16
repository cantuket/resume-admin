import React, {Component} from 'react'
import * as actions from '../../../actions'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import ExperienceList from './List'
import ExperienceCreate from './Create'

class ExperienceContainer extends Component {
    render(){
        return (
            <div className="row">
                <div className="col s12" style={{marginTop:'30px',marginBottom:'30px'}}>
                    <ExperienceCreate onSubmit={values=>this.props.createExperience(values,this.props.history)} />
                </div>
                <div className="col m12">
                    <ExperienceList />
                </div>
            </div>
        );
    }
}

function mapStateToProps (state) {
    return (
        state
    );
}

ExperienceContainer = connect(mapStateToProps,actions)(ExperienceContainer)
ExperienceContainer = withRouter(ExperienceContainer)

export default ExperienceContainer
