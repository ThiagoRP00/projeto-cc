// Função de mostrar menu no mobile
function showMenu() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.getElementById('menu-icon').classList.remove("fa-xmark");
        document.getElementById('menu-icon').classList.add("fa-bars");
    }
    else {
        menuMobile.classList.add('open');
        document.getElementById('menu-icon').classList.remove("fa-bars");
        document.getElementById('menu-icon').classList.add("fa-xmark");
    }
}

const modalLogin = document.querySelector('#box_login');
const modalRegister = document.querySelector('#box_register');
const modalForgotPassword = document.querySelector('#box_forgot_password');
const modalAbout = document.querySelector('#box_about');
const modalContact = document.querySelector('#box_contact');
const modalPrivacyPolicy = document.querySelector('#box_privacy_policy');
const modalTermsOfUse = document.querySelector('#box_terms_of_use');

// Funções de abrir e fechar modais
function showLogin() {
    modalLogin.showModal();
}

function closeLogin() {
    modalLogin.close();
}

function showRegister() {
    modalRegister.showModal();
    modalLogin.close();
}

function closeRegister() {
    modalRegister.close();
}

function showForgotPassword() {
    modalForgotPassword.showModal();
    modalLogin.close();
}

function closeForgotPassword() {
    modalForgotPassword.close();
}

function showAbout() {
    modalAbout.showModal();
}

function closeAbout() {
    modalAbout.close();
}

function showContact() {
    modalContact.showModal();
}

function closeContact() {
    modalContact.close();
}

function showPrivacyPolicy() {
    modalPrivacyPolicy.showModal();
} 

function closePrivacyPolicy() {
    modalPrivacyPolicy.close();
}

function showTermsOfUse() {
    modalTermsOfUse.showModal();
}

function closeTermsOfUse() {
    modalTermsOfUse.close();
}

// Botão de mostrar e ocultar senha
const passwordIcons = document.querySelectorAll('.password-icon');

passwordIcons.forEach(icon => {
    icon.addEventListener('click', function () {
        const input = this.parentElement.querySelector('.form-control');
        input.type = input.type === 'password' ? 'text' : 'password';
        this.classList.toggle('fa-eye');
    })
});

// Botão de mostrar opções de perfil
// Adicionar função de mostrar essa parte e ocultar botões de login e cadastro depois que o usuário fizer login 
const btnProfile = document.querySelector("#profile-btn");
const profileOptions = document.querySelector(".profile-options-list");

if (btnProfile && profileOptions) {
    btnProfile.addEventListener("click", (event) => {
        event.stopPropagation();
        profileOptions.classList.toggle("active");
    });

    profileOptions.addEventListener("click", (event) => {
        event.stopPropagation();
    });

    window.addEventListener("click", () => {
        profileOptions.classList.remove("active");
    });
}

document.getElementById('sidebar_btn').addEventListener('click', function () {
    document.getElementById('sidebar').classList.toggle('open-sidebar');
});

document.querySelectorAll('.side-item').forEach(item => {
    item.addEventListener('click', function () {
        document.querySelectorAll('.side-item').forEach(i => i.classList.remove('active'));
        this.classList.add('active');
    });
});

const sideItems = document.querySelectorAll('#side_items .side-item');
const forms = [
    document.getElementById('form_1'),
    document.getElementById('form_2'),
    document.getElementById('form_3'),
    document.getElementById('form_4'),
    document.getElementById('user_reviews')
];

sideItems.forEach((item, idx) => {
    item.addEventListener('click', function (e) {
        e.preventDefault();

        sideItems.forEach(i => i.classList.remove('active'));
        this.classList.add('active');

        forms.forEach(f => f.style.display = 'none');
        if (forms[idx]) {
            forms[idx].style.display = 'flex';
        }
    });
});

forms.forEach((f, i) => f.style.display = i === 0 ? 'flex' : 'none');

// ...existing code...

// Habilitar edição dos campos ao clicar em "Alterar"
document.addEventListener("DOMContentLoaded", function () {
    const btnAlterar = document.querySelector('#form_1 .btn-default[type="button"]');
    const form = document.getElementById('form_1');

    if (btnAlterar && form) {
        btnAlterar.addEventListener('click', function () {
            const inputs = form.querySelectorAll('input, select');
            inputs.forEach(input => {
                input.removeAttribute('disabled');
            });
        });
    }
});
// ...existing code...

// Botão de mostrar filtros de pesquisa de restaurantes
const btnFilter = document.querySelector(".btn-filter");
const filterContent = document.querySelector("#filter_content");

btnFilter.addEventListener("click", (event) => {
    event.stopPropagation();
    sortContent.classList.remove("active");
    filterContent.classList.toggle("active");
    console.log("Filter button clicked");
});

filterContent.addEventListener("click", (event) => {
    event.stopPropagation();
});

window.addEventListener("click", () => {
    filterContent.classList.remove("active");
});

// Botão de mostrar ordenação de pesquisa de restaurantes
const btnSort = document.querySelector(".btn-sort");
const sortContent = document.querySelector("#sort_content");

btnSort.addEventListener("click", (event) => {
    event.stopPropagation();
    filterContent.classList.remove("active");
    sortContent.classList.toggle("active");
});

sortContent.addEventListener("click", (event) => {
    event.stopPropagation();
});

window.addEventListener("click", () => {
    sortContent.classList.remove("active");
});

// Criação de cards dos restaurantes
// Atlterar para criar cards com as informações do banco de dados
// Rick: Alterei para criar os cards com as informações do banco de dados
async function carregarRestaurantes() {
    try {
        const response = await fetch('http://localhost:5000/api/restaurantes');
        const restaurantes = await response.json();

        const cardsContainer = document.querySelector("#cards_container");
        cardsContainer.innerHTML = "";

        restaurantes.forEach(restaurante => {
            const card = document.createElement("div");
            card.classList.add("card");
            card.innerHTML = `
                <div class="card-image">
                    <img src="assets/images/foto_restaurante.png" alt="Foto restaurante">
                </div>
                <div class="card-info">
                    <h3>${restaurante.nome}</h3>
                    <div>
                        Categoria
                    </div>
                    <div>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <span>5,0</span>
                    </div>
                    <div>
                        <i class="fa-solid fa-location-dot"></i>
                        Cidade
                    </div>
                </div>
            `;
            cardsContainer.appendChild(card);
        });
    } catch (error) {
        console.error("Erro ao carregar restaurantes:", error);
    }
}

document.addEventListener("DOMContentLoaded", carregarRestaurantes);

// Paginação da página de restaurantes
let perPage = 12;
const statePage = {
    page: 1,
    perPage,
    totalPage: Math.ceil(createCards.length / perPage),
    maxVisibleButtons: 5,
}

const pageControls = {
    next() {
        statePage.page++;

        const lastPage = statePage.page > statePage.totalPage;
        if (lastPage) {
            statePage.page--;
        }
    },
    preview() {
        statePage.page--;

        if (statePage.page < 1) {
            statePage.page++;
        }
    },
    goTo(page) {
        if (page < 1) {
            page = 1;
        }

        statePage.page = +page;

        if (page > statePage.totalPage) {
            statePage.page = statePage.totalPage;
        }
    },
    createListeners() {
        document.querySelector("#first").addEventListener("click", () => {
            pageControls.goTo(1);
            update();
        });

        document.querySelector("#last").addEventListener("click", () => {
            pageControls.goTo(statePage.totalPage);
            update();
        });

        document.querySelector("#next").addEventListener("click", () => {
            pageControls.next();
            update();
        });

        document.querySelector("#preview").addEventListener("click", () => {
            pageControls.preview();
            update();
        });
    },
    disableButtons() {
        if (statePage.page === 1) {
            document.querySelector("#preview").disabled = true;
            document.querySelector("#first").disabled = true;

        } else {
            document.querySelector("#preview").disabled = false;
            document.querySelector("#first").disabled = false;
        }
        if (statePage.page === statePage.totalPage) {
            document.querySelector("#next").disabled = true;
            document.querySelector("#last").disabled = true;
        } else {
            document.querySelector("#next").disabled = false;
            document.querySelector("#last").disabled = false;
        }
    }
}

const pageCards = {
    create(cardHTML) {
        const container = document.createElement("a");
        container.innerHTML = cardHTML;
        document.querySelector("#cards_container").appendChild(container);
    },
    update() {
        document.querySelector("#cards_container").innerHTML = "";
        let page = statePage.page - 1;
        let start = page * statePage.perPage;
        let end = start + statePage.perPage;

        const paginatedCards = createCards.slice(start, end);

        paginatedCards.forEach(pageCards.create);
    }
}

const numButtons = {
    create(number) {
        const button = document.createElement("li");
        button.innerHTML = `<a href="#">${number}</a>`;

        if (statePage.page === number) {
            button.classList.add("active");
        }

        button.addEventListener("click", (event) => {
            const page = event.target.innerText;

            pageControls.goTo(page);
            update();
        });
        document.querySelector("#pagination_numbers").appendChild(button);
    },
    update() {
        document.querySelector("#pagination_numbers").innerHTML = "";
        const { maxLeft, maxRight } = numButtons.calculateMaxVisible();
        for (let page = maxLeft; page <= maxRight; page++) {
            numButtons.create(page);
        }
    },
    calculateMaxVisible() {
        const { maxVisibleButtons } = statePage;
        let maxLeft = (statePage.page - Math.floor(maxVisibleButtons / 2));
        let maxRight = (statePage.page + Math.floor(maxVisibleButtons / 2));

        if (maxLeft < 1) {
            maxLeft = 1;
            maxRight = maxVisibleButtons;
        }

        if (maxRight > statePage.totalPage) {
            maxLeft = statePage.totalPage - (maxVisibleButtons - 1);
            maxRight = statePage.totalPage;
            if (maxLeft < 1) {
                maxLeft = 1;
            }
        }

        return { maxLeft, maxRight };
    }
}

function update() {
    pageCards.update();
    numButtons.update();
    pageControls.disableButtons();

}

function init() {
    update();
    pageControls.createListeners();

}

init();