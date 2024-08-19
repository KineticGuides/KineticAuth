import { Routes } from '@angular/router';
import { TemplateHomeComponent } from './pages/template-home/template-home.component';
import { ResolverService } from './resolver.service';
import { PasswordFormComponent } from './pages/password-form/password-form.component';

export const routes: Routes = [
    { path: '', component: TemplateHomeComponent },
    { path: 'p', component: PasswordFormComponent }
];
