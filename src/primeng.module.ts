import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';


@NgModule({
    exports: [
        BrowserModule,
        MessagesModule,
        MessageModule,
        DialogModule,
        DropdownModule
    ],
    providers: [
        MessageService,
        ConfirmationService
    ],
})
export class PrimengModule { }