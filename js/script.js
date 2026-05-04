const dialogRef = document.getElementById("chosen_photo_dialog")
let total = document.getElementById("photo_index").children.length;

function photo_view_dialog(clicked) {
    let img = document.getElementById("chosen_photo" + clicked);

    dialogRef.showModal();
    dialogRef.classList.add('full_view_dialog_opened');
    document.getElementById("chosen_photo").src = img.src;
    document.getElementById("photo_number").innerHTML = clicked + "/" + total;
}

function close_dialog() {
    dialogRef.classList.remove('full_view_dialog_opened');
    dialogRef.close();
}