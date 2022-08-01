import { Polygon } from 'terraformer-arcgis-parser';
import { DMLoaiDamPhaEntity } from './danh-muc/dm-loai-dam-pha/dm-loai-dam-pha.entity';
export declare class DamPhaVenBienEntity {
    objectId: number;
    ma: string;
    tenDamPha: string;
    dienTich: number;
    maloaiDamPha: string;
    loaiDamPha: DMLoaiDamPhaEntity;
    shape: Polygon;
}
