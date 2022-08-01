import { Point } from 'nestjs-gis';
import { DMDongHoDoEntity } from './danh-muc/dm-dong-ho-do/dm-dong-ho-do.entity';
export declare class DiemXaThaiEntity {
    objectId: number;
    ma: string;
    tenCoSo: string;
    diaDiem: string;
    congTrinhDanNuocThai: string;
    thuyVucTiepNhan: string;
    giayPhep: string;
    maDongHoDo: string;
    dongHoDo: DMDongHoDoEntity;
    shape: Point;
}
