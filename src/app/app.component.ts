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
    // Sortning teachers
    this.teachers = data.filter(element=>{
      return element.isTeacher
    }).sort((a,b)=>{
      const da =  a.arrivalDate.split('/')
      const db =  b.arrivalDate.split('/')
      const value = (parseInt(da[2])-parseInt(db[2]))*500+(parseInt(da[1])-parseInt(db[1]))*31+(parseInt(da[0])-parseInt(db[0]))
      return value
    })

    // Sorting students
    this.students = data.filter(element=>{
      return !element.isTeacher
    }).sort((a,b)=>{
      if(a.house<b.house){return -1}
      if(a.house>b.house){return +1}
      if(a.firstName<b.firstName){return -1}
      if(a.firstName>b.firstName){return +1}
      if(a.lastName<b.lastName){return -1}
      if(a.lastName>b.lastName){return +1}
      return 0
    })
  }
}
