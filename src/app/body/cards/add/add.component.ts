import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute } from '@angular/router';
import { MusicService } from '../../../music.service';
import { error } from 'util';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  public comments: string;
  public mbid1: string;
  public track: string;
  public trackinfo = {
    trackid: this.mbid1,
    trackname: this.track,
    comments: this.comments
  }
  constructor( private route: ActivatedRoute , private router: Router, public music_service: MusicService) { }

  ngOnInit() {
    this.mbid1 = this.route.snapshot.paramMap.get('mbid');
    console.log(this.mbid1);
    this.music_service.findTrack(this.mbid1).subscribe(
      data => {
        this.trackinfo.trackname = data.track.name;
        this.trackinfo.trackid = data.track.mbid1;
        this.trackinfo.comments = data.track.comments;
  let m: any = this.music_service.saveTrack(this.trackinfo).subscribe(
    // data => {}
  );
      }
    );
  }
// error =>{
//   console.log('some error occured');
//   console.log(error.errorMessage);
// }
}
