// document.querySelectorAll('slider-btns > a')
// console.log("I love unicorns")
// console.log([1,2,3,4,5,][2])
// const integers = [80,90,100]
// for(const i of integers) console.log(i-5)
//     const animals = ["OWl","hARpy","sLoTh","pengUIn"]
// console.log(animals.at(-1))
// for(const a of animals){
    // if(a.toLowerCase() === 'animals'[1]) continue;
    // console.log(a.toLowerCase())
    // }
    // function logger(){
        // console.log(animals.at(-2))
    // }
    // logger();
    // function logger(w,f){
        // console.log("I watch", w, "every",f, ".")
    // }
    // logger("The Vampire Diaries","Tuesday")
// const number = [500]
// for(const r of number) console.log(r*r)
// function findSquare(n){
    // console.log(`The Square Of ${n} Is ${n*n}.`)
// }
// findSquare(500)
























// const anchors = document.querySelectorAll('#slider-btns > a')
// for(const a of anchors){
//     a.addEventListener('click', () => {
//         anchors.forEach((anc) => anc.classList.remove('on'))
//         a.classList.add('on');
        // console.log(a.getAttribute('href'))
//     })
// }
// const int = [2,4,6]
// for(const a of int)console.log(a*a,a*a*a)
//     // console.log(int.at(-3))
//     // ARRAY METHODS
//     int.push(8,10,12)
//     int.unshift(-2,-4)
//     int.pop()
//     int.shift()
//     console.log(int.at(-4))
//     console.log(int.includes(-2))
//     console.log(int.indexOf(10))
//     int.push(100,200)
//     console.log(int.length)
// console.log(colors[0],colors[1],colors[2])
// console.log(color[1])
// console.log(color[2])
document.querySelectorAll('.img').forEach(img => {
    img.addEventListener('click' , (e) => {
        document.querySelector('aside').classList.add('view');
    })
})
document.querySelector('button.close').addEventListener('click' , (e) => {
    document.querySelector('aside').classList.remove('view')
})