import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss'],
})
export class StudentFormComponent {
  @Input() studentIndex: any = Number;
  @Output() notify = new EventEmitter();

  @Input() student: any = FormGroup;

  getStudentFields(): FormGroup {
    return new FormGroup({
      student_name: new FormControl(''),
      student_class: new FormControl(''),
      student_age: new FormControl(''),
      studentSubjects: new FormGroup({
        studentSubjectArray: new FormArray([this.putNewSubject()]),
      }),
    });
  }

  putNewSubject() {
    return new FormGroup({
      subject: new FormControl(''),
      marks: new FormControl(''),
    });
  }

  removeStudent() {
    this.notify.emit();
  }

  subjectsFormGroup() {
    return this.student.get('studentSubjects') as FormGroup;
  }

  subjectsArray() {
    return this.subjectsFormGroup().get('studentSubjectArray') as FormArray;
  }

  addNewSubject() {
    this.subjectsArray().push(this.putNewSubject());
  }

  removeNewSubject(i: number) {
    this.subjectsArray().removeAt(i);
  }

  reset() {
    this.student = this.getStudentFields();
  }
}
