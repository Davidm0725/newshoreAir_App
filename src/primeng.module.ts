import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { MessageService } from 'primeng/api';


@NgModule({
    declarations: [
    ],
    imports: [
        BrowserModule,
        MessagesModule,
        MessageModule
    ],
    providers: [
        MessageService,
    ],
    bootstrap: [],
})
export class PrimengModule { }