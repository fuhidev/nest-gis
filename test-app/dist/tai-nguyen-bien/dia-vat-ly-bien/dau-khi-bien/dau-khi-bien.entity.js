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
exports.DauKhiBienEntity = void 0;
const nestjs_gis_1 = require("../../../../../dist");
const dm_tinh_trang_khai_thac_entity_1 = require("../../danh-muc/dm-tinh-trang-khai-thac/dm-tinh-trang-khai-thac.entity");
const typeorm_1 = require("typeorm");
let DauKhiBienEntity = class DauKhiBienEntity {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)({ name: 'OBJECTID', type: 'int' }),
    __metadata("design:type", Number)
], DauKhiBienEntity.prototype, "objectId", void 0);
__decorate([
    (0, nestjs_gis_1.Column)({
        name: 'Ma',
        nullable: true,
        alias: 'Mã',
    }),
    __metadata("design:type", String)
], DauKhiBienEntity.prototype, "ma", void 0);
__decorate([
    (0, nestjs_gis_1.Column)({
        name: 'Ten',
        nullable: true,
        alias: 'Tên',
        isDisplayColumn: true,
    }),
    __metadata("design:type", String)
], DauKhiBienEntity.prototype, "tenKhoangSan", void 0);
__decorate([
    (0, nestjs_gis_1.Column)({
        name: 'ViTri',
        nullable: true,
        alias: 'Vị trí',
    }),
    __metadata("design:type", String)
], DauKhiBienEntity.prototype, "viTri", void 0);
__decorate([
    (0, nestjs_gis_1.Column)({
        name: 'DoSau',
        nullable: true,
        alias: 'Độ sâu',
        type: 'float',
    }),
    __metadata("design:type", Number)
], DauKhiBienEntity.prototype, "doSau", void 0);
__decorate([
    (0, nestjs_gis_1.Column)({
        name: 'TinhTrangKhaiThac',
        nullable: true,
        alias: 'Tình trạng khai thác',
    }),
    __metadata("design:type", Number)
], DauKhiBienEntity.prototype, "maTinhTrangKhaiThac", void 0);
__decorate([
    (0, typeorm_1.JoinColumn)({ name: 'TinhTrangKhaiThac' }),
    (0, typeorm_1.ManyToOne)(() => dm_tinh_trang_khai_thac_entity_1.DMTinhTrangKhaiThacEntity, {
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", dm_tinh_trang_khai_thac_entity_1.DMTinhTrangKhaiThacEntity)
], DauKhiBienEntity.prototype, "tinhTrangKhaiThac", void 0);
__decorate([
    (0, nestjs_gis_1.Column)({
        name: 'SHAPE',
        transformer: nestjs_gis_1.geometryTransformer,
        type: 'geometry',
        spatialFeatureType: nestjs_gis_1.GeometryTypeEnum.Polygon,
    }),
    __metadata("design:type", Object)
], DauKhiBienEntity.prototype, "shape", void 0);
DauKhiBienEntity = __decorate([
    (0, typeorm_1.Entity)('DAUKHIBIEN', { synchronize: false })
], DauKhiBienEntity);
exports.DauKhiBienEntity = DauKhiBienEntity;
//# sourceMappingURL=dau-khi-bien.entity.js.map