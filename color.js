let opt = document.querySelectorAll(".opt");
        let teste = document.querySelector("#teste");
        let body = document.body;

        body.style.background = "green";

        teste.onclick =() => {
            if (opt[0].selected) {
                body.style.background = "green";
            }

            else if (opt[1].selected) {
                body.style.background = "blue";
            }

            else if (opt[2].selected) {
                body.style.background = "yellow";
            }

            else if (opt[3].selected) {
                body.style.background = "red";
            }
        }