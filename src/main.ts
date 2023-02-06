import 'zone.js/dist/zone';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { QuestionService } from './question.service';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: `
  <h2>Questions</h2>
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Question</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr *ngFor="let question of questions">
        <td>{{ question.id }}</td>
        <td>{{ question.text }}</td>
        <td>
          <button (click)="editQuestion(question)">Edit</button>
          <button (click)="deleteQuestion(question)">Delete</button>
        </td>
      </tr>
    </tbody>
  </table>
  <button (click)="addQuestion()">Add Question</button>
  <form [formGroup]="questionForm" *ngIf="showForm" (ngSubmit)="submit()">
    <input type="text" formControlName="text" placeholder="Enter question">
    <button type="submit">Save</button>
    <button (click)="cancel()">Cancel</button>
  </form>
  `,
})
export class App {
  questions: any[];
  questionForm: FormGroup;
  showForm = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    // private questionService: QuestionService
  ) {}

  ngOnInit() {
    this.questionForm = this.formBuilder.group({
      text: ['', Validators.required],
    });
    this.getQuestions();
  }

  getQuestions() {
    // this.questionService.getQuestions().subscribe((questions) => {
    //   this.questions = questions;
    // });
  }

  addQuestion() {
    this.showForm = true;
  }

  editQuestion(question) {
    this.showForm = true;
    this.questionForm.setValue({
      text: question.text,
    });
  }

  deleteQuestion(question) {
  //   this.questionService.deleteQuestion(question.id).subscribe(() => {
  //     this.getQuestions();
  //   });
  }

  submit() {
    if (this.questionForm.valid) {
      const question = this.questionForm.value;
      // this.questionService.saveQuestion(question).subscribe(() => {
      //   this.getQuestions();
      //   this.cancel();
      // });
    }
  }

  cancel() {
    this.showForm = false;
    this.questionForm.reset();
  }
}

bootstrapApplication(App);
