import { Component, OnInit,Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.scss']
})
export class DeleteModalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef< DeleteModalComponent>,
    @Inject(MAT_DIALOG_DATA) public message: string) { }

  ngOnInit() {
  }
  onNoClick(): void {
  //   @ViewChild('#no').addEventListener('mousedown', e => {
  //     e.stopPropagation()
  
    
  // })
  
  this.dialogRef.close();
}

}

