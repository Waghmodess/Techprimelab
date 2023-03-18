import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Project } from 'src/app/models/projectForm.model';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent implements OnInit {

  projectForm: FormGroup;
  projectName: FormControl;
  reason: FormControl;
  type: FormControl;
  division: FormControl;
  category: FormControl;
  priority: FormControl;
  department: FormControl;
  location: FormControl;
  startDate: FormControl;
  endDate: FormControl;
  status: FormControl;
  submitted = false;

  reasons: Project[] = [
    { value: 'Business' },
    { value: 'Dealership' },
    { value: 'Transport' }
  ];

  types: Project[] = [
    { value: 'Internal' },
    { value: 'External' },
    { value: 'Vender' }
  ];

  divisions: Project[] = [
    { value: 'Compressor' },
    { value: 'Filter' },
    { value: 'Pumps' },
    { value: 'Glass' },
    { value: 'Water Heater' }

  ];

  categories: Project[] = [
    { value: 'Quality A' },
    { value: 'Quality B' },
    { value: 'Quality C' }
  ];

  priorities: Project[] = [
    { value: 'High' },
    { value: 'Medium' },
    { value: 'Low' }
  ];

  departments: Project[] = [
    { value: 'Strategy' },
    { value: 'Finance' },
    { value: 'Quality' },
    { value: 'Maintenance' },
    { value: 'Store' }
  ];

  locations: Project[] = [
    { value: 'Pune' },
    { value: 'Mumbai' },
    { value: 'Delhi' }
  ];

  constructor() { }

  ngOnInit(): void {
    this.createFormControls();
    this.createForm();
  }

  createFormControls() {
    this.projectName = new FormControl('', [Validators.required]);
    this.reason = new FormControl('', [Validators.required]);
    this.type = new FormControl('', [Validators.required]);
    this.division = new FormControl('', [Validators.required]);
    this.category = new FormControl('', [Validators.required]);
    this.priority = new FormControl('', [Validators.required]);
    this.department = new FormControl('', [Validators.required]);
    this.location = new FormControl('', [Validators.required]);
    this.startDate = new FormControl('', [Validators.required]);
    this.endDate = new FormControl('', [Validators.required]);
    this.status = new FormControl('');
  }

  createForm() {
    this.projectForm = new FormGroup({
      projectName: this.projectName,
      reason: this.reason,
      type: this.type,
      division: this.division,
      category: this.category,
      priority: this.priority,
      department: this.department,
      location: this.location,
      startDate: this.startDate,
      endDate: this.endDate,
      status: this.status
    });
  }

  onSubmit() {
    if (this.projectForm.valid) {
      console.log(this.projectForm.value);
    }
  }

  get f() {
    return this.projectForm.controls;
  }

}
