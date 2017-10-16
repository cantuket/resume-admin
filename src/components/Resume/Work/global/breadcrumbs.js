import React, {Component} from 'react'
import * as actions from '../../../../actions'
import {withRouter, Link} from 'react-router-dom'
import {connect} from 'react-redux'
import _ from 'lodash'

class Breadcrumbs extends Component {

    replaceAll(str, find, replace) {
        return str.replace(new RegExp(find, 'g'), replace);
    }
    // toTitleCase(str) {
    //     return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    // }
    renderBreadcrumb() {
        const allRoutes = this.props.location.pathname.split('/');
        if (allRoutes.length > 2) {
            return _.map(allRoutes, (route, i)=>{
                if (i > 0) {
                    let loop = 1;
                    let thePath = '';
                    while(loop <= i ) {
                        thePath = thePath +'/'+ allRoutes[loop]; 
                        loop++;
                    }
                    let cleanPath = this.replaceAll(route,'-',' ').toUpperCase();
                    if (i === allRoutes.length - 1) {
                        return (
                            <span key={i} className='grey-text' style={{display:'inline-block',float:'left', marginRight:'20px'}}> 
                                {cleanPath}
                            </span>
                        );
                    } else {
                        return (
                            <span key={i} style={{display:'inline-block',float:'left', marginRight:'20px'}}> 
                                <Link to={thePath}>{cleanPath} ></Link>
                            </span>
                        );
                    }
                }
            });
        }
    }
    render(){
        return (
            <div className="row" style={{marginTop:'30px'}}>
                {this.renderBreadcrumb()}
            </div>
        );
    }
}

function mapStateToProps (state) {
    return (state);
}

Breadcrumbs =  connect(mapStateToProps,actions)(Breadcrumbs)
Breadcrumbs = withRouter(Breadcrumbs)

export default Breadcrumbs