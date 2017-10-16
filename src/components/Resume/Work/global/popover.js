import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Popover, {PopoverAnimationVertical} from 'material-ui/Popover';

class PopoverExampleAnimation extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
  }

  handleTouchTap = (event) => {
    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  render() {
    return (
      <div style={this.props.style}>
        <RaisedButton
          onClick={this.handleTouchTap}
          label={this.props.label}
          secondary={true}
        />
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          //anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
          //targetOrigin={{horizontal: 'left', vertical: 'top'}}
          anchorOrigin={this.props.position.anchorOrigin}
          targetOrigin={this.props.position.targetOrigin}
          onRequestClose={this.handleRequestClose}
          animation={PopoverAnimationVertical}
          canAutoPosition={false}
        >
          <div dangerouslySetInnerHTML={{__html: this.props.content}} className="popover-content" />
        </Popover>
      </div>
    );
  }
}

export default  PopoverExampleAnimation