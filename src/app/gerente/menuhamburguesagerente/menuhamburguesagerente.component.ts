import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-menuhamburguesagerente',
  templateUrl: './menuhamburguesagerente.component.html',
  styleUrls: ['./menuhamburguesagerente.component.css']
})
export class MenuhamburguesagerenteComponent {
  
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
