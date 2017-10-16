import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import _ from 'lodash'

const styles = {
    link: {border:'2px solid #000', borderLeft:'none', overflow:'hidden'},
    linkFirst: {border:'2px solid #000',overflow:'hidden'}
}
class ImageNav extends Component {

    renderLinks () {
        return _.map(this.props.links, (link,i) => {
            return (
                <Link key={i}  className="col m4 s12" to={link.path}>
                    <div className="row" style={ i < 1 ? styles.linkFirst : styles.linkFirst}>
                        <div className="col s12" style={{marginBottom:'20px'}}>
                            <h5 className="black-text center-align">{link.title}</h5>
                        </div>
                        <div style={{height:'150px'}} className="col m12 hide-on-small-only">
                            <img src={link.image} width="100%" alt="" />
                        </div>
                    </div>
                </Link>
            );
        });
    }

    render() {
        return (
            <div className="row">
                {this.renderLinks()}
            </div>
        );
    }
}

export default ImageNav