//your code here
let list = document.querySelector('ul');
list.classList = "band";
// console.log(list);
let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];
let arr = [];
touristSpots.forEach((spot) =>{
	let str = "";
	spot.toLowerCase().split(" ").forEach((index) => {
		if(index === "the" || index === "a" || index === "an"){
			str +=  "";
		}else {
			str += index + " ";
		}
	})
	arr.push(str);
})

arr = arr.sort();
// console.log(arr);
arr.forEach((index) => {
	  // console.log("index" ,index)
	  let li = document.createElement("li");
	  li.appendChild(document.createTextNode(index));
	  list.appendChild(li);
});
















