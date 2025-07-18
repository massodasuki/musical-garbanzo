import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DeviceRegistrationService } from './device-registration.service';
import { CreateDeviceRegistrationDto } from './dto/create-device-registration.dto';
import { UpdateDeviceRegistrationDto } from './dto/update-device-registration.dto';
import { ApiQuery, ApiTags, ApiOkResponse  } from '@nestjs/swagger';

@ApiTags('Device')
@Controller('/api/v1/applications/device-registration')
export class DeviceRegistrationController {
  constructor(private readonly deviceRegistrationService: DeviceRegistrationService) {}

  @Post()
  create(@Body() createDeviceRegistrationDto: CreateDeviceRegistrationDto) {
    return this.deviceRegistrationService.create(createDeviceRegistrationDto);
  }

  @Get()
  findAll() {
    return this.deviceRegistrationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.deviceRegistrationService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDeviceRegistrationDto: UpdateDeviceRegistrationDto) {
    return this.deviceRegistrationService.update(+id, updateDeviceRegistrationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.deviceRegistrationService.remove(+id);
  }
}
