import * as ch6 from './chapter6/index';
import * as ch7 from './chapter7/index';

ch6.GoTChart('tree', 'data/GoT-lineage-by-father.json');
ch6.GoTChart('cluster', 'data/GoT-lineage-by-father.json');
ch6.GoTChart('treemap', 'data/GoT-lineages-screentimes.json');
ch6.GoTChart('partition', 'data/GoT-lineages-screentimes.json');
ch6.GoTChart('pack', 'data/GoT-lineages-screentimes.json');

ch7.GoTChart('pie', 'data/GoT-lineages-screentimes.json');
ch7.GoTChart('histogram', 'data/GoT-deaths-by-season.json');
ch7.GoTChart('chord', 'data/stormofswords.csv');
ch7.GoTChart('force', 'data/stormofswords.csv');
ch7.GoTChart('stack', 'data/GoT-deaths-by-season.json', false);
ch7.GoTChart('stack', 'data/GoT-deaths-by-season.json', true);
