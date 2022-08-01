"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BienModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const bien_controller_1 = require("./bien.controller");
const bien_entity_1 = require("./bien.entity");
const bien_service_1 = require("./bien.service");
let BienModule = class BienModule {
};
BienModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([bien_entity_1.BienEntity])],
        providers: [bien_service_1.BienService],
        controllers: [bien_controller_1.BienController],
    })
], BienModule);
exports.BienModule = BienModule;
//# sourceMappingURL=bien.module.js.map