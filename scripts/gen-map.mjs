import { getMapJSON } from 'dotted-map';
import { writeFileSync } from 'fs';

const json = getMapJSON({ height: 42, grid: 'diagonal' });
writeFileSync(new URL('../src/data/worldMapGrid.json', import.meta.url), json);
console.log('wrote', json.length, 'bytes');
