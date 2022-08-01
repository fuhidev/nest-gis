"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DuongBoModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const duong_bo_controller_1 = require("./duong-bo.controller");
const duong_bo_entity_1 = require("./duong-bo.entity");
const duong_bo_service_1 = require("./duong-bo.service");
let DuongBoModule = class DuongBoModule {
};
DuongBoModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([duong_bo_entity_1.DuongBoEntity])],
        providers: [duong_bo_service_1.DuongBoService],
        controllers: [duong_bo_controller_1.DuongBoController]
    })
], DuongBoModule);
exports.DuongBoModule = DuongBoModule;
//# sourceMappingURL=duong-bo.module.js.map