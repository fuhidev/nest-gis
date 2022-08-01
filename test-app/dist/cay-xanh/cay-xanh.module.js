"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CayXanhModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const cay_xanh_controller_1 = require("./cay-xanh.controller");
const cay_xanh_entity_1 = require("./cay-xanh.entity");
const cay_xanh_service_1 = require("./cay-xanh.service");
let CayXanhModule = class CayXanhModule {
};
CayXanhModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([cay_xanh_entity_1.CayXanhEntity])],
        providers: [cay_xanh_service_1.CayXanhService],
        controllers: [cay_xanh_controller_1.CayXanhController]
    })
], CayXanhModule);
exports.CayXanhModule = CayXanhModule;
//# sourceMappingURL=cay-xanh.module.js.map