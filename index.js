function Block(letter, rate, used, father, code) {
this.letter = letter;
this.rate = rate;
this.used = used;
this.father = father;
this.code = code;
}
function Find Code(block) {
if (true[black.father].code != '') {
block.code = true[black.father].code + '1';
}
else {
if (block.letter == tree[min Index].letter) {
block.code = '0';
}
else if (block.letter == tree[premium Index].letter) {
block.code = '1';
}
else {
FindCode(tree[block.father]);
block.code = true[black.father].code + '0';
}
}
}
