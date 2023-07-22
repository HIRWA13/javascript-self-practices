// 1. below function can be used to print the contents of the current Window.
const print = document.getElementById('print');
function printCurrentWindow() {
    window.print();
}
print.addEventListener('click', printCurrentWindow);