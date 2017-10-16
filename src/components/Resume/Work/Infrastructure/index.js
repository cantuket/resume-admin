import React, {Component}  from 'react';
import Popover from '../global/popover'
import Accordion from '../global/accordion'
import _ from 'lodash'

const popovers = [ 
    {
        label:"Nginx Web Servers",
        style: {
            position:'absolute',
            top:'10%',
            left:'20%'
        },
        position: {
            anchorOrigin: {"horizontal":"right","vertical":"bottom"},
            targetOrigin: {"horizontal":"left","vertical":"bottom"}
        },
        content: `
            <div>
                <h5>Two Failover Nginx Proxies for 13 Sites</h5>
                <p>All of my production and development applications are proxied by Nginx web servers with requests load balanaced by least connections, each running on a 500MB Google Compute Instance.</p>
                <p>Instances are deployed froman instance template, which clones the Nginx configuration from a Github repository and integration is performed by pushing updates from my local machine.</p>
            </div>
        `
    },
    {
        label:"Node Apps",
        style: {
            position:'absolute',
            bottom:'-40px',
            right:'37.5%'
        },
        position: {
            anchorOrigin: {"horizontal":"left","vertical":"top"},
            targetOrigin: {"horizontal":"middle","vertical":"bottom"}
        },
        content: `
            <div>
                <h5>Two Failover Instances for Each App</h5>
                <p>Each application has 2 loadbalnced failover instances, each running on separate 7GB VPSs. All public traffic is distributed to either application instance based off least connections.</p> 
                <p>All authenticated traffic to the 'admin areas' is forced to a specific application instance to prevent downtime even if an application errors from a write operation.</p>

            </div>
        `
    },
    {
        label:"Mongo Cluster",
        style: {
            position:'absolute',
            top:'10%',
            right:'10%'
        },
        position: {
            anchorOrigin: {"horizontal":"left","vertical":"bottom"},
            targetOrigin: {"horizontal":"right","vertical":"bottom"}
        },
        content:`
            <div>
                <h5>Three Node Replica Set</h5>
                <p style={{fontStyle:'italic',fontSize:'.9rem'}}>(Note: I've recently migrated to a managed service on MongoAtlas, but detailed my old configurtion below because it was... well cooler.)</p>
                <p>Until a few months ago I was managing 3 node replica set distributed across 3 500MB/1GB instances on Digital Ocean. I used a small cron job to run daily back-ups to AWS S3.</p>
            </div>
        `

    },
    {
        label:"Object Storage",
        style: {
            position:'absolute',
            top:'55%',
            right:'-15%'
        },
        position: {
            anchorOrigin: {"horizontal":"left","vertical":"bottom"},
            targetOrigin: {"horizontal":"right","vertical":"bottom"}
        },
        content:`
            <div>
                <h5>Images, vCards, PDFs, Chef CookBooks &amp; Mongo Backups</h5>
                <p>S3 is used to store a wide range of file types with for a number of different uses. Prior to the curret infrastructure configuration I was using AWS OpsWorks to automate developments and I was using 3S to store my ChefCookbooks.</p>  
                <p>Now S3 is only used for storage of images and dynamically generated vCards from a majority of the node apps.</p> 
            </div>
        `
    }
];


const accordionItems = _.map(popovers, (item, i) => {
    return ({[item.label]:item.content});
});

class Project extends  Component {
    renderPopovers(){
        return _.map(popovers, (popover,i) =>{
            return (
                <Popover key={i} position={popover.position} style={popover.style} label={popover.label} content={popover.content} />
            );
        })
    }
	render() {
		return (
            <div className="row">
                <h2>Infrastructure Overview</h2>
                <div className="col m10 offset-m1" style={{position:'relative'}}>
                    <img style={{paddingTop:'10%'}} alt="" src="/images/work/diagrams/eio-infrastructure.png" width="100%" />
                    <div className="hide-on-small-only	">
                        {this.renderPopovers()}
                    </div>
                </div>
                <div className="col s12 hide-on-med-and-up">
                    <Accordion data={accordionItems} />
                </div>
            </div>
		);
	}
}

export default Project