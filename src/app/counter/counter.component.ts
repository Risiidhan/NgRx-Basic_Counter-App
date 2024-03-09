import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../states/app.state';
import { selectCount } from '../states/counter/counter.selector';
import { decreament, increament, reset } from '../states/counter/counter.action';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {

  count$ : Observable<number>;

  constructor(private store: Store<AppState>){
    this.count$ = store.select(selectCount);
  }

  increamentCount(){
    this.store.dispatch(increament())
  }

  decreamentCount(){
    this.store.dispatch(decreament())
  }

  resetCount(){
    this.store.dispatch(reset())
  }
}
