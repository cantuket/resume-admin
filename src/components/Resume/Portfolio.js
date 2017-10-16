import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
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
    img: '/images/erin-auctions.png',
    title: 'Erin Auctions',
    author: 'jill111',
    slug:'erin-auctions',
  },
  {
    img: '/images/gm-screen-shot.png',
    title: 'Tasty burger',
    author: 'pashminu',
  },
  {
    img: '/images/grillroom.png',
    title: 'Camera',
    author: 'Danson67',
  },
  {
    img: '/images/medical-new-pic.png',
    title: 'Morning',
    author: 'fancycrave1',
  },
  {
    img: '/images/rkm-screen-shot.png',
    title: 'Hats',
    author: 'Hans',
  },
  {
    img: '/images/tbg-screen-shot.png',
    title: 'Honey',
    author: 'fancycravel',
  },
  {
    img: '/images/townhouse.png',
    title: 'Vegetables',
    author: 'jill111',
  },
  {
    img: '/images/winyl-large.png',
    title: 'Water plant',
    author: 'BkrmadtyaKarki',
  },
];

/**
 * A simple example of a scrollable `GridList` containing a [Subheader](/#/components/subheader).
 */
const GridListExampleSimple = () => (
  <div style={styles.root}>
    <GridList
      cellHeight={180}
      style={styles.gridList}
    >
      <Subheader>December</Subheader>
      {tilesData.map((tile) => (
        <Link key={tile.slug} to={`/portfolio/${tile.slug}`}>
        <GridTile
          key={tile.img}
          title={tile.title}
          subtitle={<span>by <b>{tile.author}</b></span>}
          actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
        >
          <img src={tile.img} />
        </GridTile>
        </Link>
      ))}
    </GridList>
  </div>
);

export default GridListExampleSimple;