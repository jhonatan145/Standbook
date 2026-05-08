// FAVORITOS

const botones =
document.querySelectorAll(".favoritoBtn");

botones.forEach(boton => {

    boton.addEventListener("click", () => {

        const stand =
        boton.dataset.stand;

        let favoritos =
        JSON.parse(
        localStorage.getItem("favoritos")
        ) || [];

        if(!favoritos.includes(stand)){

            favoritos.push(stand);

            localStorage.setItem(
                "favoritos",
                JSON.stringify(favoritos)
            );

            alert(
            stand + " añadido a favoritos ⭐"
            );

        }

    });

});

// BUSCADOR

const buscador =
document.getElementById("buscador");

if(buscador){

    buscador.addEventListener("input", () => {

        const texto =
        buscador.value.toLowerCase();

        const stands =
        document.querySelectorAll(".stand");

        stands.forEach(stand => {

            const nombre =
            stand.querySelector("summary")
            .textContent
            .toLowerCase();

            if(nombre.includes(texto)){

                stand.style.display =
                "block";

            }else{

                stand.style.display =
                "none";

            }

        });

    });

}
