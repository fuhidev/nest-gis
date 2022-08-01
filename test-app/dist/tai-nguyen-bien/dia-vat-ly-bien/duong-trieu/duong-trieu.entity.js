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
exports.DuongTrieuEntity = void 0;
const nestjs_gis_1 = require("../../../../../dist");
const typeorm_1 = require("typeorm");
const dm_loai_duong_trieu_entity_1 = require("./danh-muc/dm-loai-duong-trieu/dm-loai-duong-trieu.entity");
let DuongTrieuEntity = class DuongTrieuEntity {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)({ name: 'OBJECTID', type: 'int' }),
    __metadata("design:type", Number)
], DuongTrieuEntity.prototype, "objectId", void 0);
__decorate([
    (0, nestjs_gis_1.Column)({
        name: 'Ma',
        nullable: true,
        alias: 'Mã',
    }),
    __metadata("design:type", String)
], DuongTrieuEntity.prototype, "ma", void 0);
__decorate([
    (0, nestjs_gis_1.Column)({
        name: 'Ten',
        nullable: true,
        alias: 'Tên',
        isDisplayColumn: true,
    }),
    __metadata("design:type", String)
], DuongTrieuEntity.prototype, "ten", void 0);
__decorate([
    (0, nestjs_gis_1.Column)({
        name: 'LoaiDuongTrieu',
        nullable: true,
        alias: 'Loại đường triều',
    }),
    __metadata("design:type", Number)
], DuongTrieuEntity.prototype, "maLoaiDuongTrieu", void 0);
__decorate([
    (0, typeorm_1.JoinColumn)({ name: 'LoaiDuongTrieu' }),
    (0, typeorm_1.ManyToOne)(() => dm_loai_duong_trieu_entity_1.DMLoaiDuongTrieuEntity, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    }),
    __metadata("design:type", dm_loai_duong_trieu_entity_1.DMLoaiDuongTrieuEntity)
], DuongTrieuEntity.prototype, "loaiDuongTrieu", void 0);
__decorate([
    (0, nestjs_gis_1.Column)({
        name: 'MoTa',
        nullable: true,
        alias: 'Mô tả',
    }),
    __metadata("design:type", String)
], DuongTrieuEntity.prototype, "moTa", void 0);
__decorate([
    (0, nestjs_gis_1.Column)({
        name: 'SHAPE',
        transformer: nestjs_gis_1.geometryTransformer,
        type: 'geometry',
        spatialFeatureType: nestjs_gis_1.GeometryTypeEnum.Polygon,
    }),
    __metadata("design:type", Object)
], DuongTrieuEntity.prototype, "shape", void 0);
DuongTrieuEntity = __decorate([
    (0, typeorm_1.Entity)('DUONGTRIEU', { synchronize: false })
], DuongTrieuEntity);
exports.DuongTrieuEntity = DuongTrieuEntity;
//# sourceMappingURL=duong-trieu.entity.js.map