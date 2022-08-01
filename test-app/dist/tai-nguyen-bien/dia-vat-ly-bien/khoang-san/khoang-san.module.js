"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KhoangSanModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const dm_loai_khoang_san_module_1 = require("./danh-muc/dm-loai-khoang-san/dm-loai-khoang-san.module");
const khoang_san_controller_1 = require("./khoang-san.controller");
const khoang_san_entity_1 = require("./khoang-san.entity");
const khoang_san_service_1 = require("./khoang-san.service");
let KhoangSanModule = class KhoangSanModule {
};
KhoangSanModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([khoang_san_entity_1.KhoangSanEntity]), dm_loai_khoang_san_module_1.DMLoaiKhoangSanModule],
        providers: [khoang_san_service_1.KhoangSanService],
        controllers: [khoang_san_controller_1.KhoangSanController],
    })
], KhoangSanModule);
exports.KhoangSanModule = KhoangSanModule;
//# sourceMappingURL=khoang-san.module.js.map