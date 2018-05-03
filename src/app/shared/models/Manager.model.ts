import * as moment from 'moment';

export class AppTaskList implements IAppTaskList {
    name: string | undefined;
    desc: string | undefined;
    projectMaps: AppProjectToTaskListMap[] | undefined;
    taskListMaps: AppTaskListTaskMap[] | undefined;
    id: string | undefined;
    appId: number | undefined;
    appInfo: AppInfo | undefined;
    createUserId: string | undefined;
    createTime: moment.Moment | undefined;
    lastModifiedUId: string | undefined;
    lastModifiedTime: moment.Moment | undefined;

    constructor(data?: IAppTaskList) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.name = data["name"];
            this.desc = data["desc"];
            if (data["projectMaps"] && data["projectMaps"].constructor === Array) {
                this.projectMaps = [];
                for (let item of data["projectMaps"])
                    this.projectMaps.push(AppProjectToTaskListMap.fromJS(item));
            }
            if (data["taskListMaps"] && data["taskListMaps"].constructor === Array) {
                this.taskListMaps = [];
                for (let item of data["taskListMaps"])
                    this.taskListMaps.push(AppTaskListTaskMap.fromJS(item));
            }
            this.id = data["id"];
            this.appId = data["appId"];
            this.appInfo = data["appInfo"] ? AppInfo.fromJS(data["appInfo"]) : <any>undefined;
            this.createUserId = data["createUserId"];
            this.createTime = data["createTime"] ? moment(data["createTime"].toString()) : <any>undefined;
            this.lastModifiedUId = data["lastModifiedUId"];
            this.lastModifiedTime = data["lastModifiedTime"] ? moment(data["lastModifiedTime"].toString()) : <any>undefined;
        }
    }

    static fromJS(data: any): AppTaskList {
        data = typeof data === 'object' ? data : {};
        let result = new AppTaskList();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["name"] = this.name;
        data["desc"] = this.desc;
        if (this.projectMaps && this.projectMaps.constructor === Array) {
            data["projectMaps"] = [];
            for (let item of this.projectMaps)
                data["projectMaps"].push(item.toJSON());
        }
        if (this.taskListMaps && this.taskListMaps.constructor === Array) {
            data["taskListMaps"] = [];
            for (let item of this.taskListMaps)
                data["taskListMaps"].push(item.toJSON());
        }
        data["id"] = this.id;
        data["appId"] = this.appId;
        data["appInfo"] = this.appInfo ? this.appInfo.toJSON() : <any>undefined;
        data["createUserId"] = this.createUserId;
        data["createTime"] = this.createTime ? this.createTime.toISOString() : <any>undefined;
        data["lastModifiedUId"] = this.lastModifiedUId;
        data["lastModifiedTime"] = this.lastModifiedTime ? this.lastModifiedTime.toISOString() : <any>undefined;
        return data; 
    }

    clone() {
        const json = this.toJSON();
        let result = new AppTaskList();
        result.init(json);
        return result;
    }
}

export interface IAppTaskList {
    name: string | undefined;
    desc: string | undefined;
    projectMaps: AppProjectToTaskListMap[] | undefined;
    taskListMaps: AppTaskListTaskMap[] | undefined;
    id: string | undefined;
    appId: number | undefined;
    appInfo: AppInfo | undefined;
    createUserId: string | undefined;
    createTime: moment.Moment | undefined;
    lastModifiedUId: string | undefined;
    lastModifiedTime: moment.Moment | undefined;
}

export class AppProjectToTaskListMap implements IAppProjectToTaskListMap {
    projectId: string | undefined;
    project: AppProject | undefined;
    taskListId: string | undefined;
    taskList: AppTaskList | undefined;
    id: string | undefined;
    appId: number | undefined;
    appInfo: AppInfo | undefined;
    createUserId: string | undefined;
    createTime: moment.Moment | undefined;
    lastModifiedUId: string | undefined;
    lastModifiedTime: moment.Moment | undefined;

    constructor(data?: IAppProjectToTaskListMap) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.projectId = data["projectId"];
            this.project = data["project"] ? AppProject.fromJS(data["project"]) : <any>undefined;
            this.taskListId = data["taskListId"];
            this.taskList = data["taskList"] ? AppTaskList.fromJS(data["taskList"]) : <any>undefined;
            this.id = data["id"];
            this.appId = data["appId"];
            this.appInfo = data["appInfo"] ? AppInfo.fromJS(data["appInfo"]) : <any>undefined;
            this.createUserId = data["createUserId"];
            this.createTime = data["createTime"] ? moment(data["createTime"].toString()) : <any>undefined;
            this.lastModifiedUId = data["lastModifiedUId"];
            this.lastModifiedTime = data["lastModifiedTime"] ? moment(data["lastModifiedTime"].toString()) : <any>undefined;
        }
    }

    static fromJS(data: any): AppProjectToTaskListMap {
        data = typeof data === 'object' ? data : {};
        let result = new AppProjectToTaskListMap();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["projectId"] = this.projectId;
        data["project"] = this.project ? this.project.toJSON() : <any>undefined;
        data["taskListId"] = this.taskListId;
        data["taskList"] = this.taskList ? this.taskList.toJSON() : <any>undefined;
        data["id"] = this.id;
        data["appId"] = this.appId;
        data["appInfo"] = this.appInfo ? this.appInfo.toJSON() : <any>undefined;
        data["createUserId"] = this.createUserId;
        data["createTime"] = this.createTime ? this.createTime.toISOString() : <any>undefined;
        data["lastModifiedUId"] = this.lastModifiedUId;
        data["lastModifiedTime"] = this.lastModifiedTime ? this.lastModifiedTime.toISOString() : <any>undefined;
        return data; 
    }

    clone() {
        const json = this.toJSON();
        let result = new AppProjectToTaskListMap();
        result.init(json);
        return result;
    }
}

export interface IAppProjectToTaskListMap {
    projectId: string | undefined;
    project: AppProject | undefined;
    taskListId: string | undefined;
    taskList: AppTaskList | undefined;
    id: string | undefined;
    appId: number | undefined;
    appInfo: AppInfo | undefined;
    createUserId: string | undefined;
    createTime: moment.Moment | undefined;
    lastModifiedUId: string | undefined;
    lastModifiedTime: moment.Moment | undefined;
}

export class AppTaskListTaskMap implements IAppTaskListTaskMap {
    taskListId: string | undefined;
    taskId: string | undefined;
    appTaskList: AppTaskList | undefined;
    appTask: AppTask | undefined;
    id: string | undefined;
    appId: number | undefined;
    appInfo: AppInfo | undefined;
    createUserId: string | undefined;
    createTime: moment.Moment | undefined;
    lastModifiedUId: string | undefined;
    lastModifiedTime: moment.Moment | undefined;

    constructor(data?: IAppTaskListTaskMap) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.taskListId = data["taskListId"];
            this.taskId = data["taskId"];
            this.appTaskList = data["appTaskList"] ? AppTaskList.fromJS(data["appTaskList"]) : <any>undefined;
            this.appTask = data["appTask"] ? AppTask.fromJS(data["appTask"]) : <any>undefined;
            this.id = data["id"];
            this.appId = data["appId"];
            this.appInfo = data["appInfo"] ? AppInfo.fromJS(data["appInfo"]) : <any>undefined;
            this.createUserId = data["createUserId"];
            this.createTime = data["createTime"] ? moment(data["createTime"].toString()) : <any>undefined;
            this.lastModifiedUId = data["lastModifiedUId"];
            this.lastModifiedTime = data["lastModifiedTime"] ? moment(data["lastModifiedTime"].toString()) : <any>undefined;
        }
    }

    static fromJS(data: any): AppTaskListTaskMap {
        data = typeof data === 'object' ? data : {};
        let result = new AppTaskListTaskMap();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["taskListId"] = this.taskListId;
        data["taskId"] = this.taskId;
        data["appTaskList"] = this.appTaskList ? this.appTaskList.toJSON() : <any>undefined;
        data["appTask"] = this.appTask ? this.appTask.toJSON() : <any>undefined;
        data["id"] = this.id;
        data["appId"] = this.appId;
        data["appInfo"] = this.appInfo ? this.appInfo.toJSON() : <any>undefined;
        data["createUserId"] = this.createUserId;
        data["createTime"] = this.createTime ? this.createTime.toISOString() : <any>undefined;
        data["lastModifiedUId"] = this.lastModifiedUId;
        data["lastModifiedTime"] = this.lastModifiedTime ? this.lastModifiedTime.toISOString() : <any>undefined;
        return data; 
    }

    clone() {
        const json = this.toJSON();
        let result = new AppTaskListTaskMap();
        result.init(json);
        return result;
    }
}

export interface IAppTaskListTaskMap {
    taskListId: string | undefined;
    taskId: string | undefined;
    appTaskList: AppTaskList | undefined;
    appTask: AppTask | undefined;
    id: string | undefined;
    appId: number | undefined;
    appInfo: AppInfo | undefined;
    createUserId: string | undefined;
    createTime: moment.Moment | undefined;
    lastModifiedUId: string | undefined;
    lastModifiedTime: moment.Moment | undefined;
}

export class AppInfo implements IAppInfo {
    id: number | undefined;
    name: string | undefined;
    appType: AppInfoAppType | undefined;
    tenantId: number | undefined;
    tenant: Tenant | undefined;
    desc: string | undefined;
    createUserId: string | undefined;
    createTime: moment.Moment | undefined;
    lastModifiedUId: string | undefined;
    lastModifiedTime: moment.Moment | undefined;

    constructor(data?: IAppInfo) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.id = data["id"];
            this.name = data["name"];
            this.appType = data["appType"];
            this.tenantId = data["tenantId"];
            this.tenant = data["tenant"] ? Tenant.fromJS(data["tenant"]) : <any>undefined;
            this.desc = data["desc"];
            this.createUserId = data["createUserId"];
            this.createTime = data["createTime"] ? moment(data["createTime"].toString()) : <any>undefined;
            this.lastModifiedUId = data["lastModifiedUId"];
            this.lastModifiedTime = data["lastModifiedTime"] ? moment(data["lastModifiedTime"].toString()) : <any>undefined;
        }
    }

    static fromJS(data: any): AppInfo {
        data = typeof data === 'object' ? data : {};
        let result = new AppInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["name"] = this.name;
        data["appType"] = this.appType;
        data["tenantId"] = this.tenantId;
        data["tenant"] = this.tenant ? this.tenant.toJSON() : <any>undefined;
        data["desc"] = this.desc;
        data["createUserId"] = this.createUserId;
        data["createTime"] = this.createTime ? this.createTime.toISOString() : <any>undefined;
        data["lastModifiedUId"] = this.lastModifiedUId;
        data["lastModifiedTime"] = this.lastModifiedTime ? this.lastModifiedTime.toISOString() : <any>undefined;
        return data; 
    }

    clone() {
        const json = this.toJSON();
        let result = new AppInfo();
        result.init(json);
        return result;
    }
}

export interface IAppInfo {
    id: number | undefined;
    name: string | undefined;
    appType: AppInfoAppType | undefined;
    tenantId: number | undefined;
    tenant: Tenant | undefined;
    desc: string | undefined;
    createUserId: string | undefined;
    createTime: moment.Moment | undefined;
    lastModifiedUId: string | undefined;
    lastModifiedTime: moment.Moment | undefined;
}

export class AppProject implements IAppProject {
    name: string | undefined;
    desc: string | undefined;
    coverUrl: string | undefined;
    ownerUserId: string | undefined;
    taskListMaps: AppProjectToTaskListMap[] | undefined;
    id: string | undefined;
    appId: number | undefined;
    appInfo: AppInfo | undefined;
    createUserId: string | undefined;
    createTime: moment.Moment | undefined;
    lastModifiedUId: string | undefined;
    lastModifiedTime: moment.Moment | undefined;

    constructor(data?: IAppProject) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.name = data["name"];
            this.desc = data["desc"];
            this.coverUrl = data["coverUrl"];
            this.ownerUserId = data["ownerUserId"];
            if (data["taskListMaps"] && data["taskListMaps"].constructor === Array) {
                this.taskListMaps = [];
                for (let item of data["taskListMaps"])
                    this.taskListMaps.push(AppProjectToTaskListMap.fromJS(item));
            }
            this.id = data["id"];
            this.appId = data["appId"];
            this.appInfo = data["appInfo"] ? AppInfo.fromJS(data["appInfo"]) : <any>undefined;
            this.createUserId = data["createUserId"];
            this.createTime = data["createTime"] ? moment(data["createTime"].toString()) : <any>undefined;
            this.lastModifiedUId = data["lastModifiedUId"];
            this.lastModifiedTime = data["lastModifiedTime"] ? moment(data["lastModifiedTime"].toString()) : <any>undefined;
        }
    }

    static fromJS(data: any): AppProject {
        data = typeof data === 'object' ? data : {};
        let result = new AppProject();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["name"] = this.name;
        data["desc"] = this.desc;
        data["coverUrl"] = this.coverUrl;
        data["ownerUserId"] = this.ownerUserId;
        if (this.taskListMaps && this.taskListMaps.constructor === Array) {
            data["taskListMaps"] = [];
            for (let item of this.taskListMaps)
                data["taskListMaps"].push(item.toJSON());
        }
        data["id"] = this.id;
        data["appId"] = this.appId;
        data["appInfo"] = this.appInfo ? this.appInfo.toJSON() : <any>undefined;
        data["createUserId"] = this.createUserId;
        data["createTime"] = this.createTime ? this.createTime.toISOString() : <any>undefined;
        data["lastModifiedUId"] = this.lastModifiedUId;
        data["lastModifiedTime"] = this.lastModifiedTime ? this.lastModifiedTime.toISOString() : <any>undefined;
        return data; 
    }

    clone() {
        const json = this.toJSON();
        let result = new AppProject();
        result.init(json);
        return result;
    }
}

export interface IAppProject {
    name: string | undefined;
    desc: string | undefined;
    coverUrl: string | undefined;
    ownerUserId: string | undefined;
    taskListMaps: AppProjectToTaskListMap[] | undefined;
    id: string | undefined;
    appId: number | undefined;
    appInfo: AppInfo | undefined;
    createUserId: string | undefined;
    createTime: moment.Moment | undefined;
    lastModifiedUId: string | undefined;
    lastModifiedTime: moment.Moment | undefined;
}

export class AppTask implements IAppTask {
    name: string | undefined;
    assignTo: string | undefined;
    deadLine: moment.Moment | undefined;
    priority: AppPriority | undefined;
    note: string | undefined;
    comment: string | undefined;
    orderNo: number | undefined;
    listTaskMaps: AppTaskListTaskMap[] | undefined;
    id: string | undefined;
    appId: number | undefined;
    appInfo: AppInfo | undefined;
    createUserId: string | undefined;
    createTime: moment.Moment | undefined;
    lastModifiedUId: string | undefined;
    lastModifiedTime: moment.Moment | undefined;

    constructor(data?: IAppTask) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.name = data["name"];
            this.assignTo = data["assignTo"];
            this.deadLine = data["deadLine"] ? moment(data["deadLine"].toString()) : <any>undefined;
            this.priority = data["priority"] ? AppPriority.fromJS(data["priority"]) : <any>undefined;
            this.note = data["note"];
            this.comment = data["comment"];
            this.orderNo = data["orderNo"];
            if (data["listTaskMaps"] && data["listTaskMaps"].constructor === Array) {
                this.listTaskMaps = [];
                for (let item of data["listTaskMaps"])
                    this.listTaskMaps.push(AppTaskListTaskMap.fromJS(item));
            }
            this.id = data["id"];
            this.appId = data["appId"];
            this.appInfo = data["appInfo"] ? AppInfo.fromJS(data["appInfo"]) : <any>undefined;
            this.createUserId = data["createUserId"];
            this.createTime = data["createTime"] ? moment(data["createTime"].toString()) : <any>undefined;
            this.lastModifiedUId = data["lastModifiedUId"];
            this.lastModifiedTime = data["lastModifiedTime"] ? moment(data["lastModifiedTime"].toString()) : <any>undefined;
        }
    }

    static fromJS(data: any): AppTask {
        data = typeof data === 'object' ? data : {};
        let result = new AppTask();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["name"] = this.name;
        data["assignTo"] = this.assignTo;
        data["deadLine"] = this.deadLine ? this.deadLine.toISOString() : <any>undefined;
        data["priority"] = this.priority ? this.priority.toJSON() : <any>undefined;
        data["note"] = this.note;
        data["comment"] = this.comment;
        data["orderNo"] = this.orderNo;
        if (this.listTaskMaps && this.listTaskMaps.constructor === Array) {
            data["listTaskMaps"] = [];
            for (let item of this.listTaskMaps)
                data["listTaskMaps"].push(item.toJSON());
        }
        data["id"] = this.id;
        data["appId"] = this.appId;
        data["appInfo"] = this.appInfo ? this.appInfo.toJSON() : <any>undefined;
        data["createUserId"] = this.createUserId;
        data["createTime"] = this.createTime ? this.createTime.toISOString() : <any>undefined;
        data["lastModifiedUId"] = this.lastModifiedUId;
        data["lastModifiedTime"] = this.lastModifiedTime ? this.lastModifiedTime.toISOString() : <any>undefined;
        return data; 
    }

    clone() {
        const json = this.toJSON();
        let result = new AppTask();
        result.init(json);
        return result;
    }
}

export interface IAppTask {
    name: string | undefined;
    assignTo: string | undefined;
    deadLine: moment.Moment | undefined;
    priority: AppPriority | undefined;
    note: string | undefined;
    comment: string | undefined;
    orderNo: number | undefined;
    listTaskMaps: AppTaskListTaskMap[] | undefined;
    id: string | undefined;
    appId: number | undefined;
    appInfo: AppInfo | undefined;
    createUserId: string | undefined;
    createTime: moment.Moment | undefined;
    lastModifiedUId: string | undefined;
    lastModifiedTime: moment.Moment | undefined;
}

export class Tenant implements ITenant {
    id: number | undefined;
    name: string | undefined;
    description: string | undefined;
    isSeparateDataBase: boolean | undefined;
    connectionString: string | undefined;
    createTime: moment.Moment | undefined;
    createUserId: string | undefined;
    lastModifyTime: moment.Moment | undefined;
    lastModifyUserId: string | undefined;

    constructor(data?: ITenant) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.id = data["id"];
            this.name = data["name"];
            this.description = data["description"];
            this.isSeparateDataBase = data["isSeparateDataBase"];
            this.connectionString = data["connectionString"];
            this.createTime = data["createTime"] ? moment(data["createTime"].toString()) : <any>undefined;
            this.createUserId = data["createUserId"];
            this.lastModifyTime = data["lastModifyTime"] ? moment(data["lastModifyTime"].toString()) : <any>undefined;
            this.lastModifyUserId = data["lastModifyUserId"];
        }
    }

    static fromJS(data: any): Tenant {
        data = typeof data === 'object' ? data : {};
        let result = new Tenant();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["name"] = this.name;
        data["description"] = this.description;
        data["isSeparateDataBase"] = this.isSeparateDataBase;
        data["connectionString"] = this.connectionString;
        data["createTime"] = this.createTime ? this.createTime.toISOString() : <any>undefined;
        data["createUserId"] = this.createUserId;
        data["lastModifyTime"] = this.lastModifyTime ? this.lastModifyTime.toISOString() : <any>undefined;
        data["lastModifyUserId"] = this.lastModifyUserId;
        return data; 
    }

    clone() {
        const json = this.toJSON();
        let result = new Tenant();
        result.init(json);
        return result;
    }
}

export interface ITenant {
    id: number | undefined;
    name: string | undefined;
    description: string | undefined;
    isSeparateDataBase: boolean | undefined;
    connectionString: string | undefined;
    createTime: moment.Moment | undefined;
    createUserId: string | undefined;
    lastModifyTime: moment.Moment | undefined;
    lastModifyUserId: string | undefined;
}

export class AppPriority implements IAppPriority {
    name: string | undefined;
    urgency: number | undefined;
    color: string | undefined;
    id: string | undefined;
    appId: number | undefined;
    appInfo: AppInfo | undefined;

    constructor(data?: IAppPriority) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.name = data["name"];
            this.urgency = data["urgency"];
            this.color = data["color"];
            this.id = data["id"];
            this.appId = data["appId"];
            this.appInfo = data["appInfo"] ? AppInfo.fromJS(data["appInfo"]) : <any>undefined;
        }
    }

    static fromJS(data: any): AppPriority {
        data = typeof data === 'object' ? data : {};
        let result = new AppPriority();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["name"] = this.name;
        data["urgency"] = this.urgency;
        data["color"] = this.color;
        data["id"] = this.id;
        data["appId"] = this.appId;
        data["appInfo"] = this.appInfo ? this.appInfo.toJSON() : <any>undefined;
        return data; 
    }

    clone() {
        const json = this.toJSON();
        let result = new AppPriority();
        result.init(json);
        return result;
    }
}

export interface IAppPriority {
    name: string | undefined;
    urgency: number | undefined;
    color: string | undefined;
    id: string | undefined;
    appId: number | undefined;
    appInfo: AppInfo | undefined;
}

export class AddTaskListDto implements IAddTaskListDto {
    name: string | undefined;
    projectId: string | undefined;

    constructor(data?: IAddTaskListDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.name = data["name"];
            this.projectId = data["projectId"];
        }
    }

    static fromJS(data: any): AddTaskListDto {
        data = typeof data === 'object' ? data : {};
        let result = new AddTaskListDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["name"] = this.name;
        data["projectId"] = this.projectId;
        return data; 
    }

    clone() {
        const json = this.toJSON();
        let result = new AddTaskListDto();
        result.init(json);
        return result;
    }
}

export interface IAddTaskListDto {
    name: string | undefined;
    projectId: string | undefined;
}

export class AddTaskDto{
    name:string;
    taskListId:string;
    }


export class AppUserFolder implements IAppUserFolder {
    userId: string | undefined;
    name: string | undefined;
    size: number | undefined;
    path: string | undefined;
    parentId: string | undefined;
    folders: AppUserFolder[] | undefined;
    files: AppUserFile[] | undefined;
    id: string | undefined;
    appId: number | undefined;
    appInfo: AppInfo | undefined;
    createUserId: string | undefined;
    createTime: moment.Moment | undefined;
    lastModifiedUId: string | undefined;
    lastModifiedTime: moment.Moment | undefined;

    constructor(data?: IAppUserFolder) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.userId = data["userId"];
            this.name = data["name"];
            this.size = data["size"];
            this.path = data["path"];
            this.parentId = data["parentId"];
            if (data["folders"] && data["folders"].constructor === Array) {
                this.folders = [];
                for (let item of data["folders"])
                    this.folders.push(AppUserFolder.fromJS(item));
            }
            if (data["files"] && data["files"].constructor === Array) {
                this.files = [];
                for (let item of data["files"])
                    this.files.push(AppUserFile.fromJS(item));
            }
            this.id = data["id"];
            this.appId = data["appId"];
            this.appInfo = data["appInfo"] ? AppInfo.fromJS(data["appInfo"]) : <any>undefined;
            this.createUserId = data["createUserId"];
            this.createTime = data["createTime"] ? moment(data["createTime"].toString()) : <any>undefined;
            this.lastModifiedUId = data["lastModifiedUId"];
            this.lastModifiedTime = data["lastModifiedTime"] ? moment(data["lastModifiedTime"].toString()) : <any>undefined;
        }
    }

    static fromJS(data: any): AppUserFolder {
        data = typeof data === 'object' ? data : {};
        let result = new AppUserFolder();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["userId"] = this.userId;
        data["name"] = this.name;
        data["size"] = this.size;
        data["path"] = this.path;
        data["parentId"] = this.parentId;
        if (this.folders && this.folders.constructor === Array) {
            data["folders"] = [];
            for (let item of this.folders)
                data["folders"].push(item.toJSON());
        }
        if (this.files && this.files.constructor === Array) {
            data["files"] = [];
            for (let item of this.files)
                data["files"].push(item.toJSON());
        }
        data["id"] = this.id;
        data["appId"] = this.appId;
        data["appInfo"] = this.appInfo ? this.appInfo.toJSON() : <any>undefined;
        data["createUserId"] = this.createUserId;
        data["createTime"] = this.createTime ? this.createTime.toISOString() : <any>undefined;
        data["lastModifiedUId"] = this.lastModifiedUId;
        data["lastModifiedTime"] = this.lastModifiedTime ? this.lastModifiedTime.toISOString() : <any>undefined;
        return data; 
    }

    clone() {
        const json = this.toJSON();
        let result = new AppUserFolder();
        result.init(json);
        return result;
    }
}

export interface IAppUserFolder {
    userId: string | undefined;
    name: string | undefined;
    size: number | undefined;
    path: string | undefined;
    parentId: string | undefined;
    folders: AppUserFolder[] | undefined;
    files: AppUserFile[] | undefined;
    id: string | undefined;
    appId: number | undefined;
    appInfo: AppInfo | undefined;
    createUserId: string | undefined;
    createTime: moment.Moment | undefined;
    lastModifiedUId: string | undefined;
    lastModifiedTime: moment.Moment | undefined;
}

export class AppUserFile implements IAppUserFile {
    folder: AppUserFolder | undefined;
    folderId: string | undefined;
    userId: string | undefined;
    name: string | undefined;
    appFile: AppFile | undefined;
    id: string | undefined;
    appId: number | undefined;
    appInfo: AppInfo | undefined;
    createUserId: string | undefined;
    createTime: moment.Moment | undefined;
    lastModifiedUId: string | undefined;
    lastModifiedTime: moment.Moment | undefined;

    constructor(data?: IAppUserFile) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.folder = data["folder"] ? AppUserFolder.fromJS(data["folder"]) : <any>undefined;
            this.folderId = data["folderId"];
            this.userId = data["userId"];
            this.name = data["name"];
            this.appFile = data["appFile"] ? AppFile.fromJS(data["appFile"]) : <any>undefined;
            this.id = data["id"];
            this.appId = data["appId"];
            this.appInfo = data["appInfo"] ? AppInfo.fromJS(data["appInfo"]) : <any>undefined;
            this.createUserId = data["createUserId"];
            this.createTime = data["createTime"] ? moment(data["createTime"].toString()) : <any>undefined;
            this.lastModifiedUId = data["lastModifiedUId"];
            this.lastModifiedTime = data["lastModifiedTime"] ? moment(data["lastModifiedTime"].toString()) : <any>undefined;
        }
    }

    static fromJS(data: any): AppUserFile {
        data = typeof data === 'object' ? data : {};
        let result = new AppUserFile();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["folder"] = this.folder ? this.folder.toJSON() : <any>undefined;
        data["folderId"] = this.folderId;
        data["userId"] = this.userId;
        data["name"] = this.name;
        data["appFile"] = this.appFile ? this.appFile.toJSON() : <any>undefined;
        data["id"] = this.id;
        data["appId"] = this.appId;
        data["appInfo"] = this.appInfo ? this.appInfo.toJSON() : <any>undefined;
        data["createUserId"] = this.createUserId;
        data["createTime"] = this.createTime ? this.createTime.toISOString() : <any>undefined;
        data["lastModifiedUId"] = this.lastModifiedUId;
        data["lastModifiedTime"] = this.lastModifiedTime ? this.lastModifiedTime.toISOString() : <any>undefined;
        return data; 
    }

    clone() {
        const json = this.toJSON();
        let result = new AppUserFile();
        result.init(json);
        return result;
    }
}

export interface IAppUserFile {
    folder: AppUserFolder | undefined;
    folderId: string | undefined;
    userId: string | undefined;
    name: string | undefined;
    appFile: AppFile | undefined;
    id: string | undefined;
    appId: number | undefined;
    appInfo: AppInfo | undefined;
    createUserId: string | undefined;
    createTime: moment.Moment | undefined;
    lastModifiedUId: string | undefined;
    lastModifiedTime: moment.Moment | undefined;
}

export class AppFile implements IAppFile {
    name: string | undefined;
    originalName: string | undefined;
    size: number | undefined;
    path: string | undefined;
    extensionName: string | undefined;
    contentType: string | undefined;
    linkedCount: number | undefined;
    mD5: string | undefined;
    shA1: string | undefined;
    crC32: string | undefined;
    id: string | undefined;
    appId: number | undefined;
    appInfo: AppInfo | undefined;
    createUserId: string | undefined;
    createTime: moment.Moment | undefined;
    lastModifiedUId: string | undefined;
    lastModifiedTime: moment.Moment | undefined;

    constructor(data?: IAppFile) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.name = data["name"];
            this.originalName = data["originalName"];
            this.size = data["size"];
            this.path = data["path"];
            this.extensionName = data["extensionName"];
            this.contentType = data["contentType"];
            this.linkedCount = data["linkedCount"];
            this.mD5 = data["mD5"];
            this.shA1 = data["shA1"];
            this.crC32 = data["crC32"];
            this.id = data["id"];
            this.appId = data["appId"];
            this.appInfo = data["appInfo"] ? AppInfo.fromJS(data["appInfo"]) : <any>undefined;
            this.createUserId = data["createUserId"];
            this.createTime = data["createTime"] ? moment(data["createTime"].toString()) : <any>undefined;
            this.lastModifiedUId = data["lastModifiedUId"];
            this.lastModifiedTime = data["lastModifiedTime"] ? moment(data["lastModifiedTime"].toString()) : <any>undefined;
        }
    }

    static fromJS(data: any): AppFile {
        data = typeof data === 'object' ? data : {};
        let result = new AppFile();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["name"] = this.name;
        data["originalName"] = this.originalName;
        data["size"] = this.size;
        data["path"] = this.path;
        data["extensionName"] = this.extensionName;
        data["contentType"] = this.contentType;
        data["linkedCount"] = this.linkedCount;
        data["mD5"] = this.mD5;
        data["shA1"] = this.shA1;
        data["crC32"] = this.crC32;
        data["id"] = this.id;
        data["appId"] = this.appId;
        data["appInfo"] = this.appInfo ? this.appInfo.toJSON() : <any>undefined;
        data["createUserId"] = this.createUserId;
        data["createTime"] = this.createTime ? this.createTime.toISOString() : <any>undefined;
        data["lastModifiedUId"] = this.lastModifiedUId;
        data["lastModifiedTime"] = this.lastModifiedTime ? this.lastModifiedTime.toISOString() : <any>undefined;
        return data; 
    }

    clone() {
        const json = this.toJSON();
        let result = new AppFile();
        result.init(json);
        return result;
    }
}

export interface IAppFile {
    name: string | undefined;
    originalName: string | undefined;
    size: number | undefined;
    path: string | undefined;
    extensionName: string | undefined;
    contentType: string | undefined;
    linkedCount: number | undefined;
    mD5: string | undefined;
    shA1: string | undefined;
    crC32: string | undefined;
    id: string | undefined;
    appId: number | undefined;
    appInfo: AppInfo | undefined;
    createUserId: string | undefined;
    createTime: moment.Moment | undefined;
    lastModifiedUId: string | undefined;
    lastModifiedTime: moment.Moment | undefined;
}

export enum AppInfoAppType {
    _0 = 0, 
    _1 = 1, 
}
