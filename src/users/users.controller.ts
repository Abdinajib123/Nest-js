import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {

 @Get()
 findAll(){
    return[{id:1,name:"Abdinajib"}]
 }

 @Get(':id')
findOne(@Param('id') id: string){
    return {id:id,name:"Abdinajib"}
 }

 @Post()
 create(@Body() user:{}){
    return user
 }
 @Patch(':id')
 update(@Param('id') id:string, @Body() userupde:{}){
    return {id,...userupde}
 }
 @Delete(':id')
 remove(@Param('id') id:string){
    return {msg:`user with id ${id} deleted`}
 }

}
