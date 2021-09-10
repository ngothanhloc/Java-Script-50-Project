const lists = document.querySelectorAll(".list");
const listItems = document.querySelectorAll('.list-item');

let draggedItem = null;

for (let a = 0; a < listItems.length; a++) {
    const item = listItems[a];

    item.addEventListener('dragstart', () => {
        draggedItem = item;
        setTimeout(() => {
            item.style.display = 'none';
        }, 50);
    });

    item.addEventListener('dragend', () => {
        setTimeout(() => {
            item.style.display = 'block';
            draggedItem = null;
        }, 50);
    });

    for (let b = 0; b < lists.length; b++) {
        const list = lists[b];

        list.addEventListener('dragover', (e) => {
            e.preventDefault();

        });

        list.addEventListener('dragenter', e => {
            e.preventDefault();
            list.style.backgroundColor = "rgba(255, 255, 255, 0.7)";
        })

        list.addEventListener('dragleave', () => {
            list.style.backgroundColor = " rgba(116, 175, 179, 0.5)";
        });

        list.addEventListener('drop', () => {
            list.append(draggedItem);
            list.style.backgroundColor = " rgba(116, 175, 179, 0.5)";

        })
    }
}
