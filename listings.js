
const btn = document.getElementsByClassName('green__box');
const searchContainer = document.getElementsByClassName('search-container');
const clear = searchContainer.lastElementChild;
const boxes = document.querySelectorAll('.box');
let state = [];

// What is state?

// What is "forEach"
// What is "includes"
// What is "push"
// What is "innerHTML"
// What is searchbox method
// What is filter method;

btn.forEach(button => {
    button.addEventListener('click', function(){
        if(!state.includes(button.innerHTML)){
            state.push(button.innerHTML);
            SearchBox();
            Filter();
        }
    })
})

clear.addEventListener('click', function(){
    state = [];
    SearchBox();
    Filter();
})

function SearchBox(){
    const Box = searchContainer.style;
    state.length > 0 ? Box.display = 'flex': Box.display = 'none';
    let el = '';
    state.map(a => {
        el+=`<div class="search-button">
                <p>${a}</p>
                <div class="remove"></div>
            </div>`;
    });
    searchContainer.firstElementChild.innerHTML = el;
        const remove = document.querySelectorAll('.remove');
        remove.forEach(el => {
            el.addEventListener('click', function(){
                let value = this.previousElementSibling.innerHTML;
                state = state.filter(a => a!=value);
                SearchBox();
                Filter();
            });
        });
}

function Filter(){
    boxes.forEach(box => {
        box.style.display = 'flex';
        const Buttons = Array.from(box.querySelectorAll('.green__box'));
        const Texts = Buttons.map(Button => Button.innerHTML);

        for(let i = 0; i<state.length; i++){
            if(Texts.includes(state[i])){
                continue;
            } else{
                box.style.display = 'none';
            }
        }
    })
} 




