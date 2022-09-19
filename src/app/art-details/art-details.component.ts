import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtGalleryService } from '../services/art-gallery.service';

@Component({
  selector: 'app-art-details',
  templateUrl: './art-details.component.html',
  styleUrls: ['./art-details.component.css']
})
export class ArtDetailsComponent implements OnInit {

  constructor(public artServive:ArtGalleryService,public actRoute:ActivatedRoute) { }

 public artArray:any = {};
 public oneArt:any ={}

  ngOnInit(): void {
  this.getArt()
  }
 getArt(){
  let id=this.actRoute.snapshot.params['id']
  this.artServive.oneArt(id).subscribe((data)=>{
    this.oneArt = data
    this.artArray = this.oneArt.data
    console.log(this.artArray)
    }
    ,(error)=>{
      console.log(error)
    })
    }

}
