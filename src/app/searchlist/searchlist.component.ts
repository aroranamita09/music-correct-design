import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { MusicService } from '../music.service';
@Component({
  selector: 'app-searchlist',
  template: `
    <p>
      searchlist works!
    </p>
  `,
  styles: []
})
export class SearchlistComponent implements OnInit {
  public Playlist = [];
  public errorMsg;
constructor(private _musicService: MusicService, private router: Router) { }
ngOnInit() {
  this._musicService.getAlltracks()
  .subscribe(data => this.Playlist = data,
             error => this.errorMsg = error);
}

}
