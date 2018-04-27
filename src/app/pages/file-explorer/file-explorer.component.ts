import { Component, OnInit } from '@angular/core';
import { UserFile, UserFolder, AppFolder } from './models';
import { FileService } from './file.service';
import { NavigationExtras, ActivatedRoute, Router, ParamMap } from '@angular/router';
import { AlertService } from '../../shared/services/alert.service';
import { HttpEvent, HttpEventType } from '@angular/common/http';
import { AuthService } from '../../shared/services/auth.service';

class PathModel{
  constructor(public id:string,public name:string) {}

}

@Component({
  selector: 'app-file-explorer',
  templateUrl: './file-explorer.component.html',
  styleUrls: ['./file-explorer.component.scss']
})
export class FileExplorerComponent implements OnInit {

  public folders:UserFolder[]=[];
  public files:UserFile[] = [];
  public isTable:boolean = false;
  public isCreating:boolean = false;
  public editing:UserFolder = new UserFolder();  
  public folderId:string = "";
  public isLoading:boolean = false;
  public selectedFolderOrFiles:(UserFolder|UserFile)[]=[];
  public user:any;


  path:PathModel[]=[];

  constructor(
    private fileService:FileService,
    private route: ActivatedRoute,
    private router: Router,
    private alertService:AlertService,
    private authService:AuthService
  ) { 

    authService.userLoadededEvent.subscribe(user=>{
      this.user = user;
      console.log(user);
  });
  this.authService.getUser();
  
    // authService.getUser()..then(user=>{
    //     this.user = user;
    //     console.log(user);
    // })
  }

  ngOnInit() {

    this.route.queryParamMap.subscribe((p:ParamMap)=>{

      if(p.has("path")){
        let path = p.get("path").split("/");
        this.folderId = path[path.length-1];
      }else{
        this.folderId = "";
      }

      // if(this.folderId && !this.path.length){
      //   this.fetchPath(p.get("path"));
      // }

      this.fetchFiles();
    });
      


    this.fetchFiles();

  }

  fetchFiles(){
    this.isLoading = true;
    this.fileService
    .getFolders(this.folderId)
    .subscribe(d=>{
      this.folders = d.folders;
      this.files = d.files;

      this.isLoading = false;
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

      this.folders.push(d as UserFolder);
      this.isCreating = false;
      dom.value = "新建文件夹";

    },error=>{

      alert('文件夹新建失败！');
      console.log(error);
    })


  }

  onFolderClick(item:UserFolder){

    console.log(item);
    this.path.push(new PathModel(item.id,item.name));
    this.navigate();
  }

  onFolderChecked(item:UserFolder|UserFile,event:any){
    event.stopPropagation();
    
    if(item.isSelected){
      var index = this.selectedFolderOrFiles.findIndex(s=>s.id == item.id);
      if(index>-1){
        this.selectedFolderOrFiles.splice(index,1);
      }
    }else{
      this.selectedFolderOrFiles.push(item);
    }

    item.isSelected = !item.isSelected;

    

    // var index = this.selectedFolderOrFiles.indexOf(item);

    // if(index>-1){
    //   this.selectedFolderOrFiles.slice(index,1);
    // }else{
    //   this.selectedFolderOrFiles.push(item);
    // }

    // item.enable=!item.enable;
  }
  
  public get isChecked() : boolean {
    return this.folders.findIndex(s=>s.isSelected == true) >-1 || this.files.findIndex(s=>s.isSelected == true)>-1;
  }

  goto(event:any,index:number){
    event.stopPropagation();
    this.path = this.path.slice(0,index+1);
    this.navigate();
  }


  alert(){
    this.alertService.startLoadingMessage();
  }

  logout(){
    this.authService.startSignoutMainWindow();
  }


// upload
  onUploadClick(){

  }




  uploadList:uploadFileModle[]=[];
  showUploadPanel:boolean = true;
  //https://stackoverflow.com/questions/40214772/file-upload-in-angular
  //https://stackoverflow.com/questions/42231123/how-to-use-angular2-http-api-for-tracking-upload-download-progress
  fileChange(event) {
    let fileList: FileList = event.target.files;
    console.log(fileList);

    if(fileList.length > 0) {
      this.showUploadPanel = true;
      for (let i = 0; i < fileList.length; i++) {
        const element = fileList[i];
        let model = new uploadFileModle(element,"waiting","文件夹名称");
        this.uploadFileWithProgress(model,this.folderId).subscribe(event=>{

          if(event.type == HttpEventType.Response){
            console.log(event);
            if(event.status == 200){
              this.files.push(event.body as UserFile);
            }
          }

        });        
        this.uploadList.push(model);
      }



    }
}

uploadFileWithProgress(upload:uploadFileModle,folderId:string){
  let file: File = upload.file;
  let formData:FormData = new FormData();
  formData.append('file', file, file.name);
  formData.append("folderId",this.folderId);
  var uploading = this.fileService.upload("/Api/files",formData);
  uploading.subscribe(event=>{
   upload.progress = this.getEventMessage(event,file);

  });
  return  uploading;
}

/** Return distinct message for sent, upload progress, & response events */
private getEventMessage(event: HttpEvent<any>, file: File) {
  switch (event.type) {
    case HttpEventType.Sent:
      return `Uploading`;

    case HttpEventType.UploadProgress:
      // Compute and show the % done:
      const percentDone = Math.round(100 * event.loaded / event.total);
      return `${percentDone}%`;

    case HttpEventType.Response:
      return `complete`;

    default:
      return `event: ${event.type}`;
  }
}


}


class uploadFileModle{
  /**
   *
   */
  constructor(public file:File,public progress:string,public folder:string) {
          
  }

}