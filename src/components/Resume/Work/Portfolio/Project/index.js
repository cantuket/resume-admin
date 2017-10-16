import React, {Component}  from 'react';
import { Link } from 'react-router-dom'
import SkillsTable from '../../global/table'
import Gallery from '../../global/gallery'
import _ from 'lodash'
import RaisedButton from 'material-ui/RaisedButton';
import ImageNav from '../../global/imageNav'

class Project extends  Component {
    constructor (props){
        super(props);
    }
    
    renderGallery () {
        const newImages =  _.map(this.props.data.photos, (image,i) => {
            let img = new Image();
            img.onload =  function (){
                image.height = img.height;
                image.width = img.width;
            }
            img.src = image.src;
            return image;
        });
        return(<Gallery photos={newImages} />);
    }
	render() {
		return (
            <div className="row">
                <h4>{this.props.data.content.title}</h4>
                <div className="col m8">
                    <div dangerouslySetInnerHTML={{__html:this.props.data.content.body}} />
                    <a href={`http://${this.props.data.content.url}`} target="_blank">
                        <RaisedButton label="Visit Site" style={{marginBottom:'50px'}} secondary={true} />
                    </a>
                    <ImageNav links={this.props.data.links} />
                </div>
                <div className="col m4">
                    <SkillsTable data={this.props.data.skills} />
                    {this.renderGallery()}
                </div>

            </div>
		);
	}
}

export default Project