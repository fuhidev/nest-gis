"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ViTheBienModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViTheBienModule = void 0;
const common_1 = require("@nestjs/common");
const cang_bien_module_1 = require("./cang-bien/cang-bien.module");
const thuy_loi_module_1 = require("./thuy-loi/thuy-loi.module");
let ViTheBienModule = ViTheBienModule_1 = class ViTheBienModule {
};
ViTheBienModule = ViTheBienModule_1 = __decorate([
    (0, common_1.Module)({
        imports: [ViTheBienModule_1, thuy_loi_module_1.ThuyLoiModule, cang_bien_module_1.CangBienModule],
        providers: [],
        controllers: [],
    })
], ViTheBienModule);
exports.ViTheBienModule = ViTheBienModule;
//# sourceMappingURL=vi-the-bien.module.js.map