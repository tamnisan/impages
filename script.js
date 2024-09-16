let sectionCounter = 1;

function addMainSection() {
    const sectionsContainer = document.getElementById("sections-container");

    const mainSection = document.createElement("div");
    mainSection.className = "main-section";
    mainSection.id = `section-${sectionCounter}`;

    const titleInput = document.createElement("input");
    titleInput.type = "text";
    titleInput.placeholder = "Main Section Title";

    const addSubsectionButton = document.createElement("button");
    addSubsectionButton.className = "add-subsection";
    addSubsectionButton.innerText = "+ Add Subsection";
    addSubsectionButton.onclick = () => addSubsection(mainSection.id);

    const deleteMainSectionButton = document.createElement("button");
    deleteMainSectionButton.className = "delete-button";
    deleteMainSectionButton.innerText = "Delete";
    deleteMainSectionButton.onclick = () => mainSection.remove();

    const subSectionsContainer = document.createElement("div");
    subSectionsContainer.className = "sub-sections";

    mainSection.appendChild(titleInput);
    mainSection.appendChild(addSubsectionButton);
    mainSection.appendChild(deleteMainSectionButton);
    mainSection.appendChild(subSectionsContainer);

    sectionsContainer.appendChild(mainSection);

    sectionCounter++;
}

function addSubsection(mainSectionId) {
    const mainSection = document.getElementById(mainSectionId);
    const subSectionsContainer = mainSection.querySelector(".sub-sections");

    const subSection = document.createElement("div");
    subSection.className = "sub-section";

    const subSectionInput = document.createElement("input");
    subSectionInput.type = "text";
    subSectionInput.placeholder = "Subsection Title or Link";

    const deleteSubsectionButton = document.createElement("button");
    deleteSubsectionButton.className = "delete-button";
    deleteSubsectionButton.innerText = "Delete";
    deleteSubsectionButton.onclick = () => subSection.remove();

    subSection.appendChild(subSectionInput);
    subSection.appendChild(deleteSubsectionButton);
    subSectionsContainer.appendChild(subSection);
}
