import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { MusicService } from '../music.service';
@Component({
  selector: 'app-searchlist',
  template: `
    <p>
      searchlist works!</p>
      <div class="container" style="text-align:center">
 <div class="row" style="text-align:center">
   <div class="col-md-12" style="font-size:22px">My Favourite Tracks </div>
   <br><br><br><br>
 </div>
 <div class="row" style="text-align:center" >
   <div *ngFor="let track of myplaylist" class="col-md-4">

     <div class="panel panel-default">
       <div class="panel-heading">{{track.trackname}}</div>
       <div class="panel-body">

         <p> This song is officialy composed by:{{track.comments}}</p>
       </div>
       <div class="panel-footer">ArtistName: {{track.comments}}<br />
        <button  [routerLink]="['/delete',track.trackid]" type="button" class="btn btn-primary btn-sm ">Delete</button>
        <button  [routerLink]="['/update',track.trackid]" type="button" class="btn btn-primary btn-sm ">update</button>
       </div>

     </div>

     <br />
   </div>

 </div>

</div>
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

// let trackname = this._route.snapshot.paramMap.get('trackname');
//    console.log(trackname);

//    this.alltracks=this.muzixservice.searchtrack(trackname).subscribe(

//      data => {

//        this.alltracks = data;

//      },
//      error =>{
//        console.log("some error occured");
//        console.log(error.errorMessage)
//      }


//    );



//  }
