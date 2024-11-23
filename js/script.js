const text = document.querySelector("#text");
const title = document.querySelector("#title");
const viewproject = document.querySelector("#viewproject");
const inputFile = document.querySelector("#input-file");
const projectContainer = document.querySelector("#project");
const btn = document.querySelector("#btn");
const addProject = document.querySelector("#add-project");

addProject.addEventListener("click", () => {
  document.querySelector("#form").style.opacity = "1";
});

// Function to display stored projects
function displayProjects() {
  const storedProjects = JSON.parse(localStorage.getItem("projects")) || [];
  storedProjects.forEach((project) => {
    const divElement = document.createElement("div");
    divElement.classList.add("h-[370px]");

    const img = document.createElement("img");
    img.src = project.image;
    img.classList.add("img");
    divElement.appendChild(img);

    const h1 = document.createElement("h1");
    h1.innerHTML = project.title;
    h1.classList.add("h1");
    divElement.appendChild(h1);

    const p = document.createElement("p");
    p.innerHTML = project.text;
    p.classList.add("para");
    divElement.appendChild(p);

    const a = document.createElement("a");
    a.target = "_blank";
    a.href = project.link;
    a.innerHTML = project.viewProjectText;
    a.classList.add("a");
    divElement.appendChild(a);

    projectContainer.appendChild(divElement);
  });
}

// Function to convert image to Base64
function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
    reader.readAsDataURL(file);
  });
}
// Function to save a project
async function saveProject() {
  if (inputFile.files.length === 0) {
    alert("Please upload an image!");
    return;
  }
  if (!title.value || !text.value || !viewproject.value) {
    alert("Please fill in all fields!");
    return;
  }

  const base64Image = await getBase64(inputFile.files[0]); // Convert image to Base64
  const project = {
    image: base64Image,
    title: title.value,
    text: text.value,
    link: viewproject.value,
    viewProjectText: "View Project",
  };

  const storedProjects = JSON.parse(localStorage.getItem("projects")) || [];
  storedProjects.push(project);
  localStorage.setItem("projects", JSON.stringify(storedProjects));

  displayProjects();
}

// Add project on button click
btn.addEventListener("click", saveProject);

// Display projects on page load
window.addEventListener("DOMContentLoaded", displayProjects);
