function tagCancel(tag, elementDropdown) {
    tag.addEventListener('click', () => {
        tag.remove();
        elementDropdown.classList.toggle('hidden');
        resetSearchByTag(elementDropdown.innerText.toLowerCase());
    });
}

async function tagInitialiser() {
    const tag_section = document.querySelector('.tag_section');
    const options = document.querySelectorAll('.options li');
    options.forEach((option) => {
        option.addEventListener('click', () => {
            const tag = document.createElement('div');
            tag.setAttribute('class', 'tag');
            const tagContent = `
            <p class="tag-text">${option.innerText}</p>
            <button class="tag-button"><i class="fa-solid fa-xmark"></i></button>
        `;
            tag.innerHTML = tagContent;
            tag_section.appendChild(tag);
            option.classList.toggle('hidden');
            tagCancel(tag, option);
            searchByTag(option.innerText.toLowerCase());
        });
    });
}
