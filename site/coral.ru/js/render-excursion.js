class ExcursionInfo extends HTMLElement {
	constructor(country) {
		super();
		this.name = country.country_name;
		this.product = country.product;
		this.renderList();
	}

	renderList() {
		const product_list = this.product.filter(product => { if (product.list.length > 0) return product.list; });
		const product_items = product_list.map(obj => {
			if (obj.name === 'Корпоративные программы') {
				return `
				<ul class='product-type__list js-opened'>
				<button class='name-container'>
				<span>
						${obj.name}
					</span>
					<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M3 6L8 11L13 6" stroke="black" stroke-linejoin="round"/>
					</svg>
					</button>
				<div>
				${obj.list.map(list_item => {
					return `
						<li class='product-type__item'>
							<a href='${list_item.pdf}' target="_blank">
								${list_item.label}
								<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M7.95898 3V9.5625M7.95898 9.5625L10.5906 7.0625M7.95898 9.5625L5.32741 7.0625M11.38 11.75H4.53793M2.95898 10.1875V11C2.95898 12.1046 3.85441 13 4.95898 13H10.959C12.0636 13 12.959 12.1046 12.959 11V10.1875" stroke="black" stroke-width="0.8"/>
								</svg>
							</a>
						</li>
					`;
				}).join('')
					}
				</div>
			</ul>`;
			} else {
				return `
				<ul class='product-type__list'>
				<button class='name-container'>
				<span>
						${obj.name}
					</span>
					<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M3 6L8 11L13 6" stroke="black" stroke-linejoin="round"/>
					</svg>
				</button>
				<div>
				${obj.list.map(list_item => {
					return `<li class='product-type__item'><a href='${list_item}' target="_blank">Название</a></li>`;
				}).join('')
					}
				</div>
			</ul>`;
			}
		}).join('');
		return product_items;
	}

	listSwitcher() {
		this.switch_buttons = this.querySelectorAll('.name-container');
		this.switched_list = document.querySelectorAll('.product-type__list');
		this.switch_buttons.forEach(btn => btn.addEventListener('click', (e) => {
			this.switched_list.forEach(element => element.classList.remove('js-opened'));
			e.currentTarget.closest('.product-type__list').classList.add('js-opened');
		}));
	}

	render() {
		this.innerHTML = `
			<h4>${this.name}</h4>
			<ul class='product-type'>
				${this.renderList()}
			</ul>
		`;
		this.listSwitcher();
	}

	connectedCallback() {
		if (!this.rendered) {
			this.render();
			this.rendered = true;
		}
	}
}
customElements.define("excursion-info", ExcursionInfo);
