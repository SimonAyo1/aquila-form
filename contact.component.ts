import { Component, OnInit } from '@angular/core';
import { MediaChange, MediaObserver, ScreenTypes } from '@angular/flex-layout';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: [

    './contact.component.css',

  ]
})
export class ContactComponent implements OnInit {

  public isHandSet: Subscription
  public isSmall: boolean = false
  public handset: any
  constructor(private mediaObserver: MediaObserver) {
    this.isHandSet = this.mediaObserver.media$.subscribe(
      (res: MediaChange) => {
        this.handset = res.mqAlias
        console.log(this.handset)
        this.isSmall = this.handset === "tablet" ? true : false
      }
    )
  }

  ngOnInit() {


  }
  ngOnDestroy() {

  }
}
