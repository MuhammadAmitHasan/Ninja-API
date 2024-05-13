import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('ninjas')
export class NinjasController {
  // GET /ninjas
  @Get()
  getNinjas() {
    return [];
  }

  // GET /ninjas/:id
  @Get(':id')
  getSingleNinja() {
    return {};
  }

  // POST /ninjas
  @Post()
  createNinja() {
    return {};
  }

  //PUT /ninjas/:id
  @Put(':id')
  updateNinja() {
    return {};
  }

  // DELETE /ninjas/:id
  @Delete(':id')
  deleteNinja() {
    return {};
  }
}
