import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { tap, catchError } from "rxjs/operators";
import { ITrack } from "./track";
import { Track } from "./itrack";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class MusicService {
  private baseUrl = " http://ws.audioscrobbler.com/2.0";
  public apiKey = "3ea836d8e0a3eff98907b7d027fe49f7";
  public baseUrlMongo = "http://localhost:8080/api/v1";
  public allTracks;
  constructor(private http: HttpClient) {}

  SearchTrack(name): Observable<ITrack[]> {
    return this.http
      .get<ITrack[]>(
        this.baseUrl +
          "?method=track.search&track=" +
          name +
          "&api_key=" +
          this.apiKey +
          "&format=json"
      )
      .pipe(
        tap(data => alert(JSON.stringify(data))),
        catchError(this.errorHandler)
      );
  }
  errorHandler(error: HttpErrorResponse) {
    return Observable.throw(error.message || "Server Error");
  }
  // public SearchTrack(name): Observable<Track> {
  //   // tslint:disable-next-line:max-line-length
  //   this.allTracks = this.http.get<Track>(
  //     this.baseUrl +
  //       '/?method=track.getInfo&api_key=' +
  //       this.apiKey +
  //       '&artist=cher'  +
  //       '&track=' +
  //       name +
  //       '&format=json'
  //   );
  //   console.log(this.allTracks);
  //   return this.allTracks;
  // }
  public findTrack(mid): any {
    let trackinfo = this.http.get(
      this.baseUrl +
        "/?method=track.getInfo&api_key=" +
        this.apiKey +
        "&mbid=" +
        mid +
        "&format=json"
    );
    return trackinfo;
  }
  public saveTrack(trackinfo): any {
    let savetrack = this.http.post(this.baseUrlMongo + "create", trackinfo);
    console.log(trackinfo);
    return savetrack;
  }
  public getAlltracks(): any {
    let allTracks = this.http.get(this.baseUrlMongo + "getList");
    return allTracks;
  }
  public deleteTracks(mid): any {
    console.log("HERE :" + mid);
    let track = this.http.delete(this.baseUrlMongo + "delete" + mid);
    return track;
  }
}

