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
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuyHoachPhatTrienDuLichController = void 0;
const common_1 = require("@nestjs/common");
const crud_1 = require("@nestjsx/crud");
const quy_hoach_phat_trien_du_lich_service_1 = require("./quy-hoach-phat-trien-du-lich.service");
const quy_hoach_phat_trien_du_lich_entity_1 = require("./quy-hoach-phat-trien-du-lich.entity");
const nestjs_gis_1 = require("../../../../../dist");
let QuyHoachPhatTrienDuLichController = class QuyHoachPhatTrienDuLichController {
    constructor(service) {
        this.service = service;
    }
    ngOnInit() { }
};
QuyHoachPhatTrienDuLichController = __decorate([
    (0, nestjs_gis_1.RouteMetadata)(),
    (0, nestjs_gis_1.GISCrud)(),
    (0, crud_1.Crud)({
        model: { type: quy_hoach_phat_trien_du_lich_entity_1.QuyHoachPhatTrienDuLichEntity },
        params: {
            objectId: {
                primary: true,
                field: 'objectId',
                type: 'number',
            },
        },
    }),
    (0, common_1.Controller)('rest/quy-hoach-phat-trien-du-lich'),
    __metadata("design:paramtypes", [quy_hoach_phat_trien_du_lich_service_1.QuyHoachPhatTrienDuLichService])
], QuyHoachPhatTrienDuLichController);
exports.QuyHoachPhatTrienDuLichController = QuyHoachPhatTrienDuLichController;
//# sourceMappingURL=quy-hoach-phat-trien-du-lich.controller.js.map