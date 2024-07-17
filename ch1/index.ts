interface Todo {
    id: number;
    title: string;
    done: boolean;
  }
  
  let todoItems: Todo[]; // 맨 아래 todoItems = fetchTodoItems();를 보면 todoItems가 배열이라는 것을 알 수 있다.
  // 배열 속 요소가 객체이기 때문에 Object로 적어준 것.
  
  // api
  function fetchTodoItems(): Todo[]{
    const todos = [
      { id: 1, title: '안녕', done: false },
      { id: 2, title: '타입', done: false },
      { id: 3, title: '스크립트', done: false },
    ];
    return todos;
  }
  
  // crud methods
  function fetchTodos(): object[] {  // api 호출 후 변수 todos에 담아서 변환
    const todos = fetchTodoItems();
    return todos;
  }
  
  function addTodo(todo: Todo): void { // 할일 추가
    todoItems.push(todo);
  }
  
  function deleteTodo(index: number): void { // 특정 위치에 있는 할일 제거 처리
    todoItems.splice(index, 1);
  }
  
  function completeTodo(index: number, todo: Todo): void { // 특정 위치에 있는 할일 완료 처리
    todo.done = true; // 상단 fetchTodoItems()에서 id, title, done의 타입을 설정해주지 않았기 때문에 object타입의 todo.done을 찾을 수 없다고 에러가 나타나는 것.(해당 함수인 completeTodo()에서 todo를 object로 정의했기 때문에 object타입의 todo.done을 찾는 것이라고 보면 된다.)
    todoItems.splice(index, 1, todo);
  }
  
  // business logic
  function logFirstTodo(): object { // 할일 목록에서 첫 번째 출력
    return todoItems[0];
    // 반환 값이 todoItems배열의 객체이니까 object라고 타입 설정.
  }
  
  function showCompleted(): object[] { // 할일 목록에서 완료된 목록만 보여줌
    return todoItems.filter(item => item.done);
  }
  
  // TODO: 아래 함수의 내용을 채워보세요. 아래 함수는 `addTodo()` 함수를 이용하여 2개의 새 할 일을 추가하는 함수입니다.
  function addTwoTodoItems(): void {
    // addTodo() 함수를 두 번 호출하여 todoItems에 새 할 일이 2개 추가되어야 합니다.
    const item1 = {
      id: 4,
      title: '아이템 4',
      done: false
    }
    addTodo(item1);
    addTodo({
      id: 5, 
      title: '아이템 5',
      done: false
    });
  }
  
  // NOTE: 유틸 함수
  function log(): void {
    console.log(todoItems);
  }
  
  todoItems = fetchTodoItems();
  addTwoTodoItems();
  log();
