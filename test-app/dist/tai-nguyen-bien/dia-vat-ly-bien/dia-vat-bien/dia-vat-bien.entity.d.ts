import { DMLoaiThuyQuyenEntity } from 'src/tai-nguyen-bien/danh-muc/dm-loai-thuy-quyen/dm-loai-thuy-quyen.entity';
import { Polygon } from 'terraformer-arcgis-parser';
import { DMLoaiThachQuyenEntity } from '../../danh-muc/dm-loai-thach-quyen/dm-loai-thach-quyen.entity';
export declare class DiaVatBienEntity {
    objectId: number;
    ma: string;
    dienTich: number;
    truLuong: number;
    moTa: string;
    maLoaiThuyQuyen: number;
    loaiThuyQuyen: DMLoaiThuyQuyenEntity;
    maLoaiThachQuyen: number;
    loaiThachQuyen: DMLoaiThachQuyenEntity;
    shape: Polygon;
}
