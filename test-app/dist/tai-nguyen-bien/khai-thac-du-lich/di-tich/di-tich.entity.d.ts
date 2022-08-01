import { Point } from 'nestjs-gis';
import { DMCapDiTichEntity } from './danh-muc/dm-cap-di-tich/dm-cap-di-tich.entity';
export declare class DiTichEntity {
    objectId: number;
    ma: string;
    ten: string;
    loai: string;
    diaChi: string;
    loaiHinh: string;
    maCap: string;
    cap: DMCapDiTichEntity;
    soQuyetDinh: string;
    ngayCap: Date;
    shape: Point;
}
