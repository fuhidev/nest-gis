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
exports.QuyHoachVungBaoVeEntity = void 0;
const nestjs_gis_1 = require("../../../../../dist");
const typeorm_1 = require("typeorm");
const dm_loai_khu_bao_ve_entity_1 = require("./danh-muc/dm-loai-khu-bao-ve/dm-loai-khu-bao-ve.entity");
let QuyHoachVungBaoVeEntity = class QuyHoachVungBaoVeEntity {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)({ name: 'OBJECTID', type: 'int' }),
    __metadata("design:type", Number)
], QuyHoachVungBaoVeEntity.prototype, "objectId", void 0);
__decorate([
    (0, nestjs_gis_1.Column)({
        name: 'Ma',
        nullable: true,
        alias: 'Mã',
    }),
    __metadata("design:type", String)
], QuyHoachVungBaoVeEntity.prototype, "ma", void 0);
__decorate([
    (0, nestjs_gis_1.Column)({
        name: 'Ten',
        nullable: true,
        alias: 'Tên',
        isDisplayColumn: true,
    }),
    __metadata("design:type", String)
], QuyHoachVungBaoVeEntity.prototype, "ten", void 0);
__decorate([
    (0, nestjs_gis_1.Column)({
        name: 'LoaiKhu',
        nullable: true,
        alias: 'Loại khu',
    }),
    __metadata("design:type", String)
], QuyHoachVungBaoVeEntity.prototype, "maLoaiKhu", void 0);
__decorate([
    (0, typeorm_1.JoinColumn)({ name: 'LoaiKhu' }),
    (0, typeorm_1.ManyToOne)(() => dm_loai_khu_bao_ve_entity_1.DmLoaiKhuBaoVeEntity, {
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", dm_loai_khu_bao_ve_entity_1.DmLoaiKhuBaoVeEntity)
], QuyHoachVungBaoVeEntity.prototype, "loaiKhu", void 0);
__decorate([
    (0, nestjs_gis_1.Column)({
        name: 'SHAPE',
        transformer: nestjs_gis_1.geometryTransformer,
        type: 'geometry',
        spatialFeatureType: nestjs_gis_1.GeometryTypeEnum.Polygon,
    }),
    __metadata("design:type", Object)
], QuyHoachVungBaoVeEntity.prototype, "shape", void 0);
QuyHoachVungBaoVeEntity = __decorate([
    (0, typeorm_1.Entity)('QUYHOACH_VUNGBAOVE', { synchronize: false })
], QuyHoachVungBaoVeEntity);
exports.QuyHoachVungBaoVeEntity = QuyHoachVungBaoVeEntity;
//# sourceMappingURL=quy-hoach-vung-bao-ve.entity.js.map