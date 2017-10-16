import React, {Component} from 'react'
import * as actions from '../../../../actions'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'
import _ from 'lodash'

class ExperienceListContainer extends Component {
    componentDidMount(){
        this.props.fetchExperiences();
    }
    renderExperiences () {
        if (this.props.experiences.length) {
            return _.map(_.sortBy(this.props.experiences,'startDate').reverse(),(experience,i) => {
                return (
                    <div key={i} className="col m4">
                        <Link to={`/experience/${experience._id}`}>
                            <h5>{experience.title}</h5>
                            {
                            experience.jobs.map((job,i) =>{
                                 return (<h6 key={i}>{job.company}</h6>);
                             })
                            }
                        </Link>
                    </div>
                );
            })
        }
    }
    
    render(){
        return (
            <div>
               {this.renderExperiences()}
            </div>
        );
    }
}

function mapStateToProps (state) {
    return (
        {experiences:state.experiences}
    );
}

ExperienceListContainer = connect(mapStateToProps,actions)(ExperienceListContainer)
ExperienceListContainer = withRouter(ExperienceListContainer)

export default ExperienceListContainer
