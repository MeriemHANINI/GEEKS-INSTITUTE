// 🧩 EXERCISE 1 : SCOPE

// -------------------------------------------
// #1
function funcOne() {
    let a = 5;
    if (a > 1) {
        a = 3;
    }
    alert(`inside the funcOne function ${a}`);
}

funcOne();
// 🧠 Prediction: inside the funcOne function 3
// ✅ Explication: 'a' est une variable locale. Elle vaut 5 au début,
// puis devient 3 à cause du if. La valeur affichée est donc 3.

// #1.2 Si on utilise const au lieu de let :
// ❌ Erreur: TypeError: Assignment to constant variable.
// ⚠️ On ne peut pas réassigner une variable déclarée avec const.


// -------------------------------------------
// #2
let a2 = 0; // ⬅️ renommée pour éviter le conflit

function funcTwo() {
    a2 = 5;
}

function funcThree() {
    alert(`inside the funcThree function ${a2}`);
}

funcThree();
// 🧠 Prediction: inside the funcThree function 0
// ✅ 'a2' est globalement égale à 0 avant tout changement.

funcTwo();
funcThree();
// 🧠 Prediction: inside the funcThree function 5
// ✅ Après l’appel de funcTwo(), la variable globale 'a2' vaut 5.

// #2.2 Si on utilise const au lieu de let :
// ❌ Erreur: Assignment to constant variable.
// ⚠️ funcTwo essaie de réassigner 'a2', ce qui est interdit avec const.


// -------------------------------------------
// #3
function funcFour() {
    window.a3 = "hello"; // ⬅️ variable globale via window
}

function funcFive() {
    alert(`inside the funcFive function ${a3}`);
}

funcFour();
funcFive();
// 🧠 Prediction: inside the funcFive function hello
// ✅ 'window.a3' crée une variable globale accessible partout.


// -------------------------------------------
// #4
let a4 = 1; // ⬅️ renommée

function funcSix() {
    let a4 = "test";
    alert(`inside the funcSix function ${a4}`);
}

funcSix();
// 🧠 Prediction: inside the funcSix function test
// ✅ 'a4' à l’intérieur de funcSix est une variable locale qui masque
// la variable globale (shadowing).

// #4.2 Si on utilise const au lieu de let :
// ✅ Aucun problème, car on ne réassigne pas la variable.


// -------------------------------------------
// #5
let a5 = 2; // ⬅️ renommée

if (true) {
    let a5 = 5;
    alert(`in the if block ${a5}`);
}
alert(`outside of the if block ${a5}`);
// 🧠 Prediction:
// in the if block 5
// outside of the if block 2
// ✅ Chaque bloc a sa propre portée (block scope). 
// 'a5' dans le if et 'a5' à l’extérieur sont deux variables différentes.

// #5.2 Si on utilise const au lieu de let :
// ✅ Même comportement : deux portées séparées, pas de réaffectation.
