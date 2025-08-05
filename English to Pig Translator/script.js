const input = document.querySelector(".input");
const btn = document.querySelector(".btn");
const output = document.querySelector(".output");

btn.addEventListener("click", () => {
  const testoInput = input.value.toLowerCase();
  const dividiParole = testoInput.split(" ");
  const vocali = ["a", "e", "i", "o", "u"];

  let pigLatin = dividiParole.map((parola) => {
    if (vocali.includes(parola[0])) {
      return parola + "way";
    } else {
      let indexVocale = [...parola].findIndex((lettera) =>
        vocali.includes(lettera)
      );
      let consonanti = parola.slice(0, indexVocale);
      let resto = parola.slice(indexVocale);
      return resto + consonanti + "ay";
    }
  });
  output.textContent = pigLatin.join(" ");
});
