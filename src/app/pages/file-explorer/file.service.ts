import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { File_Server_Host } from '../../shared/config';
import { MyCommonHttpClient } from '../../shared/MyCommonHttpClient';
import { UserFolder } from './models';
import { AuthService } from '../../shared/services/auth.service';

@Injectable()
export class FileService  {//extends MyCommonHttpClient

/**
 *
 */
constructor(private authService: AuthService) {

  
}

  getFolders<T>(folderId:string){

    return  this.authService.AuthGet(`http://localhost:88/api/UserFolders/${folderId}`).map(response=>response.json() as UserFolder[]);

    // return this.get<UserFolder[]>(`/api/UserFolders/${folderId}`);
  }

  createFolder(parentId,folder:UserFolder){
    return this.authService.AuthPost(`http://localhost:88/api/UserFolders/${parentId}`,folder).map(d=>d.json() as UserFolder);
  }

}
