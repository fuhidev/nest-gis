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
exports.PhanBoTramTichController = void 0;
const common_1 = require("@nestjs/common");
const crud_1 = require("@nestjsx/crud");
const phan_bo_tram_tich_service_1 = require("./phan-bo-tram-tich.service");
const phan_bo_tram_tich_entity_1 = require("./phan-bo-tram-tich.entity");
const nestjs_gis_1 = require("../../../../../dist");
let PhanBoTramTichController = class PhanBoTramTichController {
    constructor(service) {
        this.service = service;
    }
    ngOnInit() { }
};
PhanBoTramTichController = __decorate([
    (0, nestjs_gis_1.RouteMetadata)(),
    (0, nestjs_gis_1.GISCrud)(),
    (0, crud_1.Crud)({
        model: { type: phan_bo_tram_tich_entity_1.PhanBoTramTichEntity },
        params: {
            objectId: {
                primary: true,
                field: 'objectId',
                type: 'number',
            },
        },
    }),
    (0, common_1.Controller)('rest/phan-bo-tram-tich'),
    __metadata("design:paramtypes", [phan_bo_tram_tich_service_1.PhanBoTramTichService])
], PhanBoTramTichController);
exports.PhanBoTramTichController = PhanBoTramTichController;
//# sourceMappingURL=phan-bo-tram-tich.controller.js.map