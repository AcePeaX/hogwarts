import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

import { IdentityBlockComponent } from './identity-block/identity-block.component';

import { data } from '../data';
import { IdBlock } from './models/id-block.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,IdentityBlockComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  data:IdBlock[] = data
  teachers: IdBlock[] = []
  students: IdBlock[] = []

  ngOnInit(): void {
    this.teachers = data.filter(element=>{
      return element.isTeacher
    })
    this.students = data.filter(element=>{
      return !element.isTeacher
    })
  }
}
