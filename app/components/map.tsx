import React, { Component } from 'react';
import { HexGrid, Layout, Hexagon, GridGenerator } from 'react-hexgrid';

export default class App extends Component {
  render() {
    const hexagons = GridGenerator.parallelogram(-2, 3, -2, 1);

    return (
      <div className="App">
        <h1>Basic example of HexGrid usage.</h1>
        <HexGrid width={1200} height={1000}>
          <Layout size={{ x: 7, y: 7 }}>
            { hexagons.map((hex: { q: any; r: any; s: any; }, i: any) => <Hexagon key={i} q={hex.q} r={hex.r} s={hex.s} />) }
          </Layout>
        </HexGrid>
      </div>
    );
  }
}
