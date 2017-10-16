import React, {Component} from 'react'
import * as actions from '../../../../../actions'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {reduxForm, Field} from 'redux-form'
import RaisedButton from 'material-ui/RaisedButton';
import fields from './fields'
import Dialog from 'material-ui/Dialog';
import {
    DatePicker,
    Checkbox
  } from 'redux-form-material-ui'
import RichText from '../../../../global/richText'  

class JobForm extends Component {
    state = {
        open: false,
      };
    
      handleOpen = () => {
        this.setState({open: true});
      };
    
      handleClose = () => {
        this.setState({open: false});
      };
    
    renderJobFields (){
        // return fields.map((job,i)=>{
        //     return (
        //         <Field key={i} placeholder={job.name} component="input" name={job.name} type="text" />
        //     );
        // })
        return (
            <div>
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
                <RaisedButton label="Add Job" secondary onClick={this.handleOpen} />
                <Dialog
                title="Add Job"
                //actions={actions}
                modal={false}
                open={this.state.open}
                onRequestClose={this.handleClose}
                autoScrollBodyContent={true}
                >
                    <form onSubmit={this.props.handleSubmit}>
                        {this.renderJobFields()}
                        <RaisedButton onClick={this.handleClose} type="Submit" label="Add Job" secondary />
                    </form>
                </Dialog>
            </div>
        );
    }
}

JobForm = reduxForm({
    form:'createJob',
    field:['text'],
    enableReinitialize: true
})(JobForm);

export default connect(null,actions)(withRouter(JobForm))