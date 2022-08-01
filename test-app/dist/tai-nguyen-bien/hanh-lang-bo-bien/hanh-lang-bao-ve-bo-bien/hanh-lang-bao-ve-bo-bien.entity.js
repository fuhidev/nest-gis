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
exports.HanhLangBaoVeBoBienEntity = void 0;
const nestjs_gis_1 = require("../../../../../dist");
const typeorm_1 = require("typeorm");
let HanhLangBaoVeBoBienEntity = class HanhLangBaoVeBoBienEntity {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)({ type: 'int', name: 'OBJECTID' }),
    __metadata("design:type", Number)
], HanhLangBaoVeBoBienEntity.prototype, "objectId", void 0);
__decorate([
    (0, nestjs_gis_1.Column)({
        name: 'Ma',
        nullable: true,
        alias: 'Mã',
    }),
    __metadata("design:type", String)
], HanhLangBaoVeBoBienEntity.prototype, "ma", void 0);
__decorate([
    (0, nestjs_gis_1.Column)({
        name: 'Ten',
        nullable: true,
        alias: 'Tên',
        isDisplayColumn: true,
    }),
    __metadata("design:type", String)
], HanhLangBaoVeBoBienEntity.prototype, "ten", void 0);
__decorate([
    (0, nestjs_gis_1.Column)({
        name: 'CauTruc',
        nullable: true,
        alias: 'Cấu trúc',
    }),
    __metadata("design:type", String)
], HanhLangBaoVeBoBienEntity.prototype, "cauTruc", void 0);
__decorate([
    (0, nestjs_gis_1.Column)({
        name: 'LoaiHinh',
        nullable: true,
        alias: 'Loại hình',
    }),
    __metadata("design:type", String)
], HanhLangBaoVeBoBienEntity.prototype, "loaiHinh", void 0);
__decorate([
    (0, nestjs_gis_1.Column)({
        name: 'ChieuDai',
        nullable: true,
        alias: 'Chiều dài',
        type: 'float',
    }),
    __metadata("design:type", Number)
], HanhLangBaoVeBoBienEntity.prototype, "chieuDai", void 0);
__decorate([
    (0, nestjs_gis_1.Column)({
        name: 'DoSau',
        nullable: true,
        alias: 'Độ sâu',
        type: 'float',
    }),
    __metadata("design:type", Number)
], HanhLangBaoVeBoBienEntity.prototype, "doSau", void 0);
__decorate([
    (0, nestjs_gis_1.Column)({
        name: 'SHAPE',
        transformer: nestjs_gis_1.geometryTransformer,
        type: 'geometry',
        spatialFeatureType: nestjs_gis_1.GeometryTypeEnum.Polygon,
    }),
    __metadata("design:type", Object)
], HanhLangBaoVeBoBienEntity.prototype, "shape", void 0);
HanhLangBaoVeBoBienEntity = __decorate([
    (0, typeorm_1.Entity)('HANHLANGBAOVEBOBIEN', { synchronize: false })
], HanhLangBaoVeBoBienEntity);
exports.HanhLangBaoVeBoBienEntity = HanhLangBaoVeBoBienEntity;
//# sourceMappingURL=hanh-lang-bao-ve-bo-bien.entity.js.map