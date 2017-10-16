import React, {Component}  from 'react';
import Popover from '../../global/popover'
import Accordion from '../../global/accordion'
import _ from 'lodash'

const popovers = [
    {
        label:'Multiple Domains',
        style: {
            position:'absolute',
            bottom:'0',
            left:'25%'
        },
        position: {
            anchorOrigin: {"horizontal":"right","vertical":"bottom"},
            targetOrigin: {"horizontal":"left","vertical":"bottom"}
        },
        content: `
            <div>
                <h5>Multiple Domains, Custom Landing Pages</h5>
                <ul>
                    <li>Client requested we point 3 domain names to their site with different content on the landing page of each domain. </li>
                    <li>To prevent SEO erosion from duplicate content, all routes for restructuringshop.com and financelaw.com have canonical link tags pointing to their respective page on the main golmclaw.com domain.</li>
                </ul>
            </div>    
        `
    },    
    {
       label:'URL Mapping',
        style: {
            position:'absolute',
            top:'0',
            right:'10%'
        },
        position: {
            anchorOrigin: {"horizontal":"left","vertical":"top"},
            targetOrigin: {"horizontal":"middle","vertical":"bottom"}
        },
        content: `
            <div>
                <h5>Old ‘professionals’ URLs preserved</h5>
                <ul>
                    <li>While creating new ‘pretty URLS’ for the bios sections, we also mapped these to ‘ugly URLs’ from their previous site to prevent even a temporary removal of established sub-links from Google Search. </li>
                    <li>All customizable from admin area.</li>
                </ul>
            </div>
        `
    },
    {
        label:'Server Side Rendering',
        style: {
            position:'absolute',
            bottom:'100px',
            right:'-15%'
        },
        position: {
            anchorOrigin: {"horizontal":"left","vertical":"bottom"},
            targetOrigin: {"horizontal":"right","vertical":"bottom"}
        },
        content: `
                <div>
                    <h5>Server Rendered Home Page Scroll Sections</h5>
                    <ul>
                        <li>Server-side rendered Office and State Experience sections in scroll-sections modals.</li>
                    </ul>
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
                <h2>Routes<span style={{fontSize:'2rem'}}> Goldstein &amp; McClintock Website</span></h2>
                <div className="col m10 offset-m1" style={{position:'relative'}}>
                    <img src="/images/work/diagrams/gm-routes.png" alt="" width="100%" />
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