import ch6 from './components/chapter6';
import ch7 from './components/chapter7';

ch6('tree', 'data/GoT-lineage-by-father.json');
ch6('cluster', './data/GoT-lineage-by-father.json');
ch6('treemap', './data/GoT-lineages-screentimes.json');
ch6('partition', './data/GoT-lineages-screentimes.json');
ch6('pack', './data/GoT-lineages-screentimes.json');

ch7('pie', 'data/GoT-lineages-screentimes.json');
// ch7('histogram', 'data/GoT-deaths-by-season.json');
ch7('chord', 'data/stormofswords.csv');
ch7('force', 'data/stormofswords.csv');
ch7('stack', 'data/GoT-deaths-by-season.json', false);
ch7('stack', 'data/GoT-deaths-by-season.json', true);
