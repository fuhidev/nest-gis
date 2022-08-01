"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimDuongModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const tim_duong_controller_1 = require("./tim-duong.controller");
const tim_duong_entity_1 = require("./tim-duong.entity");
const tim_duong_service_1 = require("./tim-duong.service");
let TimDuongModule = class TimDuongModule {
};
TimDuongModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([tim_duong_entity_1.TimDuongEntity])],
        providers: [tim_duong_service_1.TimDuongService],
        controllers: [tim_duong_controller_1.TimDuongController],
    })
], TimDuongModule);
exports.TimDuongModule = TimDuongModule;
//# sourceMappingURL=tim-duong.module.js.map