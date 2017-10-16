import React, {Component} from 'react'
import * as actions from '../../../../actions'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {reduxForm, Field} from 'redux-form'
import RaisedButton from 'material-ui/RaisedButton';
import RichText from '../../../global/richText'
import {
    DatePicker,
    Checkbox
  } from 'redux-form-material-ui'
import Drawer from 'material-ui/Drawer'

const fields = [
    {name:'title', type:'text'},
    {name:'startDate', type:'text'},
    {name:'endDate', type:'text'},
    {name:'overview', type:'editor'}
]

class ExperienceCreate extends Component {
    constructor(props) {
        super(props);
        this.state = {open: false};
      }
    
    handleToggle = () => this.setState({open: !this.state.open});

    renderFields() {

        return (            
            <div>
                <div className="row">
                    <div className="col m12">
                        <label>Title</label>
                        <Field component="input" name="title" />
                    </div>
                    <div className="col m5">
                        <label>Start Date</label>
                        <Field 
                            name="startDate" 
                            component={DatePicker} 
                            format={(value, name) => value === '' ? null : (typeof value === 'string') ? new Date(value) : value}
                        />
                    </div>
                    <div className="col m5">
                        <label>End Date</label>
                        <Field 
                            name="endDate" 
                            component={DatePicker} 
                            format={(value, name) => value === '' ? null : (typeof value === 'string') ? new Date(value) : value}
                        />
                    </div>
                    <div className="col m2">
                        <label>Present</label>
                        <Field 
                            name="endDatePresent" 
                            component={Checkbox}
                            type="boolean"
                        />
                    </div>
                    <div className="col m12">
                        <label>Overview</label>
                        <Field
                        component={RichText}
                        type="text" 
                        name="overview"
                        onChange={(value)=> value.toString('html')}
                        />
                    </div>
                </div>
            
            </div>
        );
    }

    render(){
        return (
           <div>
            <RaisedButton
                label="Add Era to Resume"
                onClick={this.handleToggle}
                className="right"
                />
                <Drawer
                openSecondary={true}
                width="40%"
                open={this.state.open}
                docked={false}
                onRequestChange={(open) => this.setState({open})}
                >
                    <form style={{padding:'40px'}} onSubmit={this.props.handleSubmit}>
                        {this.renderFields()}
                        <RaisedButton type="submit" label="Create Era" />
                    </form>
                </Drawer>
            </div>
        );
    }
}

function mapStateToProps (state) {
    return (
        state
    );
}

ExperienceCreate = reduxForm({
    form: 'createExperience',
    fields: ["text"],
    enableReinitialize: true,
  })(ExperienceCreate)

ExperienceCreate = connect(null,actions)(ExperienceCreate)
ExperienceCreate = withRouter(ExperienceCreate)

export default ExperienceCreate
