import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import { Link } from 'react-router-dom'

const styles = {
  root: {
    display: 'inline-block',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: '100%',
    height: 'auto',
    overflowY: 'auto',
  },
};

const tilesData = [
  {
    img: '/images/work/screen-shots/gm-screen-shot.png',
    title: 'Goldstein & McClintock',
    url:'goldmclaw.com',
    slug: 'goldstein-mcclintock',
  },
  {
    img: '/images/work/screen-shots/townhouse.png',
    title: 'Townhouse Wine Bar',
    slug:'townhouse',
    url: 'townhousewinebar.com',
  },
  {
    img: '/images/work/screen-shots/erin-auctions.png',
    title: 'Erin Auctions',
    url: 'erinauctions.com',
    slug:'erin-auctions',
  },
  {
    img: '/images/work/screen-shots/tbg-screen-shot.png',
    title: 'The Bartend Group',
    slug:'the-bartend-group',
    url: 'thebartendgroup.efficacy.io',
  },
];

const tilesData2 = [
  {
    img: '/images/projects/p2p/listing-item.gif',
    title: 'Peer-to-peer Marketplace',
    url:'p2p.endbehavior.com',
    slug: 'p2p-app',
  },
  {
    img: '/images/projects/resume/booking.gif',
    title: 'Resume App',
    slug:'resume-app',
    url: 'resume.endbehavior.com',
  }
];


const GridListExampleSimple = () => (
  <div style={styles.root} className="row">
     <div className="row"> 
      <div className="col m10 offset-m1">
        <h2 className="center-align">My Work</h2>
        <h6 className="center-align">
          The sections below provides an overview of my programming experience to date and the direction I'm headed. I did all of the front and back end coding for the projects listed, as well as design for about half of them.
          <br/><br/>
          This is a living document in an unfinished state, but it is being updated daily so I apologize for any bugs or discrepancies you encounter.
        </h6>
      </div>
    </div>
    <div className="row">
        
      <div className="col m4">
        <Link to="/work/portfolio">
          <h4  className="black-text center-align">Portfolio</h4>
        </Link>
        <GridList
          cellHeight={100}
          style={styles.gridList}
        >
          {tilesData.map((tile, i) => (
            <Link key={i} to={`/work/portfolio/${tile.slug}`}>
            <GridTile
              key={tile.img}
            >
              <img src={tile.img} alt="" />
            </GridTile>
            </Link>
          ))}
        </GridList>
      </div>
      <div className="col m4">
        <Link to="/work/react-projects">
          <h4  className="black-text center-align">React Projects</h4>
        </Link>
        <GridList
          cellHeight={100}
          style={styles.gridList}
        >
          {tilesData2.map((tile, i) => (
            <Link key={i} to={`/work/react-projects/${tile.slug}`}>
            <GridTile
              key={tile.img}
            >
              <img src={tile.img} alt="" />
            </GridTile>
            </Link>
          ))}
        </GridList>
      </div>
      <div className="col m4">
        <Link to="/work/infrastructure">
          <h4  className="black-text center-align">Infrastructure</h4 >
        </Link>
        <img src="/images/work/diagrams/eio-infrastructure.png" width="100%" alt="" />
      </div>
    </div>

  </div>
);

export default GridListExampleSimple;