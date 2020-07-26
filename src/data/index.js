import { generate } from 'shortid';

const data = [
	{
		id: generate(),
		title: 'Paulus in silva ambulat',
		completed: false,
	},
	{
		id: generate(),
		title: 'Mulus lente ambulat et silvam spectat.',
		completed: true,
	},
	{
		id: generate(),
		title: 'Obscuram per silvam ad monasterium veniunt.',
		completed: false,
	},
	{
		id: generate(),
		title: 'Augustinus de Lucia adhuc cogitat',
		completed: true,
	},
];

export default data;
