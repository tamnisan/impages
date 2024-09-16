document.getElementById('linkForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const sectionTitle = document.getElementById('sectionTitle').value;
    const linkTitle = document.getElementById('linkTitle').value;
    const linkURL = document.getElementById('linkURL').value;

    let linksContainer = document.getElementById('linksContainer');
    let section = document.querySelector(`[data-title="${sectionTitle}"]`);

    if (!section) {
        section = document.createElement('div');
        section.className = 'section';
        section.dataset.title = sectionTitle;

        const sectionHeader = document.createElement('h3');
        sectionHeader.className = 'link-section-title';
        sectionHeader.textContent = sectionTitle;
        section.appendChild(sectionHeader);

        const linkList = document.createElement('ul');
        section.appendChild(linkList);

        linksContainer.appendChild(section);
    }

    const linkList = section.querySelector('ul');
    const newLink = document.createElement('li');
    const link = document.createElement('a');
    link.href = linkURL;
    link.textContent = linkTitle;
    link.target = '_blank';
    newLink.appendChild(link);
    linkList.appendChild(newLink);

    document.getElementById('sectionTitle').value = '';
    document.getElementById('linkTitle').value = '';
    document.getElementById('linkURL').value = '';
});
