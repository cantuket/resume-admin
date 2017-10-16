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
        'AWS S3',
        'Cloudinary',
        'Mandrill',
        'New Relic',
        ]
    },
    {libraries:[
        'Isotope.js',
        'Leaflet.js',
        ]
    }
];

data.photos = [
    {
      src: '/images/work/screen-shots/gm-home-pg.png',
      alt: '',
      width:89,
      height:89,
    },
    {
      src: '/images/work/screen-shots/gm-screen-shot.png',
      alt: '',
      width:89,
      height:89,
    }
  ];

data.links = [
    {title: 'Data Model',
    path: '/work/portfolio/goldstein-mcclintock/data-structure',
    image: '/images/work/diagrams/gm-data-structure.png'
    },
    {title: 'Routes',
    path: '/work/portfolio/goldstein-mcclintock/routes',
    image: '/images/work/diagrams/gm-routes.png'
    },
    {title: 'Features',
    path: '/work/portfolio/goldstein-mcclintock/features',
    image: '/images/work/screen-shots/gm-map.jpg'
    },
    
];

data.content = {
    title: 'Goldstein & McClintock Website',
    body:`<p>
            A boutique corporate law firm needed a polished and professional website to reflect the 'white glove' nature of the firm. We implemented advanced SEO tactics to mainain all of the search rankings during the transition.
        </p>`,
    url:'goldmclaw.com'
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