"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LyHoaBienModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const ly_hoa_bien_controller_1 = require("./ly-hoa-bien.controller");
const ly_hoa_bien_entity_1 = require("./ly-hoa-bien.entity");
const ly_hoa_bien_service_1 = require("./ly-hoa-bien.service");
let LyHoaBienModule = class LyHoaBienModule {
};
LyHoaBienModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([ly_hoa_bien_entity_1.LyHoaBienEntity])],
        providers: [ly_hoa_bien_service_1.LyHoaBienService],
        controllers: [ly_hoa_bien_controller_1.LyHoaBienController],
    })
], LyHoaBienModule);
exports.LyHoaBienModule = LyHoaBienModule;
//# sourceMappingURL=ly-hoa-bien.module.js.map