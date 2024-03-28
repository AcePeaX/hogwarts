import { Component, Input } from '@angular/core';
import { IdBlock } from '../models/id-block.model';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-identity-block',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './identity-block.component.html',
  styleUrl: './identity-block.component.scss'
})
export class IdentityBlockComponent {
  @Input() dataBlock!: IdBlock;

  year(date:string):string {
    const yearNumber:string = date.split('/')[2]
    if(yearNumber=='1991'){return "First year"}
    else if(yearNumber=='1990'){return "Second year"}
    else if(yearNumber=='1989'){return "Third year"}
    return date
  }

  dottedDate(date:string):string {
    const splittedDate:string[] = date.split('/')
    return splittedDate[0]+"."+splittedDate[1]+"."+splittedDate[2]
  }
}
