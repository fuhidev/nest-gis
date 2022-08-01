"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimSongModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const tim_song_controller_1 = require("./tim-song.controller");
const tim_song_entity_1 = require("./tim-song.entity");
const tim_song_service_1 = require("./tim-song.service");
let TimSongModule = class TimSongModule {
};
TimSongModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([tim_song_entity_1.TimSongEntity])],
        providers: [tim_song_service_1.TimSongService],
        controllers: [tim_song_controller_1.TimSongController],
    })
], TimSongModule);
exports.TimSongModule = TimSongModule;
//# sourceMappingURL=tim-song.module.js.map