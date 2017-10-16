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
        'Green Sock Animations',
        'Isotope.js',
        'PhotoSwipe'
        ]
    }
];

data.photos = [
    {
      src: '/images/work/diagrams/erin-auctions-data-structure.png',
      alt: '',
      width:89,
      height:89,
    },
    {
      src: '/images/work/screen-shots/erinauc-scroll-section.png',
      alt: '',
      width:89,
      height:89,
    }
  ];

data.links = [
    {title: 'Data Model',
    path: '/work/portfolio/erin-auctions/data-structure',
    image: '/images/work/diagrams/erin-auctions-data-structure.png'
    },
    {title: 'Features',
    path: '/work/portfolio/erin-auctions/features',
    image: '/images/work/screen-shots/erinauc-scroll-section.png'
    },
    
];

data.content = {
    title: 'Erin Auctions',
    body:`<p>
    This Canadian auction house needed a way to keep their customers engaged so we built them some customized tools to post their auctions and products. We did extensive optimizations to allow them to present high-def images of products while maintaing fast page load times.
        </p>`,
    url:'erinauctions.com'
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