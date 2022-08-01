import { Polygon } from 'terraformer-arcgis-parser';
import { DMLoaiDuongTrieuEntity } from './danh-muc/dm-loai-duong-trieu/dm-loai-duong-trieu.entity';
export declare class DuongTrieuEntity {
    objectId: number;
    ma: string;
    ten: string;
    maLoaiDuongTrieu: number;
    loaiDuongTrieu: DMLoaiDuongTrieuEntity;
    moTa: string;
    shape: Polygon;
}
