import { Controller, Post, Body, Res, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { Response, Request } from 'express';
import { JwtRefreshGuard } from './jwt/jwt-refresh.guard';
import { ApiQuery, ApiTags, ApiOkResponse  } from '@nestjs/swagger';
import { LoginResponseDto } from 'src/swagger/response/login-response.dto';

@ApiTags('Login')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  
  @Post('login')
    @ApiQuery({ name: 'username', required: true, description: 'Username Pegawai' })
    @ApiQuery({ name: 'password', required: true })
    @ApiOkResponse({
      description: 'Returns JWT access token after successful login',
      type: LoginResponseDto,
    })
  async login(@Body() dto: LoginDto, @Res() res: Response) {
    const user = await this.authService.validateUser(dto.username, dto.password);
    return this.authService.login(user, res);
  }

  @Post('logout')
  async logout(@Res({ passthrough: true }) res: Response) {
    return this.authService.logout(res);
  }

  @UseGuards(JwtRefreshGuard)
  @Post('refresh')
  async refresh(@Req() req: Request, @Res() res: Response) {
    return this.authService.refreshToken(req, res);
  }
}
