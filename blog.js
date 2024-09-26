// function addContent() {
//   const input1 = document.getElementById("input1").value;
//   const input2 = document.getElementById("input2").value;

//   document.getElementById("data1").textContent = input1;

//   const img1 = document.createElement("img");
//   img1.src = input2;
//   img1.alt = "Dynamic Image";
//   img1.style.width = "100%";
//   img1.style.height = "100%";

//   const image1Box = document.getElementById("image1");
//   image1Box.innerHTML = "";
//   image1Box.appendChild(img1);

//   const img2 = document.createElement("img");
//   img2.src = input2;
//   img2.alt = "Dynamic Image";
//   img2.style.width = "100%";
//   img2.style.height = "100%";

//   const image2Box = document.getElementById("image2");
//   image2Box.innerHTML = "";
//   image2Box.appendChild(img2);
// }

// function removeContent() {
//   document.getElementById("input1").value = "";
//   document.getElementById("input2").value = "";

//   document.getElementById("data1").textContent = "Data";

//   const image1Box = document.getElementById("image1");
//   image1Box.innerHTML = "Image";

//   const image2Box = document.getElementById("image2");
//   image2Box.innerHTML = "Image";
// }

/* For Dynamic insertion */

let state = true;
function addInParentContent(state, input1, input2) {
  const content1 = `<div class="content1">
          <div class="data" id="data1">${input1}</div>
          <div class="image" id="image1">
            <img
              src=${input2}
              alt="Book Cover 1"
            />
          </div>
        </div>`;

  const content2 = `<div class="content2">
          <div class="image" id="image2">
            <img
              src=${input2}
              alt="Book Cover 2"
            />
          </div>
          <div class="data" id="data2">${input1}</div>
        </div>`;

  const parentContent = document.getElementById("parentContent");
  if (state) parentContent.innerHTML += content1;
  else parentContent.innerHTML += content2;
}

function handleClick() {
  const input1 = document.getElementById("input1").value;
  const input2 = document.getElementById("input2").value;
  if (input1.length === 0 || input2.length === 0) {
    alert("Please fill both the fields !");
  } else {
    addInParentContent(state, input1, input2);
    state = !state;
  }
}
