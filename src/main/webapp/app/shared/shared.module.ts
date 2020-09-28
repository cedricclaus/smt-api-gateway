import { NgModule } from '@angular/core';
import { SmtApiGatewaySharedLibsModule } from './shared-libs.module';
import { AlertComponent } from './alert/alert.component';
import { AlertErrorComponent } from './alert/alert-error.component';
import { HasAnyAuthorityDirective } from './auth/has-any-authority.directive';

@NgModule({
  imports: [SmtApiGatewaySharedLibsModule],
  declarations: [AlertComponent, AlertErrorComponent, HasAnyAuthorityDirective],
  exports: [SmtApiGatewaySharedLibsModule, AlertComponent, AlertErrorComponent, HasAnyAuthorityDirective],
})
export class SmtApiGatewaySharedModule {}
