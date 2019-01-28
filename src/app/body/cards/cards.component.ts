import { Component, OnInit } from '@angular/core';

import { MusicService } from '../../music.service';
import { Observable } from 'rxjs';
import { Track } from '../../itrack';
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  private results: any = [];
  constructor(private ms: MusicService) { }

  ngOnInit() {
    console.log(this.results.name);
  }
  getTracks(input) {
    this.ms.SearchTrack(input).subscribe((data) => {
      this.results = data;
      console.log(data);
    });
 }

}
