import React from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import moment from 'moment'
import RaisedButton from 'material-ui/RaisedButton'
import EditForm from './form'

export default class CardExampleControlled extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
  }

  handleExpandChange = (expanded) => {
    this.setState({expanded: expanded});
  };

  handleExpand = () => {
    this.setState({expanded: true});
  };

  handleReduce = () => {
    this.setState({expanded: false});
  };
  unescapeHTML(html) {
      var escapeEl = document.createElement('textarea');
      escapeEl.innerHTML = html;
      return escapeEl.textContent;
  }
  renderEndDate(){
    let theEndDate = '';
    if (this.props.content.endDatePresent === true) { 
      theEndDate = 'Present';
    } else {
      theEndDate =  moment(this.props.content.endDate ).format('MMM YY');
    }

    return ( 
      this.props.content.position +
      ' | '+ 
      moment(this.props.content.startDate ).format('MMM YY')+
      ' - '+
      theEndDate
    );
  }

  handleClick = () =>{
    this.props.editJob(this.props.content);
  }
  render() {
    return (
      <Card  className="col l12" style={{paddingLeft:'20px',backgroundColor:'transparent', boxShadow:'none'}} expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
        <CardHeader
          title={this.props.content.company} 
          subtitle={this.renderEndDate()} 
          // avatar={this.props.content.icon} 
          actAsExpander={true}
          showExpandableButton={true}
          titleStyle={{fontSize:'1.3rem'}}
        />
        <CardText style={{fontWeight:'500',fontStyle:'italic',paddingTop:'0', paddingBottom:'0'}}>
          {this.props.content.summary} 
        </CardText>
        <CardText style={{fontSize:'.9rem',paddingTop:'0'}} className="card-text" dangerouslySetInnerHTML={{__html: this.props.content.overview}} expandable={true}>
        
        </CardText>
        <RaisedButton 
        label="Edit Job" 
        onClick={this.handleClick}
        />
      </Card>
    );
  }
}