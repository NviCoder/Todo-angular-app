import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewTodoComponent } from './components/new-todo/new-todo.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'To-Do';

  constructor(public dialog: MatDialog) { }

  public openDialog(): void {
    const dialogRef = this.dialog.open(NewTodoComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {

    });
  }
}
