import React, {Component} from 'react'
import * as actions from '../../../../../actions'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {reduxForm, Field} from 'redux-form'
import RaisedButton from 'material-ui/RaisedButton'
import _ from 'lodash'
import RichText from '../../../../global/richText'
import {
    DatePicker,
    Checkbox
  } from 'redux-form-material-ui'


class JobForm extends Component {
    renderEditor () {
        if (this.props.initialValues.overview !== undefined){
             return (
                 <Field
                 component={RichText}
                 initialValue={this.props.initialValues.overview}
                 type="text" 
                 name="overview"
                 onChange={(value)=> value.toString('html')}
                 />
             );
         }
     }
    render(){
        return (
            <form 
            id={`job_form${this.props.key}`} 
            style={{padding:'40px'}} 
            onSubmit={this.props.handleSubmit}
            >
                <div className="row">
                    <div className="col m4">
                        <label>Company</label>
                        <Field component="input" name="company" />
                    </div>
                    <div className="col m4">
                        <label>Location</label>
                        <Field component="input" name="location" />
                    </div>
                    <div className="col m4">
                        <label>Position</label>
                        <Field component="input" name="position" />
                    </div>
                </div>
                <div className="row">
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
                </div>
                <div className="row">
                <div className="col m12">
                    <label>Summary</label>
                        <Field component="input" name="summary" />
                    </div>
                    <div className="col m12">
                        <label>Overview</label>
                        {this.renderEditor()}
                    </div>
                </div>
                <RaisedButton type="submit" label="Update Job" secondary />
                <RaisedButton 
                label="Delete Job" 
                secondary
                onClick={
                    // ()=>console.log(this.props.initialValues._id,this.props.experienceId)
                    ()=>this.props.deleteJob(this.props.initialValues._id, this.props.experienceId)
                } 
                />
            </form>
        );
    }
}

JobForm = reduxForm({
    form:'updateJob',
    field:['text'],
    enableReinitialize: true
})(JobForm)

export default connect(null,actions)(JobForm)