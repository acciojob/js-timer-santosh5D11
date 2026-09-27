function showTimer(){
	const p = document.querySelector("p");

	setInterval(()=>{
		const date = new Date();

		const day = date.getDate();
		const month = date.getMonth() + 1;
		const year = date.getFullYear();

		const hours = date.getHours();
		const minutes = date.getMinutes();
		const seconds = date.getSeconds();

		p.innerText = `${day}/${month}/${year},${hours}:${minutes}:${seconds}`;
	},1000)
}

showTimer();