import { Component, OnInit, Input } from '@angular/core';
import { AppTaskList, AddTaskDto, AppTaskListTaskMap } from '../../../../shared/models/Manager.model';
import { ManagerService } from '../../manager.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  @Input()
  taskList:AppTaskList;

  isAddingTask=false;

  constructor(private managerService :ManagerService) { }

  ngOnInit() {
  }

  addTask(appTaskList:AppTaskList,dom){

    let dto:AddTaskDto = new AddTaskDto();
    dto.name = dom.value;
    dto.taskListId = appTaskList.id;

    this.managerService.post<AppTaskListTaskMap>("/api/Tasks/AddTask",dto).subscribe(d=>{
      if(!appTaskList.taskListMaps)
        appTaskList.taskListMaps = [];
      
      appTaskList.taskListMaps.push(d);

      dom.value = "";

        console.log(appTaskList);
    });
  }

}
