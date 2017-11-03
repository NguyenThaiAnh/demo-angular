import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  key: string;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  // send param key search from nav component to home component
  keySearch(event) {
    this.key = event;
    this.router.navigate(['/home'], { queryParams: { 'keySearch': this.key } });
  }
}
