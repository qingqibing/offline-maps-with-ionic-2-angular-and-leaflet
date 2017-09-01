import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as L from "leaflet";
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    
  }

  options:any;
  ngOnInit(){
    var map = L.map('map')
       .setView([49.2852, -123.1238],12);
 
    L.tileLayer('van1/{z}/{x}/{y}.png', {
      minZoom:0,
       maxZoom:18
       
     }).addTo(map);
     var polygon = L.polygon([
      [49.209, -123.08],
      [49.203, -123.06],
      [49.251, -123.047]
  ]).addTo(map);
  var planes:any = [
		[49.209,-123.08],
		[49.203,-123.06],
		[49.251,-123.047]
	
    ];
    var marker:any;
    var test:any[]=[];
 
  	for (var i = 0; i < planes.length; i++) {
      marker = L.marker([planes[i][0],planes[i][1]]).addTo(map);
      test[i]=marker;
    }
    console.log(test);
    
  for(let i=0;i<3;i++){
    test[i].on('click',function(){
      console.log("marker"+i)
    });
  }
   
 }
  
}
