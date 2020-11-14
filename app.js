// function for adding new todo item

const btn = document.querySelector('#btn');
const list = document.querySelector('.todo-list');

btn.addEventListener('click', function () {


    let inputValue = document.querySelector('#input');

    if (inputValue.value.length == 0) {
        alert('Write something! This field cannot be empty.')
    }
    else {

    const newLi = document.createElement('li');

    newLi.innerText = inputValue.value;

    const itemDiv = document.createElement('div');
    itemDiv.classList.add('items-div');

    const checkBtn = document.createElement('i');
    checkBtn.classList.add('fa', 'fa-check');

    const trashBtn = document.createElement('i');
    trashBtn.classList.add('fa', 'fa-trash');

    itemDiv.appendChild(checkBtn);
    itemDiv.appendChild(trashBtn);

    newLi.appendChild(itemDiv)

    list.appendChild(newLi)


    let trashBtns = document.querySelectorAll('.fa-trash');

    for (var i = 0; i < trashBtns.length; i++) {
        trashBtns[i].onclick = function () {
            var div = this.parentElement.parentElement;

            div.classList.add('animate');

            setTimeout(function () {
                div.remove()
            }, 1000)
        }
    }

    let completeBtns = document.querySelectorAll('.fa-check');

    for (var k = 0; k < completeBtns.length; k++) {
        completeBtns[k].onclick = function () {
            var div = this.parentElement.parentElement;
            div.classList.toggle('opacity');
        }
    }

    inputValue.value = '';

    };

});
