"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HanhLangBaoVeBoBienModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const hanh_lang_bao_ve_bo_bien_controller_1 = require("./hanh-lang-bao-ve-bo-bien.controller");
const hanh_lang_bao_ve_bo_bien_entity_1 = require("./hanh-lang-bao-ve-bo-bien.entity");
const hanh_lang_bao_ve_bo_bien_service_1 = require("./hanh-lang-bao-ve-bo-bien.service");
let HanhLangBaoVeBoBienModule = class HanhLangBaoVeBoBienModule {
};
HanhLangBaoVeBoBienModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([hanh_lang_bao_ve_bo_bien_entity_1.HanhLangBaoVeBoBienEntity])],
        providers: [hanh_lang_bao_ve_bo_bien_service_1.HanhLangBaoVeBoBienService],
        controllers: [hanh_lang_bao_ve_bo_bien_controller_1.HanhLangBaoVeBoBienController]
    })
], HanhLangBaoVeBoBienModule);
exports.HanhLangBaoVeBoBienModule = HanhLangBaoVeBoBienModule;
//# sourceMappingURL=hanh-lang-bao-ve-bo-bien.module.js.map