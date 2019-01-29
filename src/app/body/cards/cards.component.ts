import { Component, ViewChild , AfterViewInit} from "@angular/core";
import { SearchboxService } from '../../header/searchbox/searchbox.service';
@Component({
  selector: "app-cards",
  templateUrl: "./cards.component.html",
  styleUrls: ["./cards.component.css"]
})
export class CardsComponent implements AfterViewInit {
  constructor(private searchService: SearchboxService) {}
  private tracks = [];
  ngAfterViewInit() {
    console.log("Hello");
    // this.tracks = this.searchService.returnTracks();
    // console.log('Cards' + this.tracks);
  }
}

