import { Component, OnInit } from '@angular/core';
import { MusicService } from 'src/app/music.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  let trackid1 = this._route.snapshot.paramMap.get('trackid');
    this.trackinfo.trackid = trackid1;
    this.trackinfo.comments = "abc";
    this.trackinfo.trackname = "abc";
    this.muzixservice.deletetrack(this.trackinfo.trackid).subscribe();

  constructor(private serve: MusicService) { }
  serve.delete
  ngOnInit() {
  }

}

