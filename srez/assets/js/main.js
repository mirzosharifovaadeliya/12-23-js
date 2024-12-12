// modal

const makeRequestModal = document.querySelector("#make_request");

const openModal = () => {
    makeRequestModal.showModal();
};
const closeModal = () => {
    makeRequestModal.close();
};

// accordion

function toggleAccordion(event) {
    event.currentTarget.parentNode.classList.toggle("open");
}

document.addEventListener("click", () => {
    console.log();
});

// observer

function createObserver(observeElement) {
    let observer;

    let options = {
        root: null,
        rootMargin: "-20px",
        threshold: [0],
    };
    function handleIntersect(entries, observer) {
        entries.forEach((entry) => {
            console.log(entry);
            if (entry.isIntersecting) {
                openModal();
            }
        });
    }

    observer = new IntersectionObserver(handleIntersect, options);
    observer.observe(observeElement);
}

window.addEventListener(
    "load",
    (event) => {
        const observeElement = document.querySelector(".faq");
        createObserver(observeElement);
    },
    false
);

// раскрытие списка в меню при наведении

const linksExpand = document.querySelectorAll(".link_expand");

linksExpand.forEach((elem) => {
    elem.addEventListener("mouseover", (event) => {
        event.currentTarget.classList.add("open");
    });
    elem.addEventListener("mouseout", (event) => {
        event.currentTarget.classList.remove("open");
    });
});

// отправка запроса с email

async function sendEmail(event) {
    email = document.querySelector("input[name='email']");

    console.log(email.value);

    event.preventDefault();

    try {
        const response = await fetch(
            `https://dummyjson.com/c/d5a7-00d6-4fec-9641`,
            {
                method: "POST",
                body: JSON.stringify({ email: email.value }),
            }
        );
        const responseJson = await response.json();
        console.log(responseJson);
        alert(`Успешно!`);
        // debugger;
        // location.reload();
    } catch (error) {
        console.error("Произошла ошибка", error);
        return;
    }
}
