import { DMTinhTrangKhaiThacEntity } from 'src/tai-nguyen-bien/danh-muc/dm-tinh-trang-khai-thac/dm-tinh-trang-khai-thac.entity';
import { Polygon } from 'terraformer-arcgis-parser';
export declare class DauKhiBienEntity {
    objectId: number;
    ma: string;
    tenKhoangSan: string;
    viTri: string;
    doSau: number;
    maTinhTrangKhaiThac: number;
    tinhTrangKhaiThac: DMTinhTrangKhaiThacEntity;
    shape: Polygon;
}
