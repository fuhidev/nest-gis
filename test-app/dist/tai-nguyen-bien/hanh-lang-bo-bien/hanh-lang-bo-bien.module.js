"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HanhLangBoBienModule = void 0;
const common_1 = require("@nestjs/common");
const duong_bo_module_1 = require("./duong-bo/duong-bo.module");
const hanh_lang_bao_ve_bo_bien_module_1 = require("./hanh-lang-bao-ve-bo-bien/hanh-lang-bao-ve-bo-bien.module");
let HanhLangBoBienModule = class HanhLangBoBienModule {
};
HanhLangBoBienModule = __decorate([
    (0, common_1.Module)({
        imports: [hanh_lang_bao_ve_bo_bien_module_1.HanhLangBaoVeBoBienModule,
            duong_bo_module_1.DuongBoModule,
        ],
    })
], HanhLangBoBienModule);
exports.HanhLangBoBienModule = HanhLangBoBienModule;
//# sourceMappingURL=hanh-lang-bo-bien.module.js.map