import { Component } from '@angular/core';
import { FileUploadService } from '../core/file-upload.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent {

  constructor(private fileUploadService: FileUploadService) {
  }

  onFileSelected($event: any) {
    const files: File[] = Array.from($event.target?.files);
    files.forEach(file => this.fileUploadService.uploadGraphicAsset(file));
  }
}
