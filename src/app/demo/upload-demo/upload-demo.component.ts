import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-upload-demo',
  templateUrl: './upload-demo.component.html',
  styleUrls: ['./upload-demo.component.scss']
})
export class UploadDemoComponent implements OnInit {

  constructor(private _message: NzMessageService) { }

  ngOnInit() {
  }


  showMessage(event){
    this._message.info("这是一条提示信息！");
  }
}
