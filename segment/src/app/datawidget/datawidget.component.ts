import { Component, OnInit } from '@angular/core';
import {DataEnterService} from '../data-enter.service';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from 
'@angular/cdk/drag-drop';
@Component({
  selector: 'app-datawidget',
  templateUrl: './datawidget.component.html',
  styleUrls: ['./datawidget.component.css']
})
export class DatawidgetComponent implements OnInit {
  units={
    dataArr:[],
  };

  items:[];
  constructor(private service:DataEnterService) { }

  ngOnInit(): void {
    this.getData();
  }
  getData(){
    this.service.getData().subscribe(responce=>{console.log('Responce'+' '+ responce); this.items=responce['Items'];
  
  });

}
sumUnitStock(value){
  console.log(value);
   let sumTotal:number=0;
  let unitStockmap=this.items.filter(x=>x['ShipCountry']===value);
 
  unitStockmap.forEach(element => {
     sumTotal=sumTotal+element['UnitsInStock'];
     
  });
  alert(`All units in stock in ${value} are ${sumTotal}`);
}
drop(event: CdkDragDrop<string[]>) {
  moveItemInArray(this.items, event.previousIndex, event.currentIndex);
  }}