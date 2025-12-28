import { Controller, Get, Param } from '@nestjs/common';

@Controller('users')
export class UsersController {

    @Get()
    findAll() {
        return [
            { id: 1, name: 'Ahmed' },
            { id: 2, name: 'Ali' },
        ];
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return { id };
    }
}
