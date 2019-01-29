import { Component, OnInit, Input } from "@angular/core";
import { SearchboxComponent } from '../../header/searchbox/searchbox.component';
@Component({
  selector: "app-cards",
  templateUrl: "./cards.component.html",
  styleUrls: ["./cards.component.css"]
})
export class CardsComponent implements OnInit {
  tracksDisplay;
  results: any = [];
  constructor() {}

  @Input() tracks: SearchboxComponent;
  
  ngOnInit() {
    console.log("Hello");
    this.tracksDisplay = this.tracks;
  }
  
}
