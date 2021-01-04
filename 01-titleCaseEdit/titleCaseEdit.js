function titleCaseEdit(title) {
  // Insert code here;
    let eTitle = title.toLowerCase();
    eTitle = eTitle.split(" ");

    for(let i = 0; i < eTitle.length; i++) {
      eTitle[i] = eTitle[i].charAt(0).toUpperCase() + eTitle[i].slice(1);
    }

    return eTitle.join(" ");
}

// Do not edit this line;
module.exports = titleCaseEdit;