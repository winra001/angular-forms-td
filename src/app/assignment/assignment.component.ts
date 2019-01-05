import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-assignment',
    templateUrl: './assignment.component.html',
    styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {

    subscriptions = ['Basic', 'Advanced', 'Pro'];
    selectedSubscription = 'Advanced';

    @ViewChild('signupForm')
    signupForm: NgForm;

    constructor() {
    }

    ngOnInit() {
    }

    onSubmit() {
        console.log(this.signupForm.value);
    }

}
