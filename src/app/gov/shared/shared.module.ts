import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TabMenuModule } from 'primeng/tabmenu';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { DataListModule, ChartModule } from 'primeng/primeng';
import { AccordionModule } from 'primeng/accordion';
import { DataViewModule } from 'primeng/dataview';


import { PanelModule } from 'primeng/panel';
import { TabViewModule } from 'primeng/tabview';
import { GaugeModule } from 'angular-gauge';
import { NgxGaugeModule } from 'ngx-gauge';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SelectButtonModule } from 'primeng/selectbutton';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';



@NgModule({
  imports: [
    CommonModule

  ],
  declarations: [

  ],
  exports: [

    FormsModule,
    DataListModule,
    TabMenuModule,
    TableModule,
    ChartModule,
    DataViewModule,
    PanelModule,
    TabViewModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    GaugeModule,
    NgxGaugeModule,
    DropdownModule,
    AccordionModule,
    RadioButtonModule,
    SelectButtonModule,
    ScrollToModule,


  ],
  providers: [

  ]
})
export class SharedModule { }
