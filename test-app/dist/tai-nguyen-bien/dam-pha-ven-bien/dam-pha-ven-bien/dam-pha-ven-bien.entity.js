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
exports.DamPhaVenBienEntity = void 0;
const nestjs_gis_1 = require("../../../../../dist");
const typeorm_1 = require("typeorm");
const dm_loai_dam_pha_entity_1 = require("./danh-muc/dm-loai-dam-pha/dm-loai-dam-pha.entity");
let DamPhaVenBienEntity = class DamPhaVenBienEntity {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)({ name: 'OBJECTID', type: 'int' }),
    __metadata("design:type", Number)
], DamPhaVenBienEntity.prototype, "objectId", void 0);
__decorate([
    (0, nestjs_gis_1.Column)({
        name: 'Ma',
        nullable: true,
        alias: 'Mã',
    }),
    __metadata("design:type", String)
], DamPhaVenBienEntity.prototype, "ma", void 0);
__decorate([
    (0, nestjs_gis_1.Column)({
        name: 'TenDamPha',
        nullable: true,
        alias: 'Tên',
        isDisplayColumn: true,
    }),
    __metadata("design:type", String)
], DamPhaVenBienEntity.prototype, "tenDamPha", void 0);
__decorate([
    (0, nestjs_gis_1.Column)({
        name: 'DienTich',
        nullable: true,
        alias: 'Diện tích',
        type: 'decimal',
    }),
    __metadata("design:type", Number)
], DamPhaVenBienEntity.prototype, "dienTich", void 0);
__decorate([
    (0, nestjs_gis_1.Column)({
        name: 'loaiDamPha',
        nullable: true,
        alias: 'Loại đầm phá',
    }),
    __metadata("design:type", String)
], DamPhaVenBienEntity.prototype, "maloaiDamPha", void 0);
__decorate([
    (0, typeorm_1.JoinColumn)({ name: 'loaiDamPha' }),
    (0, typeorm_1.ManyToOne)(() => dm_loai_dam_pha_entity_1.DMLoaiDamPhaEntity, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    }),
    __metadata("design:type", dm_loai_dam_pha_entity_1.DMLoaiDamPhaEntity)
], DamPhaVenBienEntity.prototype, "loaiDamPha", void 0);
__decorate([
    (0, nestjs_gis_1.Column)({
        name: 'SHAPE',
        transformer: nestjs_gis_1.geometryTransformer,
        type: 'geometry',
        spatialFeatureType: nestjs_gis_1.GeometryTypeEnum.Polygon,
    }),
    __metadata("design:type", Object)
], DamPhaVenBienEntity.prototype, "shape", void 0);
DamPhaVenBienEntity = __decorate([
    (0, typeorm_1.Entity)('DAMPHAVENBIEN', { synchronize: false })
], DamPhaVenBienEntity);
exports.DamPhaVenBienEntity = DamPhaVenBienEntity;
//# sourceMappingURL=dam-pha-ven-bien.entity.js.map