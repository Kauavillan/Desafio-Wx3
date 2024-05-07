for (let i = 0; i < 3; i++) {
  $("#depoimentos-list").append(
    `
    <div class="depoimento">
        <div class="user-info">
            <div class="user-img">
                <img src="images/user2.png" alt="Ícone do usuário" />
            </div>
            <div>
                <p>Carlos A.</p>
                <p>São José do Rio Preto - SP</p>
                <div class="stars">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                </div>
            </div>
            </div>
            <div class="comment">
            <div>
                <img src="images/aspas.svg" alt="aspas" />
            </div>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                etiam, ut auctor nunc. Nullam eget nunc sit amet urna
                scelerisque.
            </p>
            <div>
                <img src="images/aspas.svg" alt="aspas" />
            </div>
        </div>
    </div>
    `
  );
}

for (let i = 0; i < 5; i++) {
  const button = $(
    `<button class="pag-btn${i == 0 ? " active" : ""}" ></button>`
  );
  button.click(() => {
    $(".pag-btn").removeClass("active");
    button.addClass("active");
  });
  $("#depoimentos-paginacao").append(button);
}
