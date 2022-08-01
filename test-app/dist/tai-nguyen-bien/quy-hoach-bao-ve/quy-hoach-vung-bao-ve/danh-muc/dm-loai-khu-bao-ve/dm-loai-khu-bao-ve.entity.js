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
exports.DmLoaiKhuBaoVeEntity = void 0;
const nestjs_gis_1 = require("../../../../../../../dist");
const typeorm_1 = require("typeorm");
let DmLoaiKhuBaoVeEntity = class DmLoaiKhuBaoVeEntity {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)({ name: 'Code' }),
    __metadata("design:type", String)
], DmLoaiKhuBaoVeEntity.prototype, "code", void 0);
__decorate([
    (0, nestjs_gis_1.Column)({
        name: 'Value',
        nullable: true,
        alias: 'Giá trị',
    }),
    __metadata("design:type", String)
], DmLoaiKhuBaoVeEntity.prototype, "value", void 0);
DmLoaiKhuBaoVeEntity = __decorate([
    (0, typeorm_1.Entity)('QuyHoach_VungBaoVe_DM_LoaiKhu')
], DmLoaiKhuBaoVeEntity);
exports.DmLoaiKhuBaoVeEntity = DmLoaiKhuBaoVeEntity;
//# sourceMappingURL=dm-loai-khu-bao-ve.entity.js.map