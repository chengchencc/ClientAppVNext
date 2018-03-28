import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {

  @Input() fa:string;
  @Input() type:string="far";
   _size:string = "";
    get size(){
     return  this._size;
   }
   @Input() set size(v:string|number){
    if(typeof v ==="number")
      this._size=v+"px";
      else this._size = v;
   }
   @Input() color:string="";
  constructor() { }

  ngOnInit() {
  }

}


