import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { CarritoService } from './carrito/carrito.service';
import { CarritoController } from './carrito/carrito.controller';
import { ProductoController } from './producto/producto.controller';
import { ProductoService } from './producto/producto.service';
import { IndexController } from './index/index.controller';
import { IndexService } from './index/index.service';
import { BibliotecaController } from './biblioteca/biblioteca.controller';
import { BibliotecaService } from './biblioteca/biblioteca.service';
import { CatalogoController } from './catalogo/catalogo.controller';
import { CatalogoService } from './catalogo/catalogo.service';
import { RegisterController } from './register/register.controller';
import { RegisterService } from './register/register.service';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client'),   // <-- path to the static files
    }),
  ],
  controllers: [AppController, IndexController, ProductoController,CarritoController, BibliotecaController, CatalogoController, RegisterController],
  providers: [AppService, CarritoService, ProductoService, IndexService, BibliotecaService, CatalogoService, RegisterService],
})
export class AppModule {}