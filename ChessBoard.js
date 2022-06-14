let hashTag = "";
let hashTag2 = "";
function randomGrid(x, y) {
  for (let counterb = 1; counterb <= y; counterb++) {
    for (let counter = 1; counter <= x; counter++) {
      hashTag += " #";
    }
    console.log(hashTag);
    hashTag = "";

    for (let counter = 1; counter <= x; counter++) {
      hashTag2 += "# ";
    }

    console.log(hashTag2);
    hashTag2 = "";
  }
}

randomGrid(4, 4);
