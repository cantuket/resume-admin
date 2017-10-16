import React, {Component} from 'react'
import * as actions from '../../../../actions'
import {connect} from 'react-redux'
import {Link, withRouter} from 'react-router-dom'
import {Field, reduxForm} from 'redux-form'
import JobForm from './Jobs/form'
import AddJob from './Jobs/create'
import ExperienceInfo from './info'
import RichTextEditor from 'react-rte'
import RaisedButton from 'material-ui/RaisedButton';
import JobsList from './Jobs/single'
import Drawer from 'material-ui/Drawer'

class ExperienceEditContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open:false,
            jobForm: {} 
        };
        this.editJobForm = this.editJobForm.bind(this);
      }
    
    handleToggle = () => this.setState({open: !this.state.open});
    
    componentDidMount(){
        this.props.fetchExperience(this.props.match.params.experienceId);
    }

    
    componentWillReceiveProps (newProps){
        this.props = newProps;
    }

    editJobForm (job){
        console.log(this);
        this.setState({
            open: !this.state.open,
            jobForm:job
        });
    }
    renderJobs(){
        if (this.props.experience.jobs) {
            return this.props.experience.jobs.map((job,i)=>{
                return (
                    <JobsList editJob={this.editJobForm} key={i} content={job} />
                );
            })
        }

    }
    renderEditorText(me){
        if (this.props.experience.overview !== undefined){
            let it  = this.props.experience.overview;
            return (
                <div dangerouslySetInnerHTML={{__html:it}} />
            );
        }
    }
    render(){
        return (
            <div className="row">
                <div style={{marginTop:'30px',marginBottom:'30px'}} className="col s12">
                    <Link to="/experience">
                        <RaisedButton label="Back to Experiences List" primary />
                    </Link>
                </div>
                <div className="col m6">
                    <ExperienceInfo  
                        onSubmit={values=>this.props.updateExperience(values, this.props.experience._id)}
                        initialValues={this.props.experience} 
                    />
                   {this.renderEditorText()}
                    <AddJob 
                        onSubmit={values=>this.props.createJob(values, this.props.experience._id)}
                    />
                </div>
                <div className="col m6">

                    {this.renderJobs()}
                </div>
                <Drawer
                openSecondary={true}
                width="40%"
                open={this.state.open}
                docked={false}
                onRequestChange={(open) => this.setState({open})}
                >
                <JobForm 
                    onSubmit={(values)=> { 
                      this.props.updateJob(values, values._id,this.props.experience._id );
                      this.setState({open:false});
                    }
                    } 
                    initialValues={this.state.jobForm}
                    data={this.state.jobForm}
                    experienceId={this.props.experience._id}
                />
                </Drawer>
            </div>
        );
    }
}

function mapStateToProps (state) {
    return {
        experience:state.experience
    };
}

ExperienceEditContainer = connect(mapStateToProps,actions)(withRouter(ExperienceEditContainer))

export default ExperienceEditContainer
