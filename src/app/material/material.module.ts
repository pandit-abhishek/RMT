import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';


import { 
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatSidenavModule,
    MatListModule,
    MatIcon,
    MatIconModule
    
} from '@angular/material';




@NgModule({
    imports: [
        CommonModule,
        MatToolbarModule,
        MatInputModule,
        MatSelectModule,
        MatOptionModule,
        MatSidenavModule,
        MatListModule,
        MatIconModule
    ],
    exports: [
        MatToolbarModule,
        MatInputModule,
        MatSelectModule,
        MatOptionModule,
        MatSidenavModule,
        MatListModule,
        MatIconModule   
    ],
    declarations: []
})
export class MaterialModule { }
