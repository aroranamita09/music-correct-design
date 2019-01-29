import { Component, OnInit } from "@angular/core";
import { MusicService } from "../../music.service";
import { Observable } from "rxjs";
import { Track } from "src/app/itrack";

@Component({
  selector: "app-searchbox",
  templateUrl: "./searchbox.component.html",
  styleUrls: ["./searchbox.component.css"]
})
export class SearchboxComponent implements OnInit {
  private results: any = [];
  tracks;
  private message: string;
  constructor(private ms: MusicService) {}

  ngOnInit() {
  }
  getTracks(input) {
    this.ms.SearchTrack(input).subscribe(data => {
      console.log(data["results"]["trackmatches"]["track"]);
      this.tracks = data["results"]["trackmatches"]["track"];
    });
  }
}
