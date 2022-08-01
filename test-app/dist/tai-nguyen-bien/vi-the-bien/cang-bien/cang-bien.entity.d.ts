import { Polygon } from 'terraformer-arcgis-parser';
import { DMLoaiCangEntity } from './danh-muc/dm-loai-cang/dm-loai-cang.entity';
export declare class CangBienEntity {
    objectId: number;
    ma: string;
    ten: string;
    dienTich: number;
    maloai: string;
    loai: DMLoaiCangEntity;
    congSuat: number;
    moTa: string;
    shape: Polygon;
}
