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
					'https://www.coral.ru/main/turkey/tyrkeylist/#tyrkeylist',
					'https://www.coral.ru/main/turkey/antalya/antalyalist/',
					'https://www.coral.ru/main/turkey/bodrum/bodrumlist/',
					'https://www.coral.ru/main/turkey/marmarisfethiyelist/'
				]
			},
			{
				name: 'Корпоративные программы',
				list: [
					{
						label: 'Исторические сокровища',
						pdf: 'https://cdn.coral.ru/content/img/ist_cappadocia.pdf',
					},
					{
						label: 'По Турции с караваном',
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
					'https://www.coral.ru/main/azerbaijan/ekskursionnie-turi-v-azerbaydzhan/'
				],
			},
			{
				name: 'Достопримечательности',
				list: [],
			},
			{
				name: 'Экскурсии',
				list: [
					'https://www.coral.ru/main/turkey/tyrkeylist/#tyrkeylist',
					'https://www.coral.ru/main/turkey/antalya/antalyalist/',
					'https://www.coral.ru/main/turkey/bodrum/bodrumlist/',
					'https://www.coral.ru/main/turkey/marmarisfethiyelist/'
				]
			},
			{
				name: 'Корпоративные программы',
				list: [
					'https://cdn.coral.ru/content/img/ist_cappadocia.pdf',
					'https://cdn.coral.ru/content/img/turkeyquestjourney.pdf'
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
					'https://www.coral.ru/armeniya/ekskursionnie-turi-v-armeniyu/'
				],
			},
			{
				name: 'Достопримечательности',
				list: [
					'https://www.coral.ru/armeniya/attractionarmenia/'
				]
			},
			{
				name: 'Экскурсии',
				list: []
			},
			{
				name: 'Корпоративные программы',
				list: [
					'https://cdn.coral.ru/content/img/armenia.pdf'
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
					'https://www.coral.ru/main/bahrein/otdyh-v-bahrein/'
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
					'https://www.coral.ru/main/bulgaria/bulgarialist/'
				]
			},
			{
				name: 'Достопримечательности',
				list: []
			},
			{
				name: 'Экскурсии',
				list: [
					'https://www.coral.ru/main/bulgaria/bulgarialist/'
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
					'https://www.coral.ru/belarus/ekskursionnie-turi-v-belarus/'
				]
			},
			{
				name: 'Достопримечательности',
				list: [
					'https://www.coral.ru/belarus/dostoprimechatelnosti-belarusi/'
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
					'https://www.coral.ru/main/vietnam/exvietnam/'
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
					'https://www.coral.ru/georgia/ekskursionnye-tury-v-gruziyu/'
				]
			},
			{
				name: 'Достопримечательности',
				list: [
					'https://www.coral.ru/georgia/dostoprimechatelynosti-gruzii/'
				]
			},
			{
				name: 'Экскурсии',
				list: [
					'https://www.coral.ru/main/greece/greecelist/'
				]
			},
			{
				name: 'Корпоративные программы',
				list: []
			}
		]
	},
	{
		country_name: 'Доминикана',
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
					'https://www.coral.ru/main/dominikana/exdominikana/'
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
					'https://www.coral.ru/main/egypt/egyptexcurcion/',
					'https://www.coral.ru/main/egypt/sharm/sharmelsheikhlist/',
					'https://www.coral.ru/main/egypt/hurghada/hurghadalist/'
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
					'https://www.coral.ru/main/bali/exbali/'
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
					'https://www.coral.ru/main/italia/round-trips/'
				]
			},
			{
				name: 'Достопримечательности',
				list: []
			},
			{
				name: 'Экскурсии',
				list: [
					'https://www.coral.ru/italia/ekskursii-v-italii/'
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
					'https://www.coral.ru/kazahstan/ekskursionnye-tury-v-kazahstan/'
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
					'https://www.coral.ru/main/qatar/lists-qatar/'
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
				list: []
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
					'https://www.coral.ru/main/qatar/lists-qatar/'
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
					'https://www.coral.ru/cyprus/ekskursii-na-kipre/'
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
					'https://www.coral.ru/cyprus/ekskursii-na-kipre/'
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
					'https://www.coral.ru/main/mauritius/mauritiuslist/'
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
					'https://www.coral.ru/main/morocco/moroccolist/'
				]
			},
			{
				name: 'Корпоративные программы',
				list: [
					'https://cdn.coral.ru/content/img/morocco.pdf'
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
					'https://www.coral.ru/mexico/mexicolist/'
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
					'https://www.coral.ru/uae-lists-weektour/'
				]
			},
			{
				name: 'Достопримечательности',
				list: []
			},
			{
				name: 'Экскурсии',
				list: [
					'https://www.coral.ru/main/uae/uaelist/'
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
					'https://www.coral.ru/concepts/ekskursionnie-turi/ekskursionnie-turi-po-rossii/'
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
					'https://cdn.coral.ru/content/img/altai.pdf',
					'https://cdn.coral.ru/content/img/kaliningrad.pdf',
					'https://cdn.coral.ru/content/img/dagestan.pdf'
				]
			}
		]
	},
	{
		country_name: 'Сейшельские острова',
		capital: 'Виктория',
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
					'https://www.coral.ru/main/seychelles/exseychelles/'
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
					'https://www.coral.ru/main/thailand/exthai/',
					'https://www.coral.ru/main/regthailand/phuket/ekskursii-na-phukete/',
					'https://www.coral.ru/main/regthailand/pattaya/ekskursii-v-pattaje/'
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
					'https://www.coral.ru/main/tanzania/zanzibarlist/'
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
					'https://www.coral.ru/main/tunis/tunisexcurcion/'
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
					'https://www.coral.ru/uzbekistan/ekskursionnye-tury-v-uzbekistan/'
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
					'https://cdn.coral.ru/content/img/uzbekistan.pdf'
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
					'https://www.coral.ru/main/chernogoriya/montenegrolist/'
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
					'https://www.coral.ru/main/srilanka/exsrilanka/'
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
					'https://www.coral.ru/main/cuba/cubalists/'
				]
			},
			{
				name: 'Корпоративные программы',
				list: []
			}
		]
	},
	{
		country_name: 'Китай',
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
				list: [
					'https://www.coral.ru/main/cuba/cubalists/'
				]
			},
			{
				name: 'Корпоративные программы',
				list: [
					'https://cdn.coral.ru/content/img/china.pdf',
					'https://cdn.coral.ru/content/img/china2.pdf'
				]
			}
		]
	}
];

