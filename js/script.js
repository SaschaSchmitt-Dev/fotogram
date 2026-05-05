const dialogRef = document.getElementById("chosen_photo_dialog");
let total = document.getElementById("photo_index").children.length;


//* Helpfunction: Extract Photo Name
function get_photo_name(img) {
    let name = img.src.split("/").pop()
        .replace(".webp", "")
        .replace(/_/g, " ")
        .replace(/ae/g, "ä")
        .replace(/oe/g, "ö")
        .replace(/ue/g, "ü")
        .slice(0, 40);

    return name;
}


//* Helpfunction: Update Dialog Content
function show_photo(photo_number) {
    let photoId = String(photo_number).padStart(2, "0");
    let img = document.getElementById("chosen_photo" + photoId);

    document.getElementById("chosen_photo").src = img.src;
    document.getElementById("photo_number").innerHTML = photoId + "/" + total;
    document.getElementById("chosen_photo_name").innerText = get_photo_name(img);
}


//* open Dialog
function photo_view_dialog(clicked) {
    dialogRef.showModal();
    dialogRef.classList.add("full_view_dialog_opened");

    show_photo(clicked);
}


//* close Dialog
function close_dialog() {
    dialogRef.classList.remove("full_view_dialog_opened");
    dialogRef.close();
}


//* next Photo
function next_photo() {
    let current = document.getElementById("photo_number").innerHTML.slice(0, 2);
    let next = parseInt(current) + 1;

    if (next > total) {
        next = 1;
    }

    show_photo(next);
}


//* previous Photo
function previous_photo() {
    let current = document.getElementById("photo_number").innerText.slice(0, 2);
    let previous = parseInt(current) - 1;

    if (previous < 1) {
        previous = total;
    }

    show_photo(previous);
}