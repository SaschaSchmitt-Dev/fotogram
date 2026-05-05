const dialogRef = document.getElementById("chosen_photo_dialog");
const photoIndex = document.getElementById("photo_index");

//* Photo Array
const photos = [
    "01_Andamanensee_Lagune_mit_Kalksteinfelsen.webp",
    "02_Longtailboot_am_Phi_Phi_Strand.webp",
    "03_Dschungelpfad_im_suedthailaendischen_Regenwald.webp",
    "04_Tuerkisfarbene_Bucht_bei_Krabi.webp",
    "05_Reisterrassen_im_Norden_von_Chiang_Mai.webp",
    "06_Antiker_Tempelkomplex_im_Dschungel.webp",
    "07_Wasserfall_im_Khao_Sok_Nationalpark.webp",
    "08_Tempelblick_mit_Vulkanpanorama.webp",
    "09_Railay_Beach_beim_Sonnenuntergang.webp",
    "10_Lagune_mit_Longtailboot_und_Karstfelsen.webp",
    "11_Tropischer_Wasserfall_im_Regenwald.webp",
    "12_Makakenaffe_im_thailaendischen_Dschungel.webp",
    "13_Mehrstufiger_Wasserfall_im_Nationalpark.webp",
    "14_Dschungelpfad_entlang_eines_Bergbachs.webp",
    "15_Waran_im_thailaendischen_Regenwald.webp",
    "16_Waldtempel_auf_einem_Dschungelpfad.webp",
    "17_Affe_auf_Baumast_im_Tropenwald.webp",
    "18_Elefant_am_Wasserfall_im_Norden_Thailands.webp"
];

let total = photos.length;


//* get all Photos
function open_album() {
    for (let i = 0; i < photos.length; i++) {
        let element = createPhotoElement(i);
        photoIndex.appendChild(element);
    }
}


//* create Elements for Photo Preview
function createPhotoElement(index) {
    let photoNumber = String(index + 1).padStart(2, "0");

    let button = document.createElement("button");
    button.classList.add("photo_button");

    button.onclick = function () {
        photo_view_dialog(index + 1);
    };

    let img = document.createElement("img");
    img.id = "chosen_photo" + photoNumber;
    img.src = "./assets/img/" + photos[index];
    img.alt = get_photo_name(photos[index]);

    button.appendChild(img);

    return button;
}


//* Helper function: Get Photo Name from file
function get_photo_name(fileName) {
    let name = fileName
        .replace(".webp", "")
        .replace(/_/g, " ")
        .replace(/ae/g, "ä")
        .replace(/oe/g, "ö")
        .replace(/ue/g, "ü")
        .slice(3, 43);

    return name;
}


//* Helper function: Update Dialog Content
function show_photo(photo_number) {
    let photoId = String(photo_number).padStart(2, "0");
    let img = document.getElementById("chosen_photo" + photoId);

    document.getElementById("chosen_photo").src = img.src;
    document.getElementById("photo_number").innerHTML = photoId + "/" + total;
    document.getElementById("chosen_photo_name").innerText = get_photo_name(photos[photo_number - 1]);
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