import { GeometryObject } from 'geojson';
import * as wkt from 'terraformer-wkt-parser';

export const geometryTransformer = {
  from: dbValue => {
    if (dbValue) {
      let geojson = dbValue;
      if (typeof dbValue === 'string') {
        geojson = wkt.parse(dbValue);
      }
      return geojson;
    }
    return null;
  },
  to: (shape: GeometryObject) => shape && wkt.convert(shape),
};
