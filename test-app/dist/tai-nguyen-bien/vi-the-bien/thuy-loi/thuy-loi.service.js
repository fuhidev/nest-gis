"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThuyLoiService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const thuy_loi_entity_1 = require("./thuy-loi.entity");
const nestjs_gis_1 = require("../../../../../dist");
let ThuyLoiService = class ThuyLoiService extends nestjs_gis_1.GISTypeOrmCrudService {
    constructor(repo) {
        super(repo);
    }
};
ThuyLoiService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(thuy_loi_entity_1.ThuyLoiEntity)),
    __metadata("design:paramtypes", [Object])
], ThuyLoiService);
exports.ThuyLoiService = ThuyLoiService;
//# sourceMappingURL=thuy-loi.service.js.map