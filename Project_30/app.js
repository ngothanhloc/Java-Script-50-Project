// The Superhero Entry
class SuperheroEntry {
    constructor(superheroName, superheroUniverse, superheroPower) {
        this.superheroName = superheroName;
        this.superheroUniverse = superheroUniverse;
        this.superheroPower = superheroPower;
    }
}

// THe Superhero List Class
class SuperheroList {
    // Add Superhero
    addSuperhero(entry) {
        const listData = document.querySelector(".superhero-list-data");
        const listContainer = document.createElement("ul");
        listContainer.setAttribute("id", "list");

        listContainer.innerHTML += `
        <li>${entry.superheroName}</li>
        <li>${entry.superheroUniverse}</li>
        <li>${entry.superheroPower}</li> 
        <i class="fas fa-trash"></i>                             
                                    `;
        listData.appendChild(listContainer);
    }

    // Clear Superhoro Inputs Fields
    clearSuperheroInputs() {
        [document.querySelector("#name").value,
        document.querySelector("#universe").value,
        document.querySelector("#power").value,] = ["", "", ""];
    };

    // Validation Succes FUnction
    validationSuccess() {
        document.querySelector('.validation-success').classList.add('show-validation');
        setTimeout(() => {
            document.querySelector('.validation-success').classList.remove('show-validation');
        }, 1500);
    }
    // Validation Error Function
    validationError() {
        document.querySelector('.validation-error').classList.add('show-validation');
        setTimeout(() => {
            document.querySelector('.validation-error').classList.remove('show-validation');
        }, 1500);
    }

}

// StoreSuperhero Class
class StoreSuperhero {
    // Get Superheros From LS
    static getSuperhero() {
        let superheros;
        if (localStorage.getItem('superheros') === null) {
            superheros = [];
        } else {
            superheros = JSON.parse(localStorage.getItem('superheros'))
        }

        return superheros;
    };
    // Add Superheros Form LS
    static addSuperhero(entry) {
        const superheroList = StoreSuperhero.getSuperhero();

        superheroList.push(entry);
        localStorage.setItem("superheros", JSON.stringify(superheroList));
    }

    // Display Superheros From LS
    static displaySuperhero() {
        const superheroList = StoreSuperhero.getSuperhero();

        superheroList.forEach(superhero => {
            // Instantiating the SuperheroList Class
            const list = new SuperheroList();
            list.addSuperhero(superhero);
        });
    }

    // Removing Superheros from LS
    static removeSuperhero(clikedSuperhero) {
        const superheroList = StoreSuperhero.getSuperhero();

        superheroList.forEach((superhero, index) => {
            if (superhero.superheroName === clikedSuperhero) {
                superheroList.splice(index, 1);
            }
        });

        localStorage.setItem('superheros', JSON.stringify(superheroList));
    }
}



// -------------------------------------------------------Events----------------------------------------
document.addEventListener('DOMContentLoaded', StoreSuperhero.displaySuperhero);

const form = document.querySelector(".superhero-form");
form.addEventListener("submit", (e) => {
    e.preventDefault();

    let [superheroName, superheroUniverse, superheroPower] = [
        document.querySelector("#name").value,
        document.querySelector("#universe").value,
        document.querySelector("#power").value,
    ];

    // Instaniating the superheroEntry Class
    const entry = new SuperheroEntry(superheroName, superheroUniverse, superheroPower);

    // Instaniating the superheroList Class
    const list = new SuperheroList();

    // Validate the form if one of the input fields are empty
    if (superheroName === '' || superheroUniverse === '' || superheroPower === '') {
        list.validationError();
    } else {
        list.addSuperhero(entry);
        list.clearSuperheroInputs();
        list.validationSuccess();

        // Adding superhero to Local Storage
        StoreSuperhero.addSuperhero(entry);
    }
    console.log(list)
});

// Deleting Listed Superheros
const listData = document.querySelector(".superhero-list-data");
listData.addEventListener('click', (e) => {
    if (e.target.className === 'fas fa-trash') {
        const trash = e.target.parentNode;

        const clikedSuperhero = e.target.previousElementSibling.previousElementSibling.previousElementSibling.textContent;

        StoreSuperhero.removeSuperhero(clikedSuperhero);

        trash.remove();
    }
});