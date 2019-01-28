import { Component, OnInit } from '@angular/core';
import { MusicService } from '../../music.service';

@Component({
  selector: 'app-cast',
  templateUrl: './cast.component.html',
  styleUrls: ['./cast.component.css']
})
export class CastComponent implements OnInit {
  private name;
  public tracks;
  constructor( public service: MusicService) { }

  ngOnInit() {
  }
  gotoApi(name){
    this.name = name;
  }
  // tracks=service.SearchTracks(name);

}
