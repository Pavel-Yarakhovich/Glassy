const popularItems = [
	{
		img: 'img/hit-1.png',
		desc: 'Сливочное с апельсиновым джемом и цитрусовой стружкой',
		price: '310'
	},
	{
		img: 'img/hit-2.png',
		desc: 'Сливочно-кофейное с кусочками шоколада',
		price: '380'
	},
	{
		img: 'img/hit-3.png',
		desc: 'Сливочно-клубничное с присыпкой из белого шоколада',
		price: '355'
	},
	{
		img: 'img/hit-4.png',
		desc: 'Сливочное крем-брюле с карамельной подливкой',
		price: '415'
	}
]

const allItems = [
	{
		img: 'img/hit-1.png',
		desc: 'Сливочное с апельсиновым джемом и цитрусовой стружкой',
		price: '310'
	},
	{
		img: 'img/hit-2.png',
		desc: 'Сливочно-кофейное с кусочками шоколада',
		price: '380'
	},
	{
		img: 'img/hit-3.png',
		desc: 'Сливочно-клубничное с присыпкой из белого шоколада',
		price: '355'
	},
	{
		img: 'img/hit-4.png',
		desc: 'Сливочное крем-брюле с карамельной подливкой',
		price: '415'
	},
	{
		img: 'img/hit-5.png',
		desc: 'Сливочное с апельсиновым джемом и цитрусовой стружкой',
		price: '310'
	},
	{
		img: 'img/hit-6.png',
		desc: 'Сливочно-кофейное с кусочками шоколада',
		price: '380'
	},
	{
		img: 'img/hit-7.png',
		desc: 'Сливочно-клубничное с присыпкой из белого шоколада',
		price: '355'
	},
	{
		img: 'img/hit-8.png',
		desc: 'Сливочное крем-брюле с карамельной подливкой',
		price: '415'
	},
	{
		img: 'img/hit-9.png',
		desc: 'Сливочное с апельсиновым джемом и цитрусовой стружкой',
		price: '310'
	},
	{
		img: 'img/hit-10.png',
		desc: 'Сливочно-кофейное с кусочками шоколада',
		price: '380'
	},
	{
		img: 'img/hit-11.png',
		desc: 'Сливочно-клубничное с присыпкой из белого шоколада',
		price: '355'
	},
	{
		img: 'img/hit-12.png',
		desc: 'Сливочное крем-брюле с карамельной подливкой',
		price: '415'
	}
]

class Button {
	constructor(){}

	render(){
		const button = document.createElement('a');
		button.classList.add('btn-red');
		button.classList.add('popular-items__btn');
		button.innerHTML = 'Быстрый просмотр';
		return button;
	}
}

class IceCreamItem {
	constructor(item) {
		this.item = item;
	}

	render() {
		const iceCreamItem = document.createElement('article');
		iceCreamItem.className = 'popular-items__item';
		iceCreamItem.innerHTML = `
			<img class="popular-items__img" 
			src="${this.item.img}" 
			alt="${this.item.desc}" 
			width="267" height="267">
			<p class="popular-items__price popular-items__item-1__price">
			<span>${this.item.price} &#8381;</span>/кг
			</p>
			<h2 class="popular-items__description popular-items__item-1__description linkable">${this.item.desc}</h2>
		`;
		const button = new Button();
		iceCreamItem.append(button.render());
		return iceCreamItem;
	}
}

class Shop {
	constructor(item){
		this.item = item;
	}

	render() {
		const renderHook = document.querySelector('.main-content__popular-items');
		renderHook.append(this.item.render());
	}
}

data = document.title === 'Glassy' ? popularItems: allItems;

data.map(item => {
	const iceCr = new IceCreamItem(item);
	const realShop = new Shop(iceCr);
	realShop.render();
})