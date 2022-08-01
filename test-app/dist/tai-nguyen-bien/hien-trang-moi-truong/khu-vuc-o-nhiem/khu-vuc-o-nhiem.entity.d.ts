import { Polygon } from 'terraformer-arcgis-parser';
import { DMKhuVucONhiemEntity } from './danh-muc/dm-khu-vuc-o-nhiem/dm-khu-vuc-o-nhiem.entity';
export declare class KhuVucONhiemEntity {
    objectId: number;
    ma: string;
    ten: string;
    maLoaiKhuVucONhiem: number;
    loaiKhuVucONhiem: DMKhuVucONhiemEntity;
    shape: Polygon;
}
