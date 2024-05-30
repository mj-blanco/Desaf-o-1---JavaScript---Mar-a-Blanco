const PRICE = 400000
let amount = 0
let total = 0

initialPrice = document.querySelector("#initial-price")
initialPrice.innerHTML = PRICE

totalAmount = document.querySelector("#total-amount")
totalAmount.innerHTML = amount

btnPlus = document.querySelector("#btn-plus")
btnSust = document.querySelector("#btn-sust")

totalPrice = document.querySelector("#total-price")
totalPrice.innerHTML = total

function add() {
    amount = amount + 1
    totalAmount.innerHTML = amount
}

function sust() {
    amount = amount - 1
    totalAmount.innerHTML = amount
}

function multi () {
    total = amount * PRICE
    totalPrice.innerHTML = total
}

btnPlus.addEventListener ("click", add)
btnPlus.addEventListener ("click", multi)

btnSust.addEventListener ("click", sust)
btnSust.addEventListener ("click", multi)
