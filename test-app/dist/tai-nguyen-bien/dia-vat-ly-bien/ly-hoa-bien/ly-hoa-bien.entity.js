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
exports.LyHoaBienEntity = void 0;
const nestjs_gis_1 = require("../../../../../dist");
const typeorm_1 = require("typeorm");
let LyHoaBienEntity = class LyHoaBienEntity {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)({ name: 'OBJECTID', type: 'int' }),
    __metadata("design:type", Number)
], LyHoaBienEntity.prototype, "objectId", void 0);
__decorate([
    (0, nestjs_gis_1.Column)({
        name: 'Ma',
        nullable: true,
        alias: 'Mã',
    }),
    __metadata("design:type", String)
], LyHoaBienEntity.prototype, "ma", void 0);
__decorate([
    (0, nestjs_gis_1.Column)({
        name: 'Ten',
        nullable: true,
        alias: 'Tên',
        isDisplayColumn: true,
    }),
    __metadata("design:type", String)
], LyHoaBienEntity.prototype, "ten", void 0);
__decorate([
    (0, nestjs_gis_1.Column)({
        name: 'MatDo',
        nullable: true,
        alias: 'Mật độ',
        type: 'float',
    }),
    __metadata("design:type", Number)
], LyHoaBienEntity.prototype, "matDo", void 0);
__decorate([
    (0, nestjs_gis_1.Column)({
        name: 'DoMuoi',
        nullable: true,
        alias: 'Độ muối',
        type: 'float',
    }),
    __metadata("design:type", Number)
], LyHoaBienEntity.prototype, "doMuoi", void 0);
__decorate([
    (0, nestjs_gis_1.Column)({
        name: 'MoTa',
        nullable: true,
        alias: 'Mô tả',
    }),
    __metadata("design:type", String)
], LyHoaBienEntity.prototype, "moTa", void 0);
__decorate([
    (0, nestjs_gis_1.Column)({
        name: 'SHAPE',
        transformer: nestjs_gis_1.geometryTransformer,
        type: 'geometry',
        spatialFeatureType: nestjs_gis_1.GeometryTypeEnum.Polygon,
    }),
    __metadata("design:type", Object)
], LyHoaBienEntity.prototype, "shape", void 0);
LyHoaBienEntity = __decorate([
    (0, typeorm_1.Entity)('LYHOABIEN', { synchronize: false })
], LyHoaBienEntity);
exports.LyHoaBienEntity = LyHoaBienEntity;
//# sourceMappingURL=ly-hoa-bien.entity.js.map