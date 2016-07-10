$(document).ready(todoListTask);

function todoListTask(){
	var $buttonAddTask = $('#buttonAddTask');
	var $task = $('#task');

	var index = 0;
	var result = {
		totalTask: 0,
		numberCheckbox: 0
	};


	$task.trigger('focus');
	$task.on('keypress', enterThenGetTask);
	$buttonAddTask.on('click', getTask);
	$('.enter-task').on('sendTask', receiveTaskThenDisplay);

	

	function getTask(){
		var task = $task.val();
		if (task == ''){
			alert('Please fill a new task!');
		}
		$task.val('');
		$(this).trigger('sendTask',task);
		
	};

	function enterThenGetTask(event){
		var isEnter = (event.which == 13);
		if (isEnter) {
			$buttonAddTask.trigger('click');
		}
	};

	function receiveTaskThenDisplay(e, task){
		index++;
		$('ol').prepend("<li class = 'list-task'>"+"<input type = 'checkbox' id='box_"+index+"'></input>"+task+"<button id='buttonDelTask_"+index+"'> Del</button></li>");
		
		var $buttonDelTask = $("#buttonDelTask_"+index+"");
		var $boxCheck = $("#box_"+index+"");

		// result.totalTask++;
		// $(document).trigger('updateResult', [result]);
		$buttonDelTask.on('click', deleteTask);
		$boxCheck.on('change', handleCheckbox);
	};

	// var handleCheckbox(){
	// 	var isChecked = $(this).is(':checked');
	// 	if (isChecked) {
	// 		result.numberCheckbox++;
	// 		$(this).parent().addClass('done');
	// 	}else{
	// 		result.numberCheckbox--;
	// 		$(this).parent().removeClass('done');
	// 	}
	// 	$(".display-task").trigger('updateResult', [result]);
	// }
};