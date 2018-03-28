import { Component, OnInit } from '@angular/core';
import { UserFile, UserFolder } from './models';
import { FileService } from './file.service';
import { NavigationExtras, ActivatedRoute, Router } from '@angular/router';
import { AlertService } from '../../shared/services/alert.service';

class PathModel{
  constructor(public id:string,public name:string) {}

}

@Component({
  selector: 'app-file-explorer',
  templateUrl: './file-explorer.component.html',
  styleUrls: ['./file-explorer.component.scss']
})
export class FileExplorerComponent implements OnInit {

  private items:UserFolder[]=[];
  private isTable:boolean = false;
  private isCreating:boolean = false;
  private editing:UserFolder = new UserFolder();  
  private folderId:string = "";

  path:PathModel[]=[];

  constructor(
    private fileService:FileService,
    private route: ActivatedRoute,
    private router: Router,
    private alertService:AlertService
  ) { }

  ngOnInit() {

    this.fetchFiles();

  }

  fetchFiles(){
    this.fileService
    .getFolders(this.folderId)
    .subscribe(d=>{
      this.items = d;
    });
  }

  navigate(){
    let path = this.path.map(s=>s.id).join("/");
    let extras:NavigationExtras={
      relativeTo:this.route,
      queryParams:{path:path}
    };
    this.router.navigate(["./"],extras);
  }


  onCreateFolder(dom){
    console.log(dom);
    
    this.editing = new UserFolder();
    this.editing.name = dom.value;

    this.fileService.createFolder(this.folderId,this.editing).subscribe(d=>{

      this.items.push(d as UserFolder);
      this.isCreating = false;
      dom.value = "新建文件夹";

    },error=>{

      alert('文件夹新建失败！');
      console.log(error);
    })


  }


  alert(){
    this.alertService.startLoadingMessage();
  }

}
