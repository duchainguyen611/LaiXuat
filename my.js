let moneylend = +prompt("Nhap so tien vay:");
let interest = +prompt("Nhap lai xuat:");
let year = +prompt("Nhap so nam vay:");

moneyget = moneylend + moneylend*year*(interest/100);

alert(" So tien phai tra sau " + year + " nam la:" +moneyget);
