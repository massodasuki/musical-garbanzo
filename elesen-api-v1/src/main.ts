import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Swagger config
  const config = new DocumentBuilder()
    .setTitle('eLesen API')
    .setDescription('API documentation for Jabatan Perikanan vessel system')
    .setVersion('1.0')
    .addBearerAuth() // enable JWT token usage
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document); // Docs at http://localhost:3000/api



  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
