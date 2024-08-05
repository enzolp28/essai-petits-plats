let filtresTags = {
    searchValue: '',
    tagAppareils: [],
    tagUstensils: [],
    tagIngredients: []
}

function addTagEventListener(liSelector, tagSelector, filterType) {
    const tagElement = document.querySelector(tagSelector);
    const liFiltres = document.querySelectorAll(liSelector);
    const arrowsIcon = document.querySelectorAll('.arrow');

    liFiltres.forEach(li => {
        li.addEventListener('click', () => {
            const text = li.innerText;
            console.log(text);
            if (!filtresTags[filterType].includes(text)) {
                filtresTags[filterType].push(text.toLowerCase());

                const tag = document.createElement('div');
                tag.classList.add('tag');
                tag.setAttribute('data-type', filterType);
                tag.setAttribute('data-content', text);

                const span = document.createElement('span');
                span.innerText = text;
                tag.appendChild(span);

                const button = document.createElement('button');
                button.classList.add('deleteTag');
                button.innerText = 'X';

                button.addEventListener('click', deleteTag);
                tag.appendChild(button);
                tagElement.appendChild(tag);
                
                li.closest('.dropdown').classList.remove('show');

                arrowsIcon.forEach(arrow => {
                    arrow.classList.remove('rotate-180');
                })
            }
        });
    });
}

function deleteTag(e) {
    const parentTag = e.target.parentElement;
    parentTag.remove();

    const tagType = parentTag.getAttribute('data-type');
    console.log(tagType);
    const tagValue = parentTag.getAttribute('data-content').toLowerCase();
    filtresTags[tagType] = filtresTags[tagType].filter(tag => tag !== tagValue);

}

export { addTagEventListener };