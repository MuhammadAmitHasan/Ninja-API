import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { NinjasService } from './ninjas.service';

// behind the scenes whats happing is that the controller is calling the service
// const service = new NinjasService();
// const controller = new NinjasController(service);

@Controller('ninjas')
// To implement the guar in full route
// @UseGuards(BeltGuard)
export class NinjasController {
  // create constructor to not calling every time the service
  constructor(private readonly ninjasService: NinjasService) {}

  // GET /ninjas --> []
  // @Get()
  // getNinjas() {
  //   return [];
  // }

  // GET /ninjas?weapon=fast --> []
  @Get()
  getNinjas(@Query('weapon') weapon: 'stars' | 'nunchucks') {
    // const service = new NinjasService();
    return this.ninjasService.getNinjas(weapon);
  }

  // GET /ninjas/:id
  @Get(':id')
  // get the id of the ninja from the URL
  getSingleNinja(@Param('id') id: string) {
    try {
      return this.ninjasService.getNinja(Number(id));
    } catch (error) {
      throw new NotFoundException();
    }
  }

  // POST /ninjas
  @Post()
  // To implement the guard in specific route action
  // @UseGuards(BeltGuard)
  // Take body from API request
  createNinja(@Body(new ValidationPipe()) createNinjaDto: CreateNinjaDto) {
    return this.ninjasService.createNinja(createNinjaDto);
  }

  //PUT /ninjas/:id
  @Put(':id')
  updateNinja(@Param('id') id: string, @Body() updateNinjaDto: CreateNinjaDto) {
    return this.ninjasService.updateNinja(Number(id), updateNinjaDto);
  }

  // DELETE /ninjas/:id
  @Delete(':id')
  deleteNinja(@Param('id') id: string) {
    return this.ninjasService.removeNinja(Number(id));
  }
}
