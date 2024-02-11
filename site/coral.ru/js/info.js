const SETTINGS = [
	{
		country_name: 'Турция',
		capital: 'Анкара',
		product: [
			{
				name: 'Экскурсионные туры',
				list: [],
			},
			{
				name: 'Достопримечательности',
				list: [],
			},
			{
				name: 'Экскурсии',
				list: [
					{
						label: 'Экскурсии по красотам Турции',
						url: 'https://www.coral.ru/main/turkey/tyrkeylist/#tyrkeylist'
					},
					{
						label: 'Экскурсии из Антальи',
						url: 'https://www.coral.ru/main/turkey/antalya/antalyalist/'
					},
					{
						label: 'Экскурсии из Бодрума',
						url: 'https://www.coral.ru/main/turkey/bodrum/bodrumlist/'
					}
				]
			},
			{
				name: 'Корпоративные программы',
				list: [
					{
						label: 'Стамбул и Каппадокия',
						pdf: 'https://cdn.coral.ru/content/img/ist_cappadocia.pdf',
					},
					{
						label: 'Квест-путешествие по Турции',
						pdf: 'https://cdn.coral.ru/content/img/turkeyquestjourney.pdf',
					}
				]
			}
		]
	},
	{
		country_name: 'Азербайджан',
		capital: 'Баку',
		product: [
			{
				name: 'Экскурсионные туры',
				list: [
					{
						label: 'Экскурсионный тур в Азербайджан',
						url: 'https://www.coral.ru/main/azerbaijan/ekskursionnie-turi-v-azerbaydzhan/'
					}
				],
			},
			{
				name: 'Достопримечательности',
				list: [],
			},
			{
				name: 'Экскурсии',
				list: []
			},
			{
				name: 'Корпоративные программы',
				list: [
					{
						label: 'Страна Огней, Баку и окрестности',
						pdf: 'https://cdn.coral.ru/content/img/azerbaijan.pdf'
					}
				]
			}
		]
	},
	{
		country_name: 'Армения',
		capital: 'Ереван',
		product: [
			{
				name: 'Экскурсионные туры',
				list: [
					{
						label: 'Экскурсионный тур в Армению',
						url: 'https://www.coral.ru/armeniya/ekskursionnie-turi-v-armeniyu/'
					}
				],
			},
			{
				name: 'Достопримечательности',
				list: [
					{
						label: 'Достопримечательности Армении',
						url: 'https://www.coral.ru/armeniya/attractionarmenia/'
					}
				]
			},
			{
				name: 'Экскурсии',
				list: []
			},
			{
				name: 'Корпоративные программы',
				list: [
					{
						label: 'Самое главное за 5 дней',
						pdf: 'https://cdn.coral.ru/content/img/armenia.pdf'
					}
				]
			}
		]
	},
	{
		country_name: 'Бахрейн',
		capital: 'Манама',
		product: [
			{
				name: 'Экскурсионные туры',
				list: []
			},
			{
				name: 'Достопримечательности',
				list: [
					{
						label: 'Отдых в Бахрейне',
						url: 'https://www.coral.ru/main/bahrein/otdyh-v-bahrein/'
					}
				]
			},
			{
				name: 'Экскурсии',
				list: []
			},
			{
				name: 'Корпоративные программы',
				list: []
			}
		]
	},
	{
		country_name: 'Болгария',
		capital: 'София',
		product: [
			{
				name: 'Экскурсионные туры',
				list: [
					{
						label: 'Экскурсия №1',
						url: 'https://www.coral.ru/main/bulgaria/bulgarialist/'
					}
				]
			},
			{
				name: 'Достопримечательности',
				list: []
			},
			{
				name: 'Экскурсии',
				list: [
					{
						label: 'Экскурсия по Болгарии',
						url: 'https://www.coral.ru/main/bulgaria/bulgarialist/'
					}
				]
			},
			{
				name: 'Корпоративные программы',
				list: []
			}
		]
	},
	{
		country_name: 'Беларусь',
		capital: 'Минск',
		product: [
			{
				name: 'Экскурсионные туры',
				list: [
					{
						label: 'Экскурсия в Беларусь',
						url: 'https://www.coral.ru/belarus/ekskursionnie-turi-v-belarus/'
					}
				]
			},
			{
				name: 'Достопримечательности',
				list: [
					{
						label: 'Достопримечательности Белорусии',
						url: 'https://www.coral.ru/belarus/dostoprimechatelnosti-belarusi/'
					}

				]
			},
			{
				name: 'Экскурсии',
				list: []
			},
			{
				name: 'Корпоративные программы',
				list: []
			}
		]
	},
	{
		country_name: 'Вьетнам',
		capital: 'Ханой',
		product: [
			{
				name: 'Экскурсионные туры',
				list: []
			},
			{
				name: 'Достопримечательности',
				list: []
			},
			{
				name: 'Экскурсии',
				list: [
					{
						label: "Экскурсия во Вьетнам",
						url: 'https://www.coral.ru/main/vietnam/exvietnam/'
					}
				]
			},
			{
				name: 'Корпоративные программы',
				list: []
			}
		]
	},
	{
		country_name: 'Грузия',
		capital: 'Тбилиси',
		product: [
			{
				name: 'Экскурсионные туры',
				list: [
					{
						label: 'Тур в Грузию',
						url: 'https://www.coral.ru/georgia/ekskursionnye-tury-v-gruziyu/'
					}
				]
			},
			{
				name: 'Достопримечательности',
				list: [
					{
						label: 'Достопримечательности в Грузии',
						url: 'https://www.coral.ru/georgia/dostoprimechatelynosti-gruzii/'
					}
				]
			},
			{
				name: 'Экскурсии',
				list: []
			},
			{
				name: 'Корпоративные программы',
				list: []
			}
		]
	},
	{
		country_name: 'Доминиканская Республика',
		capital: 'Санто-Доминго',
		product: [
			{
				name: 'Экскурсионные туры',
				list: []
			},
			{
				name: 'Достопримечательности',
				list: []
			},
			{
				name: 'Экскурсии',
				list: [
					{
						label: 'Экскурсия в Доминикану',
						url: 'https://www.coral.ru/main/dominikana/exdominikana/'
					}
				]
			},
			{
				name: 'Корпоративные программы',
				list: []
			}
		]
	},
	{
		country_name: 'Египет',
		capital: 'Каир',
		product: [
			{
				name: 'Экскурсионные туры',
				list: []
			},
			{
				name: 'Достопримечательности',
				list: []
			},
			{
				name: 'Экскурсии',
				list: [
					{
						label: 'Экскурсия в Египет',
						url: 'https://www.coral.ru/main/egypt/egyptexcurcion/',
					}
				]
			},
			{
				name: 'Корпоративные программы',
				list: []
			}
		]
	},
	{
		country_name: 'Индонезия',
		capital: 'Джакарта',
		product: [
			{
				name: 'Экскурсионные туры',
				list: []
			},
			{
				name: 'Достопримечательности',
				list: []
			},
			{
				name: 'Экскурсии',
				list: [
					{
						label: 'Экскурсия на Бали',
						url: 'https://www.coral.ru/main/bali/exbali/'
					}
				]
			},
			{
				name: 'Корпоративные программы',
				list: []
			}
		]
	},
	{
		country_name: 'Италия',
		capital: 'Рим',
		product: [
			{
				name: 'Экскурсионные туры',
				list: [
					{
						label: 'Тур в Италию',
						url: 'https://www.coral.ru/main/italia/round-trips/'
					}
				]
			},
			{
				name: 'Достопримечательности',
				list: []
			},
			{
				name: 'Экскурсии',
				list: [
					{
						label: 'Экскурсия в Италии',
						url: 'https://www.coral.ru/italia/ekskursii-v-italii/'
					}
				]
			},
			{
				name: 'Корпоративные программы',
				list: []
			}
		]
	},
	{
		country_name: 'Казахстан',
		capital: 'Астана',
		product: [
			{
				name: 'Экскурсионные туры',
				list: [
					{
						label: 'Тур в Казахстан',
						url: 'https://www.coral.ru/kazahstan/ekskursionnye-tury-v-kazahstan/'
					}
				]
			},
			{
				name: 'Достопримечательности',
				list: []
			},
			{
				name: 'Экскурсии',
				list: []
			},
			{
				name: 'Корпоративные программы',
				list: [
					{
						label: 'Казахстан, Алма-Ата',
						pdf: 'https://cdn.coral.ru/content/img/kazakhstan.pdf'
					}
				]
			}
		]
	},
	{
		country_name: 'Катар',
		capital: 'Доха',
		product: [
			{
				name: 'Экскурсионные туры',
				list: []
			},
			{
				name: 'Достопримечательности',
				list: []
			},
			{
				name: 'Экскурсии',
				list: [
					{
						label: 'Экскурсия в Катаре',
						url: 'https://www.coral.ru/main/qatar/lists-qatar/'
					}
				]
			},
			{
				name: 'Корпоративные программы',
				list: []
			}
		]
	},
	{
		country_name: 'Кипр',
		capital: 'Доха',
		product: [
			{
				name: 'Экскурсионные туры',
				list: []
			},
			{
				name: 'Достопримечательности',
				list: []
			},
			{
				name: 'Экскурсии',
				list: [
					{
						label: 'Экскурсия на Кипре',
						url: 'https://www.coral.ru/cyprus/ekskursii-na-kipre/'
					}
				]
			},
			{
				name: 'Корпоративные программы',
				list: []
			}
		]
	},
	{
		country_name: 'Маврикий',
		capital: 'Порт-Луи',
		product: [
			{
				name: 'Экскурсионные туры',
				list: []
			},
			{
				name: 'Достопримечательности',
				list: []
			},
			{
				name: 'Экскурсии',
				list: [
					{
						label: 'Экскурсия на Маврикий',
						url: 'https://www.coral.ru/main/mauritius/mauritiuslist/'
					}
				]
			},
			{
				name: 'Корпоративные программы',
				list: []
			}
		]
	},
	{
		country_name: 'Марокко',
		capital: 'Рабат',
		product: [
			{
				name: 'Экскурсионные туры',
				list: []
			},
			{
				name: 'Достопримечательности',
				list: []
			},
			{
				name: 'Экскурсии',
				list: [
					{
						label: 'Экскурсия в Марокко',
						url: 'https://www.coral.ru/main/morocco/moroccolist/'
					}
				]
			},
			{
				name: 'Корпоративные программы',
				list: [
					{
						label: 'Все Марокко - программа-путешествие',
						pdf: 'https://cdn.coral.ru/content/img/morocco.pdf'
					}
				]
			}
		]
	},
	{
		country_name: 'Мексика',
		capital: 'Мехико',
		product: [
			{
				name: 'Экскурсионные туры',
				list: []
			},
			{
				name: 'Достопримечательности',
				list: []
			},
			{
				name: 'Экскурсии',
				list: [
					{
						label: 'Экскурсия в Мексике',
						url: 'https://www.coral.ru/mexico/mexicolist/'
					}
				]
			},
			{
				name: 'Корпоративные программы',
				list: []
			}
		]
	},
	{
		country_name: 'ОАЭ',
		capital: 'Абу-Даби',
		product: [
			{
				name: 'Экскурсионные туры',
				list: [
					{
						label: 'Тур в ОАЭ',
						url: 'https://www.coral.ru/uae-excursions-weektour/'
					}
				]
			},
			{
				name: 'Достопримечательности',
				list: []
			},
			{
				name: 'Экскурсии',
				list: [
					{
						label: 'Экскурсии и парки развлечений в ОАЭ',
						url: 'https://www.coral.ru/main/uae/uaeexcursion/'
					}
				]
			},
			{
				name: 'Корпоративные программы',
				list: []
			}
		]
	},
	{
		country_name: 'Россия',
		capital: 'Москва',
		product: [
			{
				name: 'Экскурсионные туры',
				list: [
					{
						label: 'Туры по России',
						url: 'https://www.coral.ru/concepts/ekskursionnie-turi/ekskursionnie-turi-po-rossii/'
					}
				]
			},
			{
				name: 'Достопримечательности',
				list: []
			},
			{
				name: 'Экскурсии',
				list: []
			},
			{
				name: 'Корпоративные программы',
				list: [
					{
						label: 'Алтай - горы и озера',
						url: 'https://cdn.coral.ru/content/img/altai.pdf',
					},
					{
						label: 'Калининград - знакомство',
						url: 'https://cdn.coral.ru/content/img/kaliningrad.pdf',
					},
					{
						label: 'Горный край - Дагестан',
						url: 'https://cdn.coral.ru/content/img/dagestan.pdf'
					},
				]
			}
		]
	},
	{
		country_name: 'Сейшельские острова',
		capital_cords: [-4.62001, 55.455],
		product: [
			{
				name: 'Экскурсионные туры',
				list: []
			},
			{
				name: 'Достопримечательности',
				list: []
			},
			{
				name: 'Экскурсии',
				list: [
					{
						label: 'Экскурсии на Сейшелах',
						url: 'https://www.coral.ru/main/seychelles/exseychelles/'
					}
				]
			},
			{
				name: 'Корпоративные программы',
				list: []
			}
		]
	},
	{
		country_name: 'Таиланд',
		capital: 'Бангкок',
		product: [
			{
				name: 'Экскурсионные туры',
				list: []
			},
			{
				name: 'Достопримечательности',
				list: []
			},
			{
				name: 'Экскурсии',
				list: [
					{
						label: 'Экскурсии в Тайланде',
						url: 'https://www.coral.ru/main/thailand/exthai/',
					},
					{
						label: 'Экскурсии на Пхукете',
						url: 'https://www.coral.ru/main/regthailand/phuket/ekskursii-na-phukete/',
					},
					{
						label: 'Экскурсии в Паттайе',
						url: 'https://www.coral.ru/main/regthailand/pattaya/ekskursii-v-pattaje/'
					}
				]
			},
			{
				name: 'Корпоративные программы',
				list: []
			}
		]
	},
	{
		country_name: 'Танзания',
		capital: 'Бангкок',
		product: [
			{
				name: 'Экскурсионные туры',
				list: []
			},
			{
				name: 'Достопримечательности',
				list: []
			},
			{
				name: 'Экскурсии',
				list: [
					{
						label: 'Экскурсии на Занзибаре',
						url: 'https://www.coral.ru/main/tanzania/zanzibarlist/'
					},
				]
			},
			{
				name: 'Корпоративные программы',
				list: []
			}
		]
	},
	{
		country_name: 'Тунис',
		capital: 'Тунис',
		product: [
			{
				name: 'Экскурсионные туры',
				list: []
			},
			{
				name: 'Достопримечательности',
				list: []
			},
			{
				name: 'Экскурсии',
				list: [
					{
						label: 'Экскурсии в Тунисе',
						url: 'https://www.coral.ru/main/tunis/tunisexcurcion/'
					},
				]
			},
			{
				name: 'Корпоративные программы',
				list: []
			}
		]
	},
	{
		country_name: 'Узбекистан',
		capital: 'Ташкент',
		product: [
			{
				name: 'Экскурсионные туры',
				list: [
					{
						label: 'Тур в Узбекистан',
						url: 'https://www.coral.ru/uzbekistan/ekskursionnye-tury-v-uzbekistan/'
					}
				]
			},
			{
				name: 'Достопримечательности',
				list: []
			},
			{
				name: 'Экскурсии',
				list: []
			},
			{
				name: 'Корпоративные программы',
				list: [
					{
						label: 'Узбекистан, Бухара',
						pdf: 'https://cdn.coral.ru/content/img/uzbekistan.pdf'
					}
				]
			}
		]
	},
	{
		country_name: 'Черногория',
		capital: 'Подгорица',
		product: [
			{
				name: 'Экскурсионные туры',
				list: []
			},
			{
				name: 'Достопримечательности',
				list: []
			},
			{
				name: 'Экскурсии',
				list: [
					{
						label: 'Экскурсии в Черногории',
						url: 'https://www.coral.ru/main/chernogoriya/montenegrolist/'
					}
				]
			},
			{
				name: 'Корпоративные программы',
				list: []
			}
		]
	},
	{
		country_name: 'Шри-Ланка',
		capital: 'Шри-Джаяварденепура-Котте',
		product: [
			{
				name: 'Экскурсионные туры',
				list: []
			},
			{
				name: 'Достопримечательности',
				list: []
			},
			{
				name: 'Экскурсии',
				list: [
					{
						label: 'Экскурсии на Шри-Ланке',
						url: 'https://www.coral.ru/main/srilanka/exsrilanka/'
					}
				]
			},
			{
				name: 'Корпоративные программы',
				list: []
			}
		]
	},
	{
		country_name: 'Куба',
		capital: 'Гавана',
		product: [
			{
				name: 'Экскурсионные туры',
				list: []
			},
			{
				name: 'Достопримечательности',
				list: []
			},
			{
				name: 'Экскурсии',
				list: [
					{
						label: 'Экскурсии на Кубе',
						url: 'https://www.coral.ru/main/cuba/cubalists/'
					}

				]
			},
			{
				name: 'Корпоративные программы',
				list: []
			}
		]
	},
	{
		country_name: 'Китайская Народная Республика',
		capital: 'Пекин',
		product: [
			{
				name: 'Экскурсионные туры',
				list: []
			},
			{
				name: 'Достопримечательности',
				list: []
			},
			{
				name: 'Экскурсии',
				list: []
			},
			{
				name: 'Корпоративные программы',
				list: [
					{
						label: 'Пекин-Шанхай',
						pdf: 'https://cdn.coral.ru/content/img/china.pdf',
					},
					{
						label: 'Декорации Аватара',
						pdf: 'https://cdn.coral.ru/content/img/china2.pdf'
					}
				]
			}
		]
	},
	{
		country_name: 'Кыргыстан',
		capital: 'Бишкек',
		product: [
			{
				name: 'Экскурсионные туры',
				list: []
			},
			{
				name: 'Достопримечательности',
				list: []
			},
			{
				name: 'Экскурсии',
				list: []
			},
			{
				name: 'Корпоративные программы',
				list: [
					{
						label: 'Кыргыстан, Памиро-Алай',
						pdf: 'https://cdn.coral.ru/content/img/china.pdf',
					}
				]
			}
		]
	},
	{
		country_name: 'Индия',
		capital: 'Нью-Дели',
		product: [
			{
				name: 'Экскурсионные туры',
				list: []
			},
			{
				name: 'Достопримечательности',
				list: []
			},
			{
				name: 'Экскурсии',
				list: [
					{
						label: 'Золотой Треугольник + Гоа',
						url: 'https://www.coral.ru/main/india/indiaexcursionpr/goldentrianglemini/'
					},
					{
						label: 'Тур Тадж Махал + Гоа',
						url: 'https://www.coral.ru/main/india/indiaexcursionpr/tajmahaltour/'
					},
					{
						label: 'Мумбай + Гоа',
						url: 'https://www.coral.ru/main/india/indiaexcursionpr/tourinmumbai3/'
					}
				]
			},
			{
				name: 'Корпоративные программы',
				list: [
					{
						label: 'Индия - 5 городов',
						pdf: 'https://cdn.coral.ru/content/img/india01022024.pdf',
					}
				]
			}
		]
	}
];

