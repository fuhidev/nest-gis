"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HanhLangBienModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const hanh_lang_bien_controller_1 = require("./hanh-lang-bien.controller");
const hanh_lang_bien_entity_1 = require("./hanh-lang-bien.entity");
const hanh_lang_bien_service_1 = require("./hanh-lang-bien.service");
let HanhLangBienModule = class HanhLangBienModule {
};
HanhLangBienModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([hanh_lang_bien_entity_1.HanhLangBienEntity])],
        providers: [hanh_lang_bien_service_1.HanhLangBienService],
        controllers: [hanh_lang_bien_controller_1.HanhLangBienController],
    })
], HanhLangBienModule);
exports.HanhLangBienModule = HanhLangBienModule;
//# sourceMappingURL=hanh-lang-bien.module.js.map