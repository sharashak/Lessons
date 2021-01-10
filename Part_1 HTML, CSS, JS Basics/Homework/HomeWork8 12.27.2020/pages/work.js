let work = new BoardComponent({
    title: "My Work",
    items: [
        {
            title: "TO-DO", 
            items: [
                {
                    itemId: 1,
                    title: "Купить 4кг латуни",
                    description: "Чтобы забульбенить заготовку из жёлтого металла"
                },
                {
                    itemId: 2,
                    title: "Обработать медь",
                    description: "Сделать цилиндр d=25mm * h=130mm из красного металла"
                },
                {
                    itemId: 3,
                    title: "Нарезать десятизаходку",
                    description: "Нарезать миллиметровую десятизаходную резьбу в нашем медном цилиндре"
                }
            ],
        },
        {
            title: "Working on RN", 
            items: [
                {
                    itemId: 4,
                    title: "Сложить замки в коробки",
                    description: "Часть подготовки к переезду 1/3"
                },
                {
                    itemId: 5,
                    title: "Переставить шкафы",
                    description: "Часть подготовки к переезду 2/3"
                },
                {
                    itemId: 6,
                    title: "Придумать новое расположение товара на полках",
                    description: "Часть подготовки к переезду 3/3"
                }
            ],
        },
        {
            title: "Already done!", 
            items: [
                {
                    itemId: 7,
                    title: "Купить заготовки для ключей",
                    description: "AAA - 10 шт., UL042 - 10 шт., САМ-4 - 5 шт."
                },
                {
                    itemId: 8,
                    title: "Перепайка платы",
                    description: "Перепаять плату на JMA Saratoga, чтобы не наебнулось реле"
                },
                {
                    itemId: 9,
                    title: "Отписать брак",
                    description: "Отписать брак по ключам и по замкам на склад"
                }
            ],
        }
    ]
})