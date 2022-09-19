import { Component, OnInit } from '@angular/core';
import { ArtGalleryService } from '../services/art-gallery.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(public artServive:ArtGalleryService) { }

  public artObj:any = {};
  public slideObj:any={};
  public EntireSlide:any=[];
   public artArray:any=[]; 
   public slideArray:any=[];
   public EntireArray:any=[];
   public Url:any ='';
   ngOnInit(): void {
   this.getArt()
   this.getSlide()
   }
  getArt(){
    this.artServive.tryIt().subscribe((data)=>{
      this.artObj=data
      this.EntireArray=this.artObj.data
      console.log(this.artObj.pagination.next_url)
      this.Url=this.artObj.pagination.next_url
      this.artObj.data.map((index:any)=>{
        this.artServive.getAllart(index.image_id).subscribe((data)=>{
          console.log(data)
        },(error)=>{
          this.artArray.push(error.url)
        })
      })
    })
    console.log(this.artArray)
  }
  getSlide(){
    this.artServive.slideShow().subscribe((data)=>{
     this.slideObj=data;
     this.EntireSlide=this.slideObj.data;
     console.log(this.EntireSlide)
     this.EntireSlide.map((index:any)=>{
      this.artServive.getSlide(index.image_id).subscribe((data)=>{
        console.log(data)
      },(error)=>{
       this.slideArray.push(error.url)
      })
     })
    })
    console.log(this.slideArray)
  }
  nextArt(){
    this.artServive.nextArt(this.Url).subscribe((data)=>{
      console.log(data)
    })
  }
}