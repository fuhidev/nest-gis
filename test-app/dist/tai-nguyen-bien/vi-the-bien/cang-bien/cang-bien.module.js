"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CangBienModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const cang_bien_controller_1 = require("./cang-bien.controller");
const cang_bien_entity_1 = require("./cang-bien.entity");
const cang_bien_service_1 = require("./cang-bien.service");
const dm_loai_cang_module_1 = require("./danh-muc/dm-loai-cang/dm-loai-cang.module");
let CangBienModule = class CangBienModule {
};
CangBienModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([cang_bien_entity_1.CangBienEntity]), dm_loai_cang_module_1.DmLoaiCangModule],
        providers: [cang_bien_service_1.CangBienService],
        controllers: [cang_bien_controller_1.CangBienController],
    })
], CangBienModule);
exports.CangBienModule = CangBienModule;
//# sourceMappingURL=cang-bien.module.js.map