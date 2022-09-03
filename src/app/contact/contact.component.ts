import { Component, OnInit } from '@angular/core';
import { ArtGalleryService } from '../services/art-gallery.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(public artServive:ArtGalleryService) { }

 public artArray:any = [];

  ngOnInit(): void {
  this.getArt()
  }
 getArt(){
    // this.artServive.getAllart().subscribe((data)=>{
    //   console.log(data)
    // },(error)=>{
    //   console.log(error)
    // })
    }
 
}
