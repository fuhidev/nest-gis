import * as arcgis from 'terraformer-arcgis-parser';
import { SpatialReference } from './spatial-reference';
export class Point implements arcgis.Geometry {
  x: number;
  y: number;
  spatialReference: SpatialReference;
}

export enum GeometryTypeEnum {
  Point = 'Point',
  MultiPoint = 'Multipoint',
  Polyline = 'Polyline',
  Polygon = 'Polygon',
  Envelope = 'Envelope',
}
