import { Component, OnInit } from '@angular/core';
import {Goal} from '../goal'
import { GoalFormComponent } from '../goal-form/goal-form.component';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {

  goals = [
    new Goal(1,'Dr Suess', '"You know youre in love when you cant fall asleep because reality is finally better than your dreams."', new Date(2019,3,14)),
    new Goal(2,'Stephen King', '"Get busy living or get busy dying"', new Date(2018,11,9)),
    new Goal(3, 'Eleon Roosevelt', '" A successfull man is one who can lay a frim foundation with the bricks others have throuwn at him"', new Date(2018,12,12)),
    new Goal(4, 'John F. Kennedy', '"Those who dare to fail miserably can achieve greatly"', new Date(2018,0,18)),
    new Goal(5, 'Theodore Roosevelt ', '"It is hard to fail, but it is worse never to have tried to succeed"', new Date(2018,2,14)),
    new Goal(6, 'Mother Theresa', '"Let us always meet each other with smile, for the smile is the beginning of love"', new Date(2018,3,14)),
   ]
   addNewGoal(goal){
     let goalLength = this.goals.length;
     goal.id=goalLength+1;
     goal.completeDate = new Date (goal.completeDate)
     this.goals.push(goal)
   }

   deleteGoal(isComplete,index){
     if (isComplete){
      let toDelete= confirm(`Are you sure you want to delete`)
      if(toDelete){
        this.goals.splice(index,1)
      }
     }
   }
   toggleDetails(index){
    this.goals[index].showDescription = !this.goals[index].showDescription;
   }

  constructor() { }

  ngOnInit() {
  }

}
