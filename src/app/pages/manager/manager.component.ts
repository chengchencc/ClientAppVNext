import { Component, OnInit } from '@angular/core';
import { LocalStoreManager } from '../../shared/services/local-store-manager.service';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.scss']
})
export class ManagerComponent implements OnInit {

  readonly sidebarThemeKey = "sidebar.theme";
  readonly sidebarExpandedKey = "sidebar.expanded";

  sidebarExpanded = true;
  isSidebarRight = false;
   sidebarTheme :string;

  
  public get getSidebarTheme() : string {

    var themeClass = "bg-"+this.sidebarTheme;
    var result=themeClass;
    if(this.sidebarExpanded)
      result = result+" "+"expanded";
    return result;
  }
  

  constructor(private localStore :LocalStoreManager) {
    this.sidebarTheme =this.localStore.getData(this.sidebarThemeKey) || "dark";
    this.sidebarExpanded = this.localStore.getData(this.sidebarExpandedKey);
   }


  ngOnInit() {
  }


  toggleSideBar(){
    this.sidebarExpanded = !this.sidebarExpanded;
    this.localStore.savePermanentData(this.sidebarExpanded,this.sidebarExpandedKey);
  }

  toogleSidebarPosition(){
    this.isSidebarRight = !this.isSidebarRight;
  }

  changeSidebarTheme(item:string){
    this.sidebarTheme = item;
    this.localStore.savePermanentData(item,this.sidebarThemeKey);
  }

}
