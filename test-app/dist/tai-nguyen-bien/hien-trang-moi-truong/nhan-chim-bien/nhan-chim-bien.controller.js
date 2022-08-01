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
exports.NhanChimBienController = void 0;
const common_1 = require("@nestjs/common");
const crud_1 = require("@nestjsx/crud");
const nhan_chim_bien_service_1 = require("./nhan-chim-bien.service");
const nhan_chim_bien_entity_1 = require("./nhan-chim-bien.entity");
const nestjs_gis_1 = require("../../../../../dist");
let NhanChimBienController = class NhanChimBienController {
    constructor(service) {
        this.service = service;
    }
    ngOnInit() { }
};
NhanChimBienController = __decorate([
    (0, nestjs_gis_1.RouteMetadata)(),
    (0, nestjs_gis_1.GISCrud)(),
    (0, crud_1.Crud)({
        model: { type: nhan_chim_bien_entity_1.NhanChimBienEntity },
        params: {
            objectId: {
                primary: true,
                field: 'objectId',
                type: 'number',
            },
        },
        query: {
            join: {
                vatChatDuocNhanChims: {},
                'vatChatDuocNhanChims.ten': {},
            },
        },
    }),
    (0, common_1.Controller)('rest/nhan-chim-bien'),
    __metadata("design:paramtypes", [nhan_chim_bien_service_1.NhanChimBienService])
], NhanChimBienController);
exports.NhanChimBienController = NhanChimBienController;
//# sourceMappingURL=nhan-chim-bien.controller.js.map