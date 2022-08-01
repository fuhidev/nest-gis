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
exports.NhanChimBienVatChatEntity = void 0;
const nestjs_gis_1 = require("../../../../../../dist");
const typeorm_1 = require("typeorm");
const nhan_chim_bien_entity_1 = require("../nhan-chim-bien.entity");
const dm_vat_chat_nhan_chim_entity_1 = require("./danh-muc/dm-vat-chat-nhan-chim/dm-vat-chat-nhan-chim.entity");
let NhanChimBienVatChatEntity = class NhanChimBienVatChatEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'Ma' }),
    __metadata("design:type", Number)
], NhanChimBienVatChatEntity.prototype, "ma", void 0);
__decorate([
    (0, nestjs_gis_1.Column)({
        name: 'Ten',
        nullable: true,
        alias: 'Tên',
    }),
    __metadata("design:type", Number)
], NhanChimBienVatChatEntity.prototype, "maTen", void 0);
__decorate([
    (0, typeorm_1.JoinColumn)({ name: 'Ten' }),
    (0, typeorm_1.ManyToOne)(() => dm_vat_chat_nhan_chim_entity_1.DMVatChatNhanChimEntity, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    }),
    __metadata("design:type", dm_vat_chat_nhan_chim_entity_1.DMVatChatNhanChimEntity)
], NhanChimBienVatChatEntity.prototype, "ten", void 0);
__decorate([
    (0, nestjs_gis_1.Column)({
        name: 'SoLuong',
        nullable: true,
        alias: 'Số lượng',
    }),
    __metadata("design:type", Number)
], NhanChimBienVatChatEntity.prototype, "soLuong", void 0);
__decorate([
    (0, nestjs_gis_1.Column)({
        name: 'DonVi',
        nullable: true,
        alias: 'Đơn vị',
    }),
    __metadata("design:type", String)
], NhanChimBienVatChatEntity.prototype, "donVi", void 0);
__decorate([
    (0, nestjs_gis_1.Column)({
        name: 'MoTa',
        nullable: true,
        alias: 'Mô tả',
    }),
    __metadata("design:type", String)
], NhanChimBienVatChatEntity.prototype, "moTa", void 0);
__decorate([
    (0, nestjs_gis_1.Column)({
        name: 'NhanChimBien',
        nullable: true,
        alias: 'Nhận chìm biển',
    }),
    __metadata("design:type", String)
], NhanChimBienVatChatEntity.prototype, "maNhanChimBien", void 0);
__decorate([
    (0, typeorm_1.JoinColumn)({ name: 'NhanChimBien' }),
    (0, typeorm_1.ManyToOne)(() => nhan_chim_bien_entity_1.NhanChimBienEntity, {
        onDelete: 'CASCADE',
        createForeignKeyConstraints: false,
    }),
    __metadata("design:type", nhan_chim_bien_entity_1.NhanChimBienEntity)
], NhanChimBienVatChatEntity.prototype, "nhanChimBien", void 0);
NhanChimBienVatChatEntity = __decorate([
    (0, typeorm_1.Entity)('NhanChimBien_VatChat')
], NhanChimBienVatChatEntity);
exports.NhanChimBienVatChatEntity = NhanChimBienVatChatEntity;
//# sourceMappingURL=nhan-chim-bien-vat-chat.entity.js.map