'use strict';
import { XmlFormater } from './formates/xml';

//* Example 1

const xml = new XmlFormater();
xml.read('output.xml');
xml.add('BMW', 77_000);
xml.remove(0);
// xml.convertTo(new BinaryFormater);
// xml.convertTo(new JsonFormater);
xml.show();
// xml.write('added_BMW.xml');

// ------------------------------------------------------------------------------- */

/* Example 2

const bin = new BinaryFormater();
bin.add('Lamborghini', 507_000);
bin.add('Ferrari', 361_500);
bin.write('sport cars.bin');

// bin.convertFile('sport cars.bin', new JsonFormater);

// ------------------------------------------------------------------------------- */

