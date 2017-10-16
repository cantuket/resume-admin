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
        'Grunt',
        'Uncss'
        ]
    },
    {integrations: [
        'Cloudinary',
        'Mandrill',
        'New Relic',
        ]
    },
    {libraries:[
        'jQuery Validation',
        'Green Sock Animations',
        'Isotope.js'
        ]
    }
];

data.photos = [
    {
      src: '/images/work/screen-shots/tbg-form.png',
      alt: '',
      width:89,
      height:89,
    },
    {
      src: '/images/work/screen-shots/tbg-screen-shot.png',
      alt: '',
      width:89,
      height:89,
    }
  ];

data.links = [
    {title: 'Data Model',
    path: '/work/portfolio/the-bartend-group/data-structure',
    image: '/images/work/diagrams/tbg-data-structure.png'
    },
    {title: 'Routes',
    path: '/work/portfolio/the-bartend-group/routes',
    image: '/images/work/diagrams/tbg-routes.png'
    },
    {title: 'Features',
    path: '/work/portfolio/the-bartend-group/features',
    image: '/images/work/screen-shots/tbg-load-map.png'
    },
    
];

data.content = {
    title: 'The Bartend Group',
    body:`<p>
             This fast growing event staffing company needed a website that would entice customers, reduce administrative work and be able to scale.
        </p>`,
    url:'thebartendgroup.efficacy.io/chicago'
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