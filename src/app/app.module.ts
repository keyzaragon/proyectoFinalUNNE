import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SobrenosotrosModule } from './componentes/sobrenosotros/sobrenosotros.module';
import { ServiciosModule } from './componentes/servicios/servicios.module';
import { PortafolioModule } from './componentes/portafolio/portafolio.module';
import { PorquenosotrosModule } from './componentes/porquenosotros/porquenosotros.module';
import { PiedepaginaModule } from './componentes/piedepagina/piedepagina.module';
import { NavegacionModule } from './componentes/navegacion/navegacion.module';
import { IntroduccionModule } from './componentes/introduccion/introduccion.module';
import { EquipoModule } from './componentes/equipo/equipo.module';
import { ContactoModule } from './componentes/contacto/contacto.module';
import { ClientesModule } from './componentes/clientes/clientes.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SobrenosotrosModule,
    ServiciosModule,
    PortafolioModule,
    PorquenosotrosModule,
    PiedepaginaModule,
    NavegacionModule,
    IntroduccionModule,
    EquipoModule,
    ContactoModule,
    ClientesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
