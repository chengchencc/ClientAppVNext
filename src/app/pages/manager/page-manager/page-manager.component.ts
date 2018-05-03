import { Component, OnInit, HostListener } from '@angular/core';
// import { DemoServiceProxy, TasksServiceProxy, AddTaskListDto } from '../../../shared/service-proxies/service-proxies';
import { ManagerService } from '../manager.service';
import { AppTaskList, AddTaskListDto, AppTask, AddTaskDto, AppTaskListTaskMap } from '../../../shared/models/Manager.model';

@Component({
  selector: 'app-page-manager',
  templateUrl: './page-manager.component.html',
  styleUrls: ['./page-manager.component.scss']
})
export class PageManagerComponent implements OnInit {

  constructor(private managerService:ManagerService ) { }
  
  taskListViewModel:AppTaskList[];

  isAddingTaskList = false;
  isAdding = true;
  focusInput = true;
  projectId = "85E1E5CC-7642-42D9-AAD7-8EEF608E1D87";

  taskListDragOptions:{};

  isAddingTask = false;


  ngOnInit() {

    // this.service.getAll().subscribe(d=>{

    //   this.DemoViewModel = d;
    //   console.log(this.DemoViewModel);

    // })

    this.managerService.get<AppTaskList[]>(`/api/Tasks/GetTaskList/${this.projectId}`).subscribe(d=>{
      this.taskListViewModel = d
    });

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
  onCancle(event:any){
    if(event) {this.isAddingTaskList=false;
      this.isAdding = true;
    }
    else this.isAdding = false;
  }

fetchAppTasks(taskList:AppTaskList){
  this.managerService.get<AppTask[]>(`/api/Tasks/GetTasks/${taskList.id}`).subscribe(d=>{
    //taskList.taskListMaps[0].appTask
  })
}

  onAddTaskListClick(dom){
    let model = new AddTaskListDto();
    model.name = dom.value;
    model.projectId = this.projectId;
    this.managerService.post<AppTaskList>("/api/Tasks/AddTaskList",model).subscribe(d=>{

      this.taskListViewModel.push(d);

    })
  }

  addTask(appTaskList:AppTaskList,dom){

    let dto:AddTaskDto = new AddTaskDto();
    dto.name = dom.value;
    dto.taskListId = appTaskList.id;

    this.managerService.post<AppTaskListTaskMap>("/api/Tasks/AddTask",dto).subscribe(d=>{
        appTaskList.taskListMaps.push(d);
    });
  }


}
