"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NangLuongTaiTaoModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const nang_luong_tai_tao_controller_1 = require("./nang-luong-tai-tao.controller");
const nang_luong_tai_tao_entity_1 = require("./nang-luong-tai-tao.entity");
const nang_luong_tai_tao_service_1 = require("./nang-luong-tai-tao.service");
let NangLuongTaiTaoModule = class NangLuongTaiTaoModule {
};
NangLuongTaiTaoModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([nang_luong_tai_tao_entity_1.NangLuongTaiTaoEntity])],
        providers: [nang_luong_tai_tao_service_1.NangLuongTaiTaoService],
        controllers: [nang_luong_tai_tao_controller_1.NangLuongTaiTaoController]
    })
], NangLuongTaiTaoModule);
exports.NangLuongTaiTaoModule = NangLuongTaiTaoModule;
//# sourceMappingURL=nang-luong-tai-tao.module.js.map