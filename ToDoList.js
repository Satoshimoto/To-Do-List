class ToDoList {
    constructor() {
        document.getElementById('buttonAdd').addEventListener('click', this.createList.bind(this));
        this.inputList = document.querySelector('.header .inputToDo');
        this.elements = document.querySelector('.main .elements');

    }

    addingElement(content) {
        let delButton = document.createElement('div');
        delButton.textContent = 'X';
        delButton.className = 'delete';
        let element = document.createElement('div');
        element.textContent = content;
        element.className = 'item';
        element.appendChild(delButton);

        this.elements.appendChild(element);

        let parentElement = this.elements;

        delButton.addEventListener('click', function () {
            parentElement.removeChild(element);
        });
    }

    createList() {
        let inputContent = this.inputList.value;
        if (inputContent === '') return alert('Add something to the list');
        let element = new Listelement(inputContent);

        this.addingElement(element.showContent());

        this.inputList.value = '';
    }
}