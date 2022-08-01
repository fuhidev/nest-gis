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
exports.DMLoaiDamPhaEntity = void 0;
const typeorm_1 = require("typeorm");
let DMLoaiDamPhaEntity = class DMLoaiDamPhaEntity {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)({ name: 'Code' }),
    __metadata("design:type", String)
], DMLoaiDamPhaEntity.prototype, "code", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'Value',
        nullable: true,
    }),
    __metadata("design:type", String)
], DMLoaiDamPhaEntity.prototype, "value", void 0);
DMLoaiDamPhaEntity = __decorate([
    (0, typeorm_1.Entity)('DamPhaVenBien_DM_Loai')
], DMLoaiDamPhaEntity);
exports.DMLoaiDamPhaEntity = DMLoaiDamPhaEntity;
//# sourceMappingURL=dm-loai-dam-pha.entity.js.map