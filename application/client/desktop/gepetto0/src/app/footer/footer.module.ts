import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18NextModule } from 'angular-i18next';
import { FooterComponent } from './footer.component';

@NgModule({
    imports: [
        CommonModule,
        I18NextModule.forRoot(),
    ],
    declarations: [
        FooterComponent,
    ], 
    exports: [
        FooterComponent,
    ]
})
export class FooterModule { }