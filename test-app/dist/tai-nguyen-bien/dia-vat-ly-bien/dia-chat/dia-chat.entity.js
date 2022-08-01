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
exports.DiaChatEntity = void 0;
const nestjs_gis_1 = require("../../../../../dist");
const typeorm_1 = require("typeorm");
let DiaChatEntity = class DiaChatEntity {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)({ name: 'OBJECTID', type: 'int' }),
    __metadata("design:type", Number)
], DiaChatEntity.prototype, "objectId", void 0);
__decorate([
    (0, nestjs_gis_1.Column)({
        name: 'Ma',
        nullable: true,
        alias: 'Mã',
    }),
    __metadata("design:type", String)
], DiaChatEntity.prototype, "ma", void 0);
__decorate([
    (0, nestjs_gis_1.Column)({
        name: 'DoSau',
        nullable: true,
        alias: 'Độ sâu',
        type: 'float',
    }),
    __metadata("design:type", Number)
], DiaChatEntity.prototype, "doSau", void 0);
__decorate([
    (0, nestjs_gis_1.Column)({
        name: 'TuoiDiaChat',
        nullable: true,
        alias: 'Tuổi địa chất',
    }),
    __metadata("design:type", String)
], DiaChatEntity.prototype, "tuoiDiaChat", void 0);
__decorate([
    (0, nestjs_gis_1.Column)({
        name: 'MoTa',
        nullable: true,
        alias: 'Mô tả',
    }),
    __metadata("design:type", String)
], DiaChatEntity.prototype, "moTa", void 0);
__decorate([
    (0, nestjs_gis_1.Column)({
        name: 'SHAPE',
        transformer: nestjs_gis_1.geometryTransformer,
        type: 'geometry',
        spatialFeatureType: nestjs_gis_1.GeometryTypeEnum.Polygon,
    }),
    __metadata("design:type", Object)
], DiaChatEntity.prototype, "shape", void 0);
DiaChatEntity = __decorate([
    (0, typeorm_1.Entity)('DIACHATBIEN', { synchronize: false })
], DiaChatEntity);
exports.DiaChatEntity = DiaChatEntity;
//# sourceMappingURL=dia-chat.entity.js.map