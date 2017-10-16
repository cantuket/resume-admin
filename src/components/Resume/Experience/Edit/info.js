import React, {Component} from 'react'
import * as actions from '../../../../actions'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {reduxForm, Field} from 'redux-form'
import RaisedButton from 'material-ui/RaisedButton'
import RichTextField from '../../../global/richTextField'
import RichText from '../../../global/richText'
import {
    DatePicker,
    Checkbox
  } from 'redux-form-material-ui'

class ExperienceForm extends Component {
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
            <form onSubmit={this.props.handleSubmit}>
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
                        {/* <Field component="input" name="overview" /> */}
                        {/* <RichTextField name="overview" onChange={(value)=> value.toString('html')}  /> */}
                        {this.renderEditor()}
                    </div>
                </div>
                <RaisedButton label="Update Experience Info" type="submit" />
                <RaisedButton 
                label="Delete Experience Section" 
                onClick={
                    ()=>this.props.deleteExperience(this.props.initialValues._id, this.props.history)
                }
                />
            </form>
        );
    }
}

ExperienceForm = reduxForm({
    form:'updateExperience',
    field:['text'],
    enableReinitialize: true
})(ExperienceForm)

export default connect(null,actions)(withRouter(ExperienceForm))