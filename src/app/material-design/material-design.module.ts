import { NgModule } from '@angular/core';
import {LayoutModule} from '@angular/cdk/layout';
// tslint:disable-next-line:max-line-length
import { MatButtonModule, MatGridListModule, MatCheckboxModule, MatCardModule, MatInputModule,
  MatToolbarModule, MatStepperModule, MatRippleModule, MatExpansionModule, MatSlideToggleModule,
  MatDialogModule, MatListModule, MatIconModule, MatMenuModule, MatSelectModule, MatTooltipModule,
   MatChipsModule, MatTableModule, MatPaginatorModule, MatSnackBarModule, MatDatepickerModule,
   MatDividerModule, MatTabsModule, MatProgressSpinnerModule, MatRadioModule, MatNativeDateModule} from '@angular/material';


@NgModule({
  imports: [LayoutModule, MatButtonModule, MatGridListModule, MatTableModule,
     MatPaginatorModule, MatCheckboxModule,
      MatCardModule, MatInputModule, MatToolbarModule,
       MatStepperModule, MatRippleModule, MatExpansionModule,
       MatSlideToggleModule, MatDialogModule, MatListModule,
       MatIconModule, MatMenuModule, MatSelectModule,
       MatChipsModule, MatTooltipModule,
       MatSnackBarModule, MatDatepickerModule,
       MatDividerModule, MatTabsModule, MatProgressSpinnerModule, MatRadioModule, MatNativeDateModule, ],
  exports: [LayoutModule, MatButtonModule,
    MatGridListModule, MatTableModule,
    MatPaginatorModule, MatCheckboxModule, MatCardModule, MatInputModule,
    MatToolbarModule, MatStepperModule, MatRippleModule, MatExpansionModule,
    MatSlideToggleModule, MatDialogModule, MatListModule, MatIconModule,
    MatMenuModule, MatSelectModule, MatChipsModule, MatTooltipModule,
    MatSnackBarModule, MatDatepickerModule, MatDividerModule, MatTabsModule,
    MatProgressSpinnerModule, MatRadioModule, MatNativeDateModule, ],
})
export class MaterialDesignModule { }
