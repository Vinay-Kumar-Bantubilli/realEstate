import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';




const MaterialModules:any = [
  MatButtonModule,MatToolbarModule,MatIconModule,MatSelectModule,MatGridListModule,MatCardModule,MatDividerModule
]

@NgModule({
  imports:MaterialModules,
  exports:MaterialModules
})
export class MaterialModule { }
