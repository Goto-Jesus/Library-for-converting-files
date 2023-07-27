'use strict';
import { XmlFormater } from './formates/xml';

const xml = new XmlFormater();
xml.read('output.xml');
xml.add('BMW', 77_000);
xml.show();
// xml.write('added_BMW.xml');

//  npm start
