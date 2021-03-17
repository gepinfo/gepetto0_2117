import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18NextModule } from 'angular-i18next';
import { TemplateComponent } from './template.component';

@NgModule({
    imports: [
        CommonModule,
        I18NextModule.forRoot(),
    ],
    declarations: [
        TemplateComponent,
    ], 
    exports: [
        TemplateComponent,
    ]
})
export class TemplateModule { }