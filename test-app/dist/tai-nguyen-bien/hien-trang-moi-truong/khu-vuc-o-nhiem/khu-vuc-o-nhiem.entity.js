"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KhuVucONhiemEntity = void 0;
const nestjs_gis_1 = require("../../../../../dist");
const typeorm_1 = require("typeorm");
const dm_khu_vuc_o_nhiem_entity_1 = require("./danh-muc/dm-khu-vuc-o-nhiem/dm-khu-vuc-o-nhiem.entity");
let KhuVucONhiemEntity = class KhuVucONhiemEntity {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)({ name: 'OBJECTID', type: 'int' }),
    __metadata("design:type", Number)
], KhuVucONhiemEntity.prototype, "objectId", void 0);
__decorate([
    (0, nestjs_gis_1.Column)({
        name: 'Ma',
        nullable: true,
        alias: 'Mã',
    }),
    __metadata("design:type", String)
], KhuVucONhiemEntity.prototype, "ma", void 0);
__decorate([
    (0, nestjs_gis_1.Column)({
        name: 'Ten',
        nullable: true,
        alias: 'Tên',
        isDisplayColumn: true,
    }),
    __metadata("design:type", String)
], KhuVucONhiemEntity.prototype, "ten", void 0);
__decorate([
    (0, nestjs_gis_1.Column)({
        name: 'LoaiKhuVucONhiem',
        nullable: true,
        alias: 'Loại khu vực ô nhiễm',
    }),
    __metadata("design:type", Number)
], KhuVucONhiemEntity.prototype, "maLoaiKhuVucONhiem", void 0);
__decorate([
    (0, typeorm_1.JoinColumn)({ name: 'LoaiKhuVucONhiem' }),
    (0, typeorm_1.ManyToOne)(() => dm_khu_vuc_o_nhiem_entity_1.DMKhuVucONhiemEntity, {
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", dm_khu_vuc_o_nhiem_entity_1.DMKhuVucONhiemEntity)
], KhuVucONhiemEntity.prototype, "loaiKhuVucONhiem", void 0);
__decorate([
    (0, nestjs_gis_1.Column)({
        name: 'SHAPE',
        transformer: nestjs_gis_1.geometryTransformer,
        type: 'geometry',
        spatialFeatureType: nestjs_gis_1.GeometryTypeEnum.Polygon,
    }),
    __metadata("design:type", Object)
], KhuVucONhiemEntity.prototype, "shape", void 0);
KhuVucONhiemEntity = __decorate([
    (0, typeorm_1.Entity)('KHUVUCONHIEM', { synchronize: false })
], KhuVucONhiemEntity);
exports.KhuVucONhiemEntity = KhuVucONhiemEntity;
//# sourceMappingURL=khu-vuc-o-nhiem.entity.js.map