import { Injectable } from '@angular/core';
import { MusicService } from 'src/app/music.service';
import { ITrack } from 'src/app/track';
import { Observable } from 'rxjs/internal/Observable';
@Injectable({
  providedIn: 'root'
})
export class SearchboxService {
  private results: any = [];
   tracks;
  constructor(private ms: MusicService) { }

  getTracksService(input) {
    this.ms.SearchTrack(input).subscribe(data => {
        this.tracks = (data["results"]["trackmatches"]["track"]);
        console.log(this.tracks);
        return (this.tracks);
      // console.log(data["results"]["trackmatches"]["track"]);
      // return (data["results"]["trackmatches"]["track"]) ;
    });
  }
  returnTracks() {
    return ;
  }
}
