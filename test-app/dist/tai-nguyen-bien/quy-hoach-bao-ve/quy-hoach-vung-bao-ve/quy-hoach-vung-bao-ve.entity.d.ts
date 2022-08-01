import { Polygon } from 'terraformer-arcgis-parser';
import { DmLoaiKhuBaoVeEntity } from './danh-muc/dm-loai-khu-bao-ve/dm-loai-khu-bao-ve.entity';
export declare class QuyHoachVungBaoVeEntity {
    objectId: number;
    ma: string;
    ten: string;
    maLoaiKhu: string;
    loaiKhu: DmLoaiKhuBaoVeEntity;
    shape: Polygon;
}
