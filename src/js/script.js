const btn = document.querySelector('.submit');


btn.addEventListener('click', () => {
    Swal.fire(
        'Good job!',
        'You clicked the button!',
        'success'
    );
});