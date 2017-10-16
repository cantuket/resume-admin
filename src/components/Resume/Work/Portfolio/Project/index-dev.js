import React, {Component}  from 'react';
import { Link } from 'react-router-dom'
import SkillsTable from '../../global/table'
import Gallery from '../../global/gallery'
import _ from 'lodash'
import RaisedButton from 'material-ui/RaisedButton';
import ImageNav from '../../global/imageNav'
import Features from './features'

const data = {};

data.skills =  [
    {
    tech:[
        'Keystone.js',
        'Jade/Pug',
        'Mongo',
        'Sass',
        'Grunt',
        'Uncss'
        ]
    },
    {
    integrations: [
        'AWS S3',
        'Cloudinary',
        'Mandrill',
        'New Relic',
        ]
    },
    {
    libraries:[
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

data.featureSection = {
    content: {
        project: 'Goldstein &amp; McClintock Website'
    },
    features:[
        {
            title:'Home Page Office Map',
            body:`<ul>
                    <li>Dynamically generated map markers from geo-coordinates and pop-ups from Office Info.</li>
                    <li>All customizable from admin area</li>
                </ul>
                <h5>vCard Generation to S3 Storage</h5>
                <ul>
                    <li>Automatically generate vCards per professional using information from ‘Primary Office’ relationship</li>
                    <li>Optional override for direct phone lines and offices. </li>
                </ul>`,
            image:'/images/work/screen-shots/gm-map.jpg'
        }
    ]
}

class Project extends  Component {
    constructor (props){
        super(props);
        console.log(this.props.match.params);
    }

    componentDidMount(){
        let project = this.props.match.params.project;
        let section = this.props.match.params.section;     
        //fetch datat
    }
    
    renderGallery () {
        const newImages = _.map(data.photos, (image,i) =>{
            let img = new Image();
            img.onload = function(){
                image.height = img.height;
                image.width = img.width;
            }
            img.src = image.src;
            return image;
        });
        return (<Gallery photos={newImages} />);
    }
    renderOverview () {
        return (
            <div>
                <h4>{data.content.title}</h4>
                <div className="col m8">
                    <div dangerouslySetInnerHTML={{__html:data.content.body}} />
                    <a href={`http://${data.content.url}`} target="_blank">
                        <RaisedButton label="Visit Site" style={{marginBottom:'50px'}} secondary={true} />
                    </a>
                    <ImageNav links={data.links} />
                </div>
                <div className="col m4">
                    <SkillsTable skills={data.skills} />
                    {this.renderGallery()}
                </div>
            </div>
        );
    }

    renderPortfolioSection() {
        const sections = ['features', 'routes','data-structure'];
        if (this.props.match.params.section ) {
            let sectionComponents = {
                'features': Features,
                // 'routes':Routes,
                // 'data-structure':DataStructure
                // && sections.indexOf(section) > -1
            }
            const Section = sectionComponents[this.props.match.params.section];
            return <Section data={data} />
        }

    }
	render() {
		return (
            <div className="row">
            {this.renderPortfolioSection()}
            </div>
		);
	}
}

export default Project