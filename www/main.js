function toggleVisibility() {
    let element = document.getElementById('hiddenDiv');
    if (element.style.display === 'none') {
        element.style.display = 'block';
    } else {
        element.style.display = 'none';
    }
}

closee.onmouseover = function() {
    closee.style.background= "#f7dc63";
};
    
closee.onmouseleave = function() {
    closee.style.background= "grey";
};

save.onmouseover = function() {
    save.style.background= "#f7dc63";
};
    
save.onmouseleave = function() {
    save.style.background= "grey";
};

show.onmouseover = function() {
    show.style.background= "#f7dc63";
};
    
show.onmouseleave = function() {
    show.style.background= "grey";
};

function validation(form) {

    let result = true;
    return result
    }
document.getElementById('forma').addEventListener('submit', function(event) {
event.preventDefault()
if (validation(this) == true) {
alert('Форма проверена успешно!')
}
})