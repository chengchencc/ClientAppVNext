import { Component, OnInit } from '@angular/core';
import { DemoServiceProxy } from '../../../shared/service-proxies/service-proxies';

@Component({
  selector: 'app-page-manager',
  templateUrl: './page-manager.component.html',
  styleUrls: ['./page-manager.component.scss']
})
export class PageManagerComponent implements OnInit {

  constructor(private service:DemoServiceProxy ) { }
  
  DemoViewModel:any;

  taskListDragOptions:{};

  ngOnInit() {

    // this.service.getAll().subscribe(d=>{

    //   this.DemoViewModel = d;
    //   console.log(this.DemoViewModel);

    // })
   this.taskListDragOptions = {
      isContainer: function (el) {
        return false; // only elements in drake.containers will be taken into account
      },
      moves: function (el, source, handle, sibling) {
        // return true; // elements are always draggable by default
        
        return handle.className === 'task-list-header' || handle.parentNode.className==="task-list-header";
      },
      accepts: function (el, target, source, sibling) {
        return true; // elements can be dropped in any of the `containers` by default
      },
      invalid: function (el, handle) {
        return false; // don't prevent any drags from initiating by default
      },
      direction: 'horizontal',             // Y axis is considered when determining where an element would be dropped
      copy: false,                       // elements are moved by default, not copied
      copySortSource: false,             // elements in copy-source containers can be reordered
      revertOnSpill: false,              // spilling will put the element back where it was dragged from, if this is true
      removeOnSpill: false,              // spilling will `.remove` the element, if this is true
      mirrorContainer: document.body,    // set the element that gets mirror elements appended
      ignoreInputTextSelection: true     // allows users to select input text, see details below
    }
  }

}
