/* 
Descrizione:
Rifare l'esercizio della to do list. Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
text, una stringa che indica il testo del todo
done, un booleano (true/false) che indica se il todo è stato fatto oppure no
MILESTONE 1
Stampare all'interno di una lista, un item per ogni todo. Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
MILESTONE 2
 Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.
MILESTONE 3
 Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
Bonus:
1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
2- cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)

*/

const app = new Vue({
    el: '#app',
    data: {
        newTask:{
            text:"",
            done: "to_do_task",
        },
        tasks: [{
                text: "Studiare Vuejs",
                done: "to_do_task",
            },
            {
                text: "Fare la spesa",
                done: "done_task",
            },
            {
                text: "Portare il cane al parco",
                done: "trash_task",
            },
            {
                text: "Studiare Javascript",
                done: "done_task",
            },
            {
                text: "Studiare ancora VueJs",
                done: "to_do_task",
            },
        ],
    },
    methods:{
        removeTask(event){
            element = event.target;
            let index = element.getAttribute('data-index');

            if (this.tasks[index].done === "trash_task") {
        
                 this.tasks.splice(index,1)     
            } else {
                this.tasks[index].done = "trash_task";
            }

        },
        addNewTask(){
            if (this.newTask.text !== "") {
                this.tasks.push(this.newTask);
            }
            this.newTask = {
                text:"",
                done:"to_do_task",
            }
        },
        doneTask(event){
            element = event.target;
            let index = element.getAttribute('data-index');

            if (this.tasks[index].done === "to_do_task") {
                this.tasks[index].done = "done_task";
            } else if(this.tasks[index].done === "done_task") {
                this.tasks[index].done = "to_do_task"; 
            } else{
                this.tasks[index].done = "to_do_task"; 
            }
   
        },
        emptyBin(){

            this.tasks = this.tasks.filter(task => task.done != 'trash_task');

        }        
    }
})