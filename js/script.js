const dialogRef = document.getElementById("chosen_photo_dialog")

function photo_view_dialog() {
    dialogRef.showModal();
    dialogRef.classList.add('full_view_dialog.opened');
}

function close_dialog() {
    dialogRef.classList.remove('full_view_dialog.opened');
    dialogRef.close();
}