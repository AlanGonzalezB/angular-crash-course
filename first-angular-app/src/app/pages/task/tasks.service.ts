// Un servicio en angular es básicamente una clase
import { Injectable } from '@angular/core';
import { DUMMY_TASKS } from '../../../../public/dummy-tasks'
import { NewTaskType } from './task.type';

@Injectable({ providedIn: 'root' })
export class TasksService {

    private tasks = [...DUMMY_TASKS]

    constructor() {
        const tasks = localStorage.getItem('tasks')

        if (tasks) {
            this.tasks = JSON.parse(tasks);
        }
    }

    newTask?: boolean;

    getUserTasks(userId: string){
    return this.tasks.filter((task) => task.userId === userId)
    }

    onNewTaskClick() {    
    this.newTask = !this.newTask
    }


    onAddTask (newTask: NewTaskType, userId: string) {
        this.tasks.unshift({
            id: new Date().getTime().toString(),
            userId: userId,
            title: newTask.title,
            summary: newTask.summary,
            dueDate: newTask.dueDate
        })

        this.newTask = false

        this.saveTasks()
    }

    onCompleteTask(id: string) {
        this.tasks = this.tasks.filter((task) => task.id !== id)

        this.saveTasks()
    }


    private saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks))
    }


}