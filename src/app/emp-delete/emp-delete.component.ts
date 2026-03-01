import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EmployeeService } from '../services/employee.service';
import { CoreService } from '../core/core.service';

@Component({
  selector: 'app-emp-delete',
  templateUrl: './emp-delete.component.html',
  styleUrls: ['./emp-delete.component.css'],
})
export class EmpDeleteComponent {
  constructor(
    private _dialogRef: MatDialogRef<EmpDeleteComponent>,
    private _empService: EmployeeService,
    private _coreService: CoreService,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}
  handleDeleteEmployee() {
    if (this.data) {
      this._empService.deleteEmployee(this.data.id).subscribe({
        next: (res) => {
          this._coreService.openSnackBar('Employee deleted!', 'done');
          this._dialogRef.close(true);
        },
        error: console.log,
      });
    }
  }
}
