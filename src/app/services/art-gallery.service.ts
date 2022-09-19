import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArtGalleryService {

  constructor(public httpClient:HttpClient) { }
  public tryIt(){
    return this.httpClient.get('https://api.artic.edu/api/v1/artworks?limit=50&fields=id,title,image_id,provenance_text,artist_display,date_display,main_reference_number')
  }
  public getAllart(identifier:any){
    return this.httpClient.get(`https://www.artic.edu/iiif/2/${identifier}/full/843,/0/default.jpg`)
  }
  public slideShow(){
    return this.httpClient.get('https://api.artic.edu/api/v1/artworks?limit=10&fields=id,title,image_id,provenance_text,artist_display,date_display,main_reference_number')
  }
  public getSlide(identifier:any){
    return this.httpClient.get(`https://www.artic.edu/iiif/2/${identifier}/full/843,/0/default.jpg`) 
  }
  public oneArt(id:any){
    return this.httpClient.get(`https://api.artic.edu/api/v1/artworks/${id}?fields=id,title,provenance_text,image_id,artist_display,date_display,main_reference_number`)
  }
  public nextArt(url:any){
    return this.httpClient.get(`${url}`)
  }
}
