import { Component, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { currencies } from 'src/app/shared/models';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent {
  currency = currencies;
  selectedValue = this.currency[0];
  symbol = this.currency[0].symbol;
  price!: number;

  constructor(public dialogRef: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.price = data.price;
  }

  onConfirm(): void {
    const confirmData = {
      confirm: 'Ok',
      data: this.data
    }
    this.dialogRef.close(confirmData);
  }

  selectCurr(event: any) {
    this.price = this.data.price * event.value;
    this.symbol = event.symbol;
  }
}
