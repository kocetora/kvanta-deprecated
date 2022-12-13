import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { ErrorComponent } from './error/error.component';
import { MaterialModule } from './shared/modules/material.module';
import { AuthModule } from './auth/auth.module';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { LangSwitcherModule } from './core/components/lang-switcher/lang-switcher.module';

@NgModule({
  declarations: [AppComponent, ErrorComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule,
    MaterialModule,
    AuthModule,
    RouterModule.forRoot(appRoutes, { useHash: true }),
    LangSwitcherModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
