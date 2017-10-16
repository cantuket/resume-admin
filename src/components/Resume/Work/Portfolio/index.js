import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import { Link } from 'react-router-dom'

const styles = {
  root: {
    display: 'flex',
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

const tilesDataSmall = [
  {
    img: '/images/work/screen-shots/devour.png',
    title: 'Devour Agency',
    url: 'devouragency.com',
  },
  {
    img: '/images/work/screen-shots/end-behavior.png',
    title: 'End Behavior',
    url: 'endbehavior.com',
  },
  {
    img: '/images/work/screen-shots/grillroom.png',
    title: 'Grillroom Chicago',
    url: 'grillroom-chicago.com',
  },
  {
    img: '/images/work/screen-shots/wolverine.png',
    title: 'Wolverine Partners',
    url: 'wolverinepartners.com',
  },
  {
    img: '/images/work/screen-shots/eio.png',
    title: 'Efficacy I/O',
    url: 'efficacy.io',
  },
  {
    img: '/images/work/screen-shots/rkm-screen-shot.png',
    title: 'Richard K Morley & Associates',
    url: 'rkmorleylaw.com',
  },
  // {
  //   img: '/images/work/screen-shots/blackacre-law.png',
  //   title: 'Blackacre Law (WIP)',
  //   url: 'blackacre-law.com',
  // },
  // {
  //   img: '/images/work/screen-shots/blackacre-brokers.png',
  //   title: 'Blackacre Brokers (WIP)',
  //   url: 'blackacre.efficacy.io',
  // },
  // {
  //   img: '/images/work/screen-shots/winyl-large.png',
  //   title: 'The Winyl Exchange',
  //   url: '',
  // },
  // {
  //   img: '/images/work/screen-shots/tmt.png',
  //   title: 'TMT Capital Partners',
  //   url: 'tmtcapital.com',
  // },
  // {
  //   img: '/images/work/screen-shots/medical-new-pic.png',
  //   title: '(Medical Devivce Manufacturer)',
  //   url: '(business dissolution)',
  // },
];

// TAP
//Nudge
//Devise 
//TCS work

/**
 * A simple example of a scrollable `GridList` containing a [Subheader](/#/components/subheader).
 */
const GridListExampleSimple = () => (
  <div style={styles.root} className="row">
    <div className="col m12">
      <h4>Featured Projects</h4>
      <GridList
        cellHeight={150}
        style={styles.gridList}
        cols={4}
      >
        {tilesData.map((tile, i) => (
          <Link key={i} to={`/work/portfolio/${tile.slug}`}>
          <GridTile
            key={tile.img}
            title={tile.title}
           // subtitle={<span><b>{tile.url}</b></span>}
            //actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
          >
            <img src={tile.img} alt="" />
          </GridTile>
          </Link>
        ))}
      </GridList>
    </div>
    <div className="spacer-inline spacer40"></div>
    <div className="col m12">
      <h5>Other Works</h5>
      <GridList
        cellHeight={75}
        style={styles.gridList}
        cols={6}
      >
        {tilesDataSmall.map((tile, i) => (
          <a key={i} href={`http://${tile.url}`} target="_blank">
          <GridTile
            key={tile.img}
            //title={tile.title}
           // subtitle={<span><b>{tile.url}</b></span>}
            //actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
          >
            <img src={tile.img} alt=""  />
          </GridTile>
          </a>
        ))}
      </GridList>
    </div>
  </div>
);

export default GridListExampleSimple;