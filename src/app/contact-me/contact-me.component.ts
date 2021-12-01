import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})
export class ContactMeComponent implements OnInit {

  readonly email: string = 'ryan@ryangloff.com';

  constructor() { }

  ngOnInit(): void {
  }

  copyEmailToClipboard(): void {
    navigator.clipboard.writeText(this.email);
  }

}
