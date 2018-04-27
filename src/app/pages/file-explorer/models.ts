export class EntityBase<T>
{
  public id: T;
  public app: App;
  public enable: boolean;
  public createTime: Date;
  public modifyTime: Date;
  public createUserId: string;
  public modifyUserId: string;
}

export class EntityBaseOnlyId<T>
{
  public id: T;
}

export enum AppType {
    personal,
  
    enterprise
  }

  export class App extends EntityBase<string>
{
  public name: string;
  public appType: AppType;
  public desc: string;
}

export class AppFile extends EntityBase<string>
{
  public name: string;
  public originalName: string;
  public size: number;
  public path: string;
  public extensionName: string;
  public contentType: string;
  public linkedCount: number;
  public MD5: string;
  public SHA1: string;
  public CRC32: string;
}
export class AppFolder<FileEntityType, FolderEntityType> extends EntityBase<string>
{
  constructor() {
    super();
    this.folders = [];
    this.files = [];
  }
  public name: string;
  public size: number;
  public path: string;
  public parentId: string;
  /*[ForeignKey("ParentId")]*/
  public folders: FolderEntityType[];
  /*[ForeignKey("Id")]*/
  public files: FileEntityType[];
}
export class VirtualFile extends EntityBase<string>
{
  public name: string;
  public appFile: AppFile;
}
export class UserFile extends VirtualFile {
  public userId: string;
  public isSelected:boolean;
}
export class UserFolder extends AppFolder<UserFile, UserFolder>
{
  public userId: string;
  public isSelected:boolean;
}