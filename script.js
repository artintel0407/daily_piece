const cardGrid = document.querySelector("#card-grid");
const filterBar = document.querySelector("#filter-bar");
const pagination = document.querySelector("#pagination");

const totalDays = document.querySelector("#total-days");
const totalPieces = document.querySelector("#total-pieces");
const totalCategories = document.querySelector("#total-categories");

const modal = document.querySelector("#modal");
const modalBackdrop = document.querySelector("#modal-backdrop");
const modalClose = document.querySelector("#modal-close");

const modalDate = document.querySelector("#modal-date");
const modalTitle = document.querySelector("#modal-title");
const modalCategory = document.querySelector("#modal-category");
const modalDescription = document.querySelector("#modal-description");
const modalNote = document.querySelector("#modal-note");

const modalImageWrap = document.querySelector("#modal-image-wrap");
const modalImage = document.querySelector("#modal-image");

let currentCategory = "All";
let currentPage = 1;
const itemsPerPage = 6;

function init() {
  renderSummary();
  renderFilters();
  renderCards();
  bindModalEvents();
}

function renderSummary() {
  const days = new Set(pieces.map((piece) => piece.date));
  const categories = new Set(pieces.map((piece) => piece.category));

  totalDays.textContent = days.size;
  totalPieces.textContent = pieces.length;
  totalCategories.textContent = categories.size;
}

function renderFilters() {
  const categories = ["All", ...new Set(pieces.map((piece) => piece.category))];

  filterBar.innerHTML = "";

  categories.forEach((category) => {
    const button = document.createElement("button");
    button.className = "filter-button";
    button.textContent = category;

    if (category === currentCategory) {
      button.classList.add("active");
    }

    button.addEventListener("click", () => {
      currentCategory = category;
      currentPage = 1;
      renderFilters();
      renderCards();
    });

    filterBar.appendChild(button);
  });
}

function renderCards() {
  const filteredPieces =
    currentCategory === "All"
      ? pieces
      : pieces.filter((piece) => piece.category === currentCategory);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedPieces = filteredPieces.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  cardGrid.innerHTML = "";

  paginatedPieces.forEach((piece) => {
    const card = document.createElement("article");
    card.className = "piece-card";

    card.innerHTML = `
      <div class="card-thumbnail">
        <div class="thumbnail-text">${formatThumbnailText(piece.thumbnailText)}</div>
      </div>

      <div class="card-body">
        <div class="card-meta">
          <span>DAY ${piece.day}</span>
          <span>${formatDate(piece.date)}</span>
        </div>

        <h3>${piece.title}</h3>
        <p>${piece.summary}</p>
        <span class="category-badge">${piece.category}</span>
      </div>
    `;

    card.addEventListener("click", () => openModal(piece));

    cardGrid.appendChild(card);
  });

  renderPagination(filteredPieces.length);
}

function renderPagination(totalItems) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  pagination.innerHTML = "";

  if (totalPages <= 1) {
    return;
  }

  for (let page = 1; page <= totalPages; page += 1) {
    const button = document.createElement("button");
    button.className = "pagination-button";
    button.type = "button";
    button.textContent = page;
    button.setAttribute("aria-label", `${page}페이지로 이동`);

    if (page === currentPage) {
      button.classList.add("active");
      button.setAttribute("aria-current", "page");
    }

    button.addEventListener("click", () => {
      currentPage = page;
      renderCards();
    });

    pagination.appendChild(button);
  }
}

function openModal(piece) {
  modalDate.textContent = `DAY ${piece.day} · ${piece.date}`;
  modalTitle.textContent = piece.title;
  modalCategory.textContent = piece.category;
  modalDescription.textContent = piece.description;
  modalNote.textContent = piece.note;

  if (piece.image && modalImageWrap && modalImage) {
    modalImage.src = piece.image;
    modalImage.alt = piece.title;
    modalImageWrap.classList.remove("hidden");
  } else if (modalImageWrap && modalImage) {
    modalImage.src = "";
    modalImage.alt = "";
    modalImageWrap.classList.add("hidden");
  }

  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modal.classList.add("hidden");
  document.body.style.overflow = "";

  if (modalImageWrap && modalImage) {
    modalImage.src = "";
    modalImage.alt = "";
    modalImageWrap.classList.add("hidden");
  }
}

function bindModalEvents() {
  modalClose.addEventListener("click", closeModal);
  modalBackdrop.addEventListener("click", closeModal);

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !modal.classList.contains("hidden")) {
      closeModal();
    }
  });
}

function formatDate(dateString) {
  const date = new Date(dateString);
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${month}.${day}`;
}

function formatThumbnailText(text) {
  return text.replaceAll("\n", "<br />");
}

init();
