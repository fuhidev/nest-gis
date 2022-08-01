"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DMDongHoDoModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const dm_dong_ho_do_controller_1 = require("./dm-dong-ho-do.controller");
const dm_dong_ho_do_entity_1 = require("./dm-dong-ho-do.entity");
const dm_dong_ho_do_service_1 = require("./dm-dong-ho-do.service");
let DMDongHoDoModule = class DMDongHoDoModule {
};
DMDongHoDoModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([dm_dong_ho_do_entity_1.DMDongHoDoEntity])],
        providers: [dm_dong_ho_do_service_1.DMDongHoDoService],
        controllers: [dm_dong_ho_do_controller_1.DMDongHoDoController],
    })
], DMDongHoDoModule);
exports.DMDongHoDoModule = DMDongHoDoModule;
//# sourceMappingURL=dm-dong-ho-do.module.js.map