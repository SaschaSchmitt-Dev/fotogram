const dialogRef = document.getElementById("chosen_photo_dialog")
let total = document.getElementById("photo_index").children.length;
let name;

function photo_view_dialog(clicked) {
    let img = document.getElementById("chosen_photo" + clicked);
    name = img.src.split("/").pop()
        .replace(".webp", "")
        .replace(/_/g, " ")
        .replace(/ae/g, "ä")
        .replace(/oe/g, "ö")
        .replace(/ue/g, "ü")
        .slice(0, 40);

    dialogRef.showModal();
    dialogRef.classList.add('full_view_dialog_opened');
    document.getElementById("chosen_photo").src = img.src;
    document.getElementById("photo_number").innerHTML = clicked + "/" + total;
    document.getElementById("chosen_photo_name").innerText = name;
}


function close_dialog() {
    dialogRef.classList.remove('full_view_dialog_opened');
    dialogRef.close();
}

function next_photo() {
    let current = document.getElementById("photo_number").innerHTML.slice(0, 2);
    let next = parseInt(current) + 1;

    if (next > total) {
        next = 1;
    }

    let img = document.getElementById("chosen_photo" + String(next).padStart(2, "0"));

    name = img.src.split("/").pop()
        .replace(".webp", "")
        .replace(/_/g, " ")
        .replace(/ae/g, "ä")
        .replace(/oe/g, "ö")
        .replace(/ue/g, "ü")
        .slice(0, 40);

    document.getElementById("chosen_photo").src = img.src;
    document.getElementById("photo_number").innerHTML = String(next).padStart(2, "0") + "/" + total;
    document.getElementById("chosen_photo_name").innerText = name;
}

function previous_photo() {
    let current = document.getElementById("photo_number").innerText.slice(0, 2);
    let previous = parseInt(current) - 1;

    if (previous < 1) {
        previous = total;
    }

    let img = document.getElementById("chosen_photo" + String(previous).padStart(2, "0"));

    name = img.src.split("/").pop()
        .replace(".webp", "")
        .replace(/_/g, " ")
        .replace(/ae/g, "ä")
        .replace(/oe/g, "ö")
        .replace(/ue/g, "ü")
        .slice(0, 40);

    document.getElementById("chosen_photo").src = img.src;
    document.getElementById("photo_number").innerHTML = String(previous).padStart(2, "0") + "/" + total;
    document.getElementById("chosen_photo_name").innerText = name;
}