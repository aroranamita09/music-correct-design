import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-getll-tracks-in-local',
  templateUrl: './getll-tracks-in-local.component.html',
  styleUrls: ['./getll-tracks-in-local.component.css']
})
export class GetllTracksInLocalComponent implements OnInit {
  constructor(private _route: ActivatedRoute,private router: Router) { }
  ngOnInit() {
  }
  search():any{
    trackname:this.trackname;
    console.log(this.trackname);
    this.router.navigate(['/searchtrack',this.trackname]);
  }
}

