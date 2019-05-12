// переходим в редактор кода виджета
// тип: обложка

var gid = 1; // группа, в которую добавляется виджет
var user = API.users.get({ id: Args.uid })[0];
var isMember = API.groups.isMember({
	group_id: gid,
	user_id: Args.uid
});
var title = '';
var rows = []; 

if ( isMember ) { // что отображаем, если пользователь участник группы
	title = 'Мы рады Вам '+user.first_name+' '+user.last_name+'!';
	rows.push({ 
		"title": 'Спасибо, что подписались на нашу группу',
		"button": 'Задать вопрос',
		"button_url": 'https://vk.com/write-'+gid,
		//"descr": "Есть вопросы? Можете задать их!",
		"cover_id": '124165909_231012',
		"url": 'https://vk.com/write-'+gid,
	});
} else { // что отображаем, если пользователь не участник группы
	title = 'Мы рады Вам '+user.first_name+' '+user.last_name+'!';
	rows.push({ 
		"title": user.first_name+', спасибо, что зашли к нам.',
		"button": 'Подписаться',
		"button_url": 'https://vk.com/club'+gid,
		"descr": 'Подпишитесь на нашу группу',
		"cover_id": '124165909_231012',
		"url": 'https://vk.com/club'+gid,
	});
}

return {
	"title": title,
	"title_url": 'https://vk.com/club'+gid,
	"rows": rows
};


