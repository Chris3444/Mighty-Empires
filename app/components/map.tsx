import React, { Component } from 'react';
import { HexGrid, Layout, Hexagon, Text, Pattern, Path, Hex } from 'react-hexgrid';

export default class App extends Component {
  render() {
    // const hexagons = GridGenerator.hexagon(3);

    return (
      <div className="App">
      <div>
        <HexGrid width={1200} height={800} viewBox="-50 -50 100 100">
          {/* Grid with manually inserted hexagons */}
          <Layout size={{ x: 10, y: 10 }} flat={false} spacing={1.1} origin={{ x: 0, y: 0 }}>
            <Hexagon q={0} r={0} s={0} />
            <Hexagon q={0} r={-1} s={1} fill="pat-1" />
            <Hexagon q={0} r={1} s={-1} />
            <Hexagon q={1} r={-1} s={0}>
            </Hexagon>
            <Hexagon q={1} r={0} s={-1}>
            </Hexagon>
            <Hexagon q={-1} r={1} s={0} fill="pat-2">
            </Hexagon>
            <Hexagon q={-1} r={0} s={1} />
            <Hexagon q={-2} r={0} s={1} />
            <Path start={new Hex(0, 0, 0)} end={new Hex(-2, 0, 1)} /> 
          </Layout>

        </HexGrid>
      </div>
      </div>
    );
  }
}
