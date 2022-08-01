import { Body, Controller, Post } from '@nestjs/common';
import { existsSync, lstatSync, readdirSync, rmdirSync, unlinkSync } from 'fs';
import { tmpdir } from 'os';
import { join } from 'path';
import { GeometryService } from './geometry.service';
const TMP_DIR = join(tmpdir(), 'geometyservice');
@Controller('services/geometry')
export class GeometryController {
  constructor(private readonly service: GeometryService) {}

  @Post('project')
  getProject(@Body() body) {
    return this.service.project(body);
  }

  deleteFolderRecursive(directoryPath) {
    if (existsSync(directoryPath)) {
      readdirSync(directoryPath).forEach((file, index) => {
        const curPath = join(directoryPath, file);
        if (lstatSync(curPath).isDirectory()) {
          // recurse
          this.deleteFolderRecursive(curPath);
        } else {
          // delete file
          unlinkSync(curPath);
        }
      });
      rmdirSync(directoryPath);
    }
  }
}
