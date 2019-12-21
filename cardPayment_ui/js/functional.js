const card = document.querySelector('#card'),
        btnOpenform = document.querySelector('#btn-open-form'),
        form = document.querySelector('#card-form'),
        cardNumber = document.querySelector('#card .numero'),
        cardName = document.querySelector('#card .name'),
        logo = document.querySelector('#logo'),
        firm = document.querySelector('#card .firm p'),
        monthExpiration = document.querySelector('#card .month')

const InitFront = () => {
    if (card.classList.contains('active')){
        card.classList.remove('active')
    }
}

// rotation card func
card.addEventListener('click', () => {
    card.classList.toggle('active');
})

// rotation button & open form func
btnOpenform.addEventListener('click', () => {
    btnOpenform.classList.toggle('active')
    form.classList.toggle('active')
})
