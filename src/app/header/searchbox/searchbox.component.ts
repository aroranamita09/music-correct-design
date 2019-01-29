import { Component, OnInit, Input } from "@angular/core";
import { SearchboxService } from './searchbox.service';
import { ITrack } from '../../track';
import { MusicService } from 'src/app/music.service';

@Component({
  selector: "app-searchbox",
  templateUrl: "./searchbox.component.html",
  styleUrls: ["./searchbox.component.css"]
})
export class SearchboxComponent  {
  public  tracks = [] ;
   constructor(private ms: MusicService) {}

    getTracks(input) {
      this.ms.SearchTrack(input).subscribe(data => {
          this.tracks = (data["results"]["trackmatches"]["track"]);
          console.log(this.tracks);
    });
  }
}
