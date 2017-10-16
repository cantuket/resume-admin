import React, {Component}  from 'react';
import { connect } from 'react-redux'
import * as actions from '../../../../../actions'
import ProjectOverview from '../Project'

const data = {};

data.skills =  [
    {tech:[
        'Keystone.js',
        'Jade/Pug',
        'Mongo',
        'Sass',
        'Grunt'
        ]
    },
    {integrations: [
        'Cloudinary',
        'Mandrill',
        'New Relic',
        ]
    }
];

data.photos = [
    {
      src: '/images/work/screen-shots/townhouse-menu.png',
      alt: '',
      width:89,
      height:89,
    },
    {
      src: '/images/work/screen-shots/townhouse.png',
      alt: '',
      width:89,
      height:89,
    }
  ];

data.links = [
    {title: 'Data Model',
    path: '/work/portfolio/townhouse/data-structure',
    image: '/images/work/diagrams/townhouse-data-structure.png'
    },
    {title: 'Features',
    path: '/work/portfolio/townhouse/features',
    image: '/images/work/screen-shots/townhouse-menu.png'
    },
    
];

data.content = {
    title: 'Townhouse Wine Bar',
    body:`<p>
            We worked with a high end restaurant, in the heart of Chicago, to create a beautiful new website and deliver some high quality photography.
        </p>`,
    url: 'townhousewinebar.com'
}

class Project extends  Component {

	render() {
		return (
            <div className="row">
               <ProjectOverview data={data} />
            </div>
		);
	}
}

function mapStateToProps(state) {
  return {
    message: state.auth.message
  }
}

export default connect(mapStateToProps, actions)(Project)