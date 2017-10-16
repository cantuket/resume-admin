import React, {Component} from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions';
import _ from 'lodash'
import BigCalendar from 'react-big-calendar';
import moment from 'moment'
require('react-big-calendar/lib/css/react-big-calendar.css');
import $ from 'jquery'

import RaisedButton from 'material-ui/RaisedButton';
import TimePicker from 'material-ui/TimePicker';
import Autocomplete from 'react-google-autocomplete';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
BigCalendar.momentLocalizer(moment); // or globalizeLocalizer


class MyCalendar extends Component {
  state = {
		open: false,
		dialogContent: {}
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
	};
	
	componentWillMount() {
		this.props.fetchAllMeetings();
	}

	renderDialog (meeting){
		return (
			<Dialog
				title={this.state.dialogContent.title}
				modal={false}
				open={this.state.open}
				onRequestClose={this.handleClose}
			>
			<div>
				<h5>{this.state.dialogContent.location}</h5>
				<h5>{moment(this.state.dialogContent.start).format('ddd MMM Do')}</h5>
			</div>
			</Dialog>
		);
	}

	renderCalendar(){
		if (this.props.meetings.length) {
			var newMeetings = _.map(this.props.meetings, meeting =>{
				return ({
					title:meeting.title,
					start:new Date(meeting.start),
					end:new Date(meeting.end),
					location:meeting.location

				});
			});

			return (
				<BigCalendar
			  selectable
		      defaultView='month'
		      events={newMeetings}
		      startAccessor='start'
		      endAccessor='end'
		      onView={event => console.log(event)}
					defaultDate={new Date()}
					// min={new Date()}
					// components={calendarComponents}
					onSelectEvent={event => {
						this.setState({dialogContent:event});
						this.handleOpen();
						{/* this.renderDialog(event); */}
						}
					}
					onSelectSlot={(slotInfo) => {
						$('#scheduleForm').find('input[name="date"]').val(moment(slotInfo.start).format('MM/DD/YY'));
						}
		      }
		    />
			);
		}
	}
	
  render(){
	return (
		<div className="row" style={{marginTop:'80px'}}>
			<div className="col m6">
				<div>
					{this.renderCalendar()}
					{this.renderDialog()}
				</div>
			</div>
		    <div className="col m4 offset-m1">
		    	<form style={{marginTop:'80px'}} name="scheduleForm" id="scheduleForm"
	        	onSubmit={
		             this.props.handleSubmit((e) => {
		              let values = $('#scheduleForm').serializeArray();
		              let newValues = {};
		              _.map(values, value => {
	              			return (
	              				newValues[value.name] = value.value
	              			);
		              })

		              if (!_.includes(newValues.startTime,':')) {
		              		let str = newValues.startTime,
											chars = str.split('');
											chars.splice(-3, 0, ':00');
											newValues.startTime = chars.join('');
		              } 

		              if (!_.includes(newValues.emdTime,':')) {
		              		let str = newValues.endTime,
											chars = str.split('');
											chars.splice(-3, 0, ':00');
											newValues.endTime = chars.join('');
		              } 

		              newValues.start =  new Date(moment(newValues.date +" "+ newValues.startTime)).toString();
		              newValues.end =  new Date(moment(newValues.date +" "+ newValues.endTime)).toString();

		              this.props.createMeeting(newValues, this.props.history);
		              $('#scheduleForm')[0].reset();
		              this.refs.startTime.setState({time:'',value: ''});
		              this.refs.endTime.setState({time:'',value: ''});
		            })
		        }
	        >
	        <div className="row">
	        	<input type="text" placeholder="< Select Date" name="date" />
	        	 <TimePicker
			      hintText="Start Time"
			      name="startTime"
			      ref="startTime"
			      // minutesStep="15"
			      // value={this.state.startTime} onChange={this.handleInputChange.bind(this)}
			    />
			    <TimePicker
			      hintText="End Time"
			      name="endTime"
			      ref='endTime'
			      // value={this.state.endTime} onChange={this.handleInputChange.bind(this)}
			    />
			    <Autocomplete
				    style={{width: '90%'}}
				    onPlaceSelected={(place) => {
				      console.log(place);
				    }}
				    types={['address']}
				    name="location"
				    // componentRestrictions={{country: "us"}}
				/>
	        </div>  
	          <RaisedButton
	            label="Submit"
	            type="submit"
	            secondary={true}
	            keyboardFocused={true}
	          />
	        </form>
	    </div>
	  </div>
	  );
	}
};

function mapStateToProps({meetings}) {
  return {
    meetings
  };
}

MyCalendar  = reduxForm({
  form: 'scheduleForm',
  enableReinitialize: true,
})(MyCalendar)

MyCalendar  = connect(mapStateToProps,actions)(withRouter(MyCalendar))

export default MyCalendar 