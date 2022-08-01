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
exports.GiaoThongEntity = void 0;
const nestjs_gis_1 = require("../../../../../dist");
const typeorm_1 = require("typeorm");
const dm_loai_mat_giao_thong_entity_1 = require("./danh-muc/dm-loai-mat-giao-thong/dm-loai-mat-giao-thong.entity");
let GiaoThongEntity = class GiaoThongEntity {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)({ name: 'OBJECTID', type: 'int' }),
    __metadata("design:type", Number)
], GiaoThongEntity.prototype, "objectId", void 0);
__decorate([
    (0, nestjs_gis_1.Column)({
        name: 'Ma',
        nullable: true,
        alias: 'Mã',
    }),
    __metadata("design:type", String)
], GiaoThongEntity.prototype, "ma", void 0);
__decorate([
    (0, nestjs_gis_1.Column)({
        name: 'Ten',
        nullable: true,
        alias: 'Tên',
    }),
    __metadata("design:type", String)
], GiaoThongEntity.prototype, "ten", void 0);
__decorate([
    (0, nestjs_gis_1.Column)({
        name: 'LoaiMatGiaoThong',
        nullable: true,
        alias: 'aliasName',
    }),
    __metadata("design:type", String)
], GiaoThongEntity.prototype, "maLoaiMatGiaoThong", void 0);
__decorate([
    (0, typeorm_1.JoinColumn)({ name: 'LoaiMatGiaoThong' }),
    (0, typeorm_1.ManyToOne)(() => dm_loai_mat_giao_thong_entity_1.DMLoaiMatGiaoThongEntity, {
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", dm_loai_mat_giao_thong_entity_1.DMLoaiMatGiaoThongEntity)
], GiaoThongEntity.prototype, "LoaiMatGiaoThong", void 0);
GiaoThongEntity = __decorate([
    (0, typeorm_1.Entity)('GIAOTHONG', { synchronize: false })
], GiaoThongEntity);
exports.GiaoThongEntity = GiaoThongEntity;
//# sourceMappingURL=giao-thong.entity.js.map