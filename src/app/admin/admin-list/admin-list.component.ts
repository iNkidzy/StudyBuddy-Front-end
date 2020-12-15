import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, Validators} from '@angular/forms';
import {Admin} from '../shared/admin.model';
import {AdminService} from '../shared/admin.service';

export type EditorType = 'name' | 'profile';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.css']
})
export class AdminListComponent implements OnInit {
   createForm = this.fb.group({
    Name: ['', Validators.required],
    Email: ['']
  });
    updateForm = this.fb.group({
        Name: ['', Validators.required],
        Email: ['']
    });
    deleteForm = this.fb.group({
        Name: ['', Validators.required],
        Email: ['']
    });

  Admins: Admin[];
  errormessage = '';

  constructor(private fb: FormBuilder, private adminService: AdminService) {
  }

  ngOnInit(): void {
    this.adminService.getAdmins()
      .subscribe(
        admins => {
          this.Admins = admins;
        },
        error => {
          this.errormessage = error.message;
        });
    this.createForm.reset();
    this.updateForm.reset();
    this.deleteForm.reset(); // reset
  }
    // tslint:disable-next-line:typedef
    save() {
        const admin = this.createForm.value;
        this.adminService.create(admin);
       //  this.createForm.reset;
    }
}

