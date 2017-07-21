/**
 * Visualising GoT entry js
 */

import * as d3 from 'd3';
import ch7 from './components/chapter7';

async function createBettingOddsTable() {
  const data = await Promise.all([
    (await fetch('./data/got-betting-odds-ladbrokes.json')).json(),
    (await fetch('./data/got-betting-odds-sky.json')).json(),
    (await fetch('./data/got-betting-odds-sportingbet.json')).json(),
  ]);

  const odds = data.reduce((col, item) => {
    item.data.forEach((cell) => {
      if (!col[cell.name]) col[cell.name] = {};
      col[cell.name][item.source] = cell.odds;
    });
    return col;
  }, {});

  const sources = data.map(item => item.source);

  const container = d3.select('#betting-odds');
  const table = container.append('table');
  table.classed('o-table', true);
  table.classed('o-expander__content', true);
  table.attr('data-o-components', 'o-table');
  const caption = table.append('caption');
  caption.classed('o-table__caption--top', true);
  caption.text('Betting odds for ruler of Westeros at end of season 7');

  // Append header cells
  const thead = table.append('thead');
  thead.append('tr')
    .selectAll('th')
    .data(['Bet', ...sources])
    .enter()
    .append('th')
    .text(d => d);

  const tbody = table.append('tbody');
  const rows = tbody.selectAll('tr').data(Object.entries(odds))
    .enter()
    .append('tr');

  rows.selectAll('td').data(d => [d[0], ...sources.map(s => d[1][s] || '-')])
    .enter()
    .append('td')
    .text(d => d);
}

createBettingOddsTable();
ch7('stack', 'data/GoT-deaths-by-season.json', {
  container: '#deaths-by-season-steamgraph',
  isStream: true,
  width: 680,
  height: 400,
  padding: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  margin: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
});

ch7('force', 'data/asoiaf-all-edges.csv', {
  container: '#network-graph',
  width: 680,
});
// ch7('adjacency', 'data/asoiaf-all-edges.csv', {
//   width: window.innerWidth,
//   height: window.innerHeight,
// });

// import ch6 from './components/chapter6';

//
// ch6('tree', 'data/GoT-lineage-by-father.json', {
//   margin: {
//     bottom: 250,
//     left: 250,
//     top: 250,
//     right: 250,
//   },
// });
// // ch6('cluster', './data/GoT-lineage-by-father.json');
// // ch6('treemap', './data/GoT-lineages-screentimes.json');
// // ch6('partition', './data/GoT-lineages-screentimes.json');
// ch6('pack', './data/GoT-lineages-screentimes.json');
//
// ch7('pie', 'data/GoT-lineages-screentimes.json');
// // ch7('histogram', 'data/GoT-deaths-by-season.json');
// ch7('chord', 'data/stormofswords.csv');
// ch7('force', 'data/stormofswords.csv');
// ch7('adjacency', 'data/stormofswords.csv', {
//   width: window.innerWidth,
//   height: window.innerHeight,
// });
// ch7('stack', 'data/GoT-deaths-by-season.json', false);
// ch7('stack', 'data/GoT-deaths-by-season.json', true);
