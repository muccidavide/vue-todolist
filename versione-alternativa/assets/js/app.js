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
            done: false,
        },
        tasks: [{
                text: "Studiare Vuejs",
                done: false
            },
            {
                text: "Fare la spesa",
                done: true
            },
            {
                text: "Portare il cane al parco",
                done: true
            },
            {
                text: "Studiare Javascript",
                done: true
            },
            {
                text: "Studiare ancora VueJs",
                done: false
            },
        ],
    },
    methods:{
        removeTask(taskIndex){
            this.tasks.splice(taskIndex,1)     

        },
        addNewTask(){
            if (this.newTask.text !== "") {
                this.tasks.push(this.newTask);
            }
            this.newTask = {
                text:"",
                done: false,
            }
        },
        doneTask(event){
            element = event.target;
            console.log(element);
            let index = element.getAttribute('data-index');
            console.log(this.tasks[index].done);

            if (this.tasks[index].done) {
                this.tasks[index].done = false;
            } else {
                this.tasks[index].done = true; 
            }
   
        },

        
    }
})