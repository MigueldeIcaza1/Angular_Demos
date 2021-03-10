import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { FormsModule } from '@angular/forms';

import { BuiltInDirectiveComponent } from './built-in-directive/built-in-directive.component';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { GameControlComponent } from './odd-even-game/game-control/game-control.component';
import { OddComponent } from './odd-even-game/odd/odd.component';
import { EvenComponent } from './odd-even-game/even/even.component';
import { DIAndServicesComponent } from './di-and-services/di-and-services.component';
import { UserFilterPipe } from './di-and-services/users-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PropertyBindingComponent,
    BuiltInDirectiveComponent,
    StructuralDirectivesComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent,
    DIAndServicesComponent,
    UserFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
