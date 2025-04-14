import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-loan-form',
  imports: [],
  templateUrl: './new-loan-form.component.html',
  styleUrl: './new-loan-form.component.css'
})
export class NewLoanFormComponent {
    loanAppForm: FormGroup = new FormGroup({});

    formBuilder = inject(FormBuilder);

    initializeForm() {
        this.loanAppForm = this.formBuilder.group({
            applicationID:[0],
            fullName:['', Validators.required],
            applicationStatus: [''],
            panCard: ['', Validators.required, Validators.pattern('[A-Z]{5}[0-9]{4}[A-Z]{1}')],
            dateOfBirth: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
            address: ['', Validators.required],
            city: ['', Validators.required],
            state: ['', Validators.required],
            zipCode: ['', Validators.required, Validators.pattern('^[0-9]{6}$')],
            annualIncome: [0, Validators.required, Validators.min(0)],
            employmentStatus: ['', Validators.required],
            creditScore: [0, Validators.required,Validators.min(300), Validators.max(850)],
            assets: ['', Validators.required],
            dateApplied: ['', Validators.required],
            Loans: this.formBuilder.array([this.createLoanGroup()]),
            customerId: [0, Validators.required]
        })
    }

    createLoanGroup() {
        return this.formBuilder.group({
            loanId: [0],
            loanType: ['', Validators.required],
            loanAmount: [0, Validators.required],
            loanTerm: [0, Validators.required],
            interestRate: [0, Validators.required],
            loanStatus: ['']
        });
    }
}
