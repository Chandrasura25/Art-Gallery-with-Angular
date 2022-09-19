import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtGalleryService } from '../services/art-gallery.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(public artServive:ArtGalleryService,public actRoute:ActivatedRoute) { }

 public artArray:any = [];

  ngOnInit(): void {
  this.getArt()
  }
 getArt(){
  let id=this.actRoute.snapshot.params['id']
  console.log(id)
    // this.artServive.getAllart().subscribe((data)=>{
    //   console.log(data)
    // },(error)=>{
    //   console.log(error)
    // })
    }
 
}
