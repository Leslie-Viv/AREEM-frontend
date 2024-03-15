import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-menuhamburguesafinanzas',
  templateUrl: './menuhamburguesafinanzas.component.html',
  styleUrls: ['./menuhamburguesafinanzas.component.css']
})
export class MenuhamburguesafinanzasComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    this.listenForOutsideClicks();
  }

  listenForOutsideClicks() {
    document.addEventListener('click', (event) => {
      const clickedInside = this.elementRef.nativeElement.contains(event.target);
      if (!clickedInside && this.sidenav.opened) {
        this.sidenav.toggle();
      }
    });
  }


}
