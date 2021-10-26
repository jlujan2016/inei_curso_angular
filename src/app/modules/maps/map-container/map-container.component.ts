import { Component, OnInit } from '@angular/core';
import { UbigeoData } from '../interfaces/ubigeo-data'; 
//import {ubigeosSelectedMock}from '../mocks/ubigeos-selected.mock';
import{UbigeoService}from '../services/ubigeo.service'

@Component({
  selector: 'app-map-container',
  templateUrl: './map-container.component.html',
  styleUrls: ['./map-container.component.scss']
})
export class MapContainerComponent implements OnInit {

  //ubigeoSelected: UbigeoData =  ubigeosSelectedMock[1];

  //ubigeosSelected:UbigeoData []=ubigeosSelectedMock;

  ubigeosSelected!:UbigeoData [];
  constructor(
    private ubigeoService: UbigeoService
  ) { }

  ngOnInit(): void {
    this.fetch();
  }

  fetch():void{
    this.ubigeosSelected = this.ubigeoService.getAllUbigeo();
  }

  mapClicler(ubigeo:string):void{
    console.log(">>> valor recibido",ubigeo);
  }


}
