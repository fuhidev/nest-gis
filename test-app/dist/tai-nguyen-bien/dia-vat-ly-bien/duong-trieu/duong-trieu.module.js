"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DuongTrieuModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const dm_loai_duong_trieu_module_1 = require("./danh-muc/dm-loai-duong-trieu/dm-loai-duong-trieu.module");
const duong_trieu_controller_1 = require("./duong-trieu.controller");
const duong_trieu_entity_1 = require("./duong-trieu.entity");
const duong_trieu_service_1 = require("./duong-trieu.service");
let DuongTrieuModule = class DuongTrieuModule {
};
DuongTrieuModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([duong_trieu_entity_1.DuongTrieuEntity]), dm_loai_duong_trieu_module_1.DmLoaiDuongTrieuModule],
        providers: [duong_trieu_service_1.DuongTrieuService],
        controllers: [duong_trieu_controller_1.DuongTrieuController],
    })
], DuongTrieuModule);
exports.DuongTrieuModule = DuongTrieuModule;
//# sourceMappingURL=duong-trieu.module.js.map