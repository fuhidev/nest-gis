import { Polygon } from 'terraformer-arcgis-parser';
import { DMLoaiKhuVucDichVuEntity } from './danh-muc/dm-loai-khu-vuc-dich-vu/dm-loai-khu-vuc-dich-vu.entity';
export declare class QuyHoachAnNinhQuocPhongEntity {
    objectId: number;
    ma: string;
    ten: string;
    maLoaiKhu: string;
    loaiKhu: DMLoaiKhuVucDichVuEntity;
    shape: Polygon;
}
