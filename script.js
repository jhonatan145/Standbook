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
