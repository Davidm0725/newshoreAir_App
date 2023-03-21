import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { QueryFlightService } from 'src/app/generic-components/services/queryFlights.service';
import { ConfirmDialogComponent } from 'src/app/generic-components/confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { MessageService } from 'primeng/api';
import { SpinnerService } from 'src/app/generic-components/services/spinner.service';


@Component({
  selector: 'app-find-fligth',
  templateUrl: './find-fligth.component.html',
  styleUrls: ['./find-fligth.component.css'],
  providers: [MessageService]
})
export class FindFligthComponent {
  bookingForm!: any;
  flights!: [];
  findFlight!: boolean;


  constructor(private svcFlight: QueryFlightService,
    private fb: FormBuilder,
    public dialog: MatDialog,
    public svcMessages: MessageService,
    private spinnerSvc: SpinnerService) {
  }

  ngOnInit() {
    this.resetForm();
    this.getFlights();
  }

  resetForm() {
    this.bookingForm = this.fb.group({
      origin: ['', [Validators.required, Validators.pattern('[A-Za-z]{3,}')]],
      destination: ['', [Validators.required, Validators.pattern('[A-Za-z]{3,}')]]
    });
  }

  getFlights(): void {
    this.svcFlight.getFlights().subscribe({
      next: resp => {
        if (resp) {
          this.flights = resp;
        } else {
          this.svcMessages.add({ severity: 'error', summary: 'Error', detail: 'Internal server error', life: 3000 });
        }
      },
      error: err => {
        this.svcMessages.add({ severity: 'error', summary: 'Error', detail: err.error.Message, life: 3000 });
      }
    });
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string, element: any): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '550px',
      height: '350px',
      enterAnimationDuration,
      exitAnimationDuration,
      data: element
    });

    dialogRef.afterClosed().subscribe(result => {

    });


  }
  onSubmit(form: FormGroup) {
    this.findFlight = false;
    let findItinerary: any;
    this.spinnerSvc.show();
    if (form.valid && (form.value.origin !== form.value.destination)) {
      this.flights.map((e: any) => {
        if (e.departureStation === form.value.origin.toUpperCase() && e.arrivalStation === form.value.destination.toUpperCase()) {
          this.findFlight = true;
          findItinerary = e;
        }
      });
      setTimeout(() => {
        this.spinnerSvc.hide();
        if (!this.findFlight) {
          this.svcMessages.add({ severity: 'error', summary: 'Error', detail: 'Su consulta no puede ser procesada.', life: 3000 });
        } else {
          this.openDialog('0ms', '0ms', findItinerary)
        }
      }, 1000);
    } else {
      this.svcMessages.add({ severity: 'error', summary: 'Error', detail: 'Same origin and destination', life: 3000 });
    }

  }

}
