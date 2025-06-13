import { Controller, Delete, Get, Param, Post, Put, Query, Body, NotFoundException } from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';
import { NinjasService } from './ninjas.service';


//dependency injections
@Controller('ninjas')
export class NinjasController {
    constructor(private readonly NinjaService: NinjasService){}
    @Get()
    getNinjas(@Query('weapon') weapon:'stars'|'nunchucks'){
        return this.NinjaService.getNinjas(weapon);
    }
    @Get(':id')
    getNinja(@Param('id') id:string){
        try{
        return this.NinjaService.getNinja(+id);
        }catch(error){
            throw new NotFoundException()
        }
    }

    @Post()
    createNinja(@Body() createNinjaDto: CreateNinjaDto){
        return this.NinjaService.createNinja(createNinjaDto);
    }

    @Put(':id')
    updateNinja(@Param('id') id:string ,@Body() updateNinjaDto:UpdateNinjaDto){
        return this.NinjaService.updateNinja(+id, updateNinjaDto)
    }
    
    @Delete(':id')
    deleteNinja(@Param('id') id:string){
     return this.NinjaService.removeNinja(+id)
    }
}
