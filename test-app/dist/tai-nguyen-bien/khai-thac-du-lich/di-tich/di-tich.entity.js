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
exports.DiTichEntity = void 0;
const nestjs_gis_1 = require("../../../../../dist");
const typeorm_1 = require("typeorm");
const dm_cap_di_tich_entity_1 = require("./danh-muc/dm-cap-di-tich/dm-cap-di-tich.entity");
let DiTichEntity = class DiTichEntity {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)({ name: 'OBJECTID', type: 'int' }),
    __metadata("design:type", Number)
], DiTichEntity.prototype, "objectId", void 0);
__decorate([
    (0, nestjs_gis_1.Column)({
        name: 'Ma',
        nullable: true,
        alias: 'Mã',
    }),
    __metadata("design:type", String)
], DiTichEntity.prototype, "ma", void 0);
__decorate([
    (0, nestjs_gis_1.Column)({
        name: 'Ten',
        nullable: true,
        alias: 'Tên',
        isDisplayColumn: true,
    }),
    __metadata("design:type", String)
], DiTichEntity.prototype, "ten", void 0);
__decorate([
    (0, nestjs_gis_1.Column)({
        name: 'Loai',
        nullable: true,
        alias: 'Loại',
    }),
    __metadata("design:type", String)
], DiTichEntity.prototype, "loai", void 0);
__decorate([
    (0, nestjs_gis_1.Column)({
        name: 'DiaChi',
        nullable: true,
        alias: 'Địa chỉ',
    }),
    __metadata("design:type", String)
], DiTichEntity.prototype, "diaChi", void 0);
__decorate([
    (0, nestjs_gis_1.Column)({
        name: 'LoaiHinh',
        nullable: true,
        alias: 'Loại hình',
    }),
    __metadata("design:type", String)
], DiTichEntity.prototype, "loaiHinh", void 0);
__decorate([
    (0, nestjs_gis_1.Column)({
        name: 'Cap',
        nullable: true,
        alias: 'Cấp',
    }),
    __metadata("design:type", String)
], DiTichEntity.prototype, "maCap", void 0);
__decorate([
    (0, typeorm_1.JoinColumn)({ name: 'Cap' }),
    (0, typeorm_1.ManyToOne)(() => dm_cap_di_tich_entity_1.DMCapDiTichEntity, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    }),
    __metadata("design:type", dm_cap_di_tich_entity_1.DMCapDiTichEntity)
], DiTichEntity.prototype, "cap", void 0);
__decorate([
    (0, nestjs_gis_1.Column)({
        name: 'SoQuyetDinh',
        nullable: true,
        alias: 'Số quyết định',
    }),
    __metadata("design:type", String)
], DiTichEntity.prototype, "soQuyetDinh", void 0);
__decorate([
    (0, nestjs_gis_1.Column)({
        name: 'NgayCap',
        nullable: true,
        alias: 'Ngày cấp',
    }),
    __metadata("design:type", Date)
], DiTichEntity.prototype, "ngayCap", void 0);
__decorate([
    (0, nestjs_gis_1.Column)({
        name: 'SHAPE',
        transformer: nestjs_gis_1.geometryTransformer,
        type: 'geometry',
        spatialFeatureType: nestjs_gis_1.GeometryTypeEnum.Point,
    }),
    __metadata("design:type", nestjs_gis_1.Point)
], DiTichEntity.prototype, "shape", void 0);
DiTichEntity = __decorate([
    (0, typeorm_1.Entity)('DITICH', { synchronize: false })
], DiTichEntity);
exports.DiTichEntity = DiTichEntity;
//# sourceMappingURL=di-tich.entity.js.map