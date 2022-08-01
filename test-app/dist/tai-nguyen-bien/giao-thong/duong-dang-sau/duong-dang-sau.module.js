"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DuongDangSauModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const duong_dang_sau_controller_1 = require("./duong-dang-sau.controller");
const duong_dang_sau_entity_1 = require("./duong-dang-sau.entity");
const duong_dang_sau_service_1 = require("./duong-dang-sau.service");
let DuongDangSauModule = class DuongDangSauModule {
};
DuongDangSauModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([duong_dang_sau_entity_1.DuongDangSauEntity])],
        providers: [duong_dang_sau_service_1.DuongDangSauService],
        controllers: [duong_dang_sau_controller_1.DuongDangSauController],
    })
], DuongDangSauModule);
exports.DuongDangSauModule = DuongDangSauModule;
//# sourceMappingURL=duong-dang-sau.module.js.map