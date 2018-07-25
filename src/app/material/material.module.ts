import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';


import { 
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatSidenavModule,
    MatListModule,
    MatIcon,
    MatIconModule,
    MatExpansionModule,
    MatCardModule,
    MatChipsModule,
    MatTableModule
    
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
        MatIconModule,
        MatTabsModule,
        MatExpansionModule,
        MatCardModule,
        MatChipsModule,
        MatTableModule
    ],
    exports: [
        MatToolbarModule,
        MatInputModule,
        MatSelectModule,
        MatOptionModule,
        MatSidenavModule,
        MatListModule,
        MatIconModule,
        MatTabsModule,
        MatExpansionModule,
        MatCardModule,
        MatChipsModule,
        MatTableModule
    ],
    declarations: []
})
export class MaterialModule { }
