import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, Validators} from '@angular/forms';

export type EditorType = 'name' | 'profile';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.css']
})
export class AdminListComponent implements OnInit {
  profileForm = this.fb.group({
    Name: ['', Validators.required],
    Username: [''],
    Email: ['']
  });
  constructor(private fb: FormBuilder) {
  }
  ngOnInit(): void {
  }
}
