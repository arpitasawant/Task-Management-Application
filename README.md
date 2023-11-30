In the project directory, you can run:


### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

# `Task Management Application`

#### `Add Form Component:`
Description: A form component for adding new tasks.
How it works: It uses React's state (useState) to manage input values (task name, description, priority). On form submission, it calls a function from the TaskContext to add a new task.

![Screenshot (139)](https://github.com/arpitasawant/Task-Management-Application/assets/97539573/842b5252-ce56-4b91-bc5f-6b1fe249ced7)



![Screenshot (148)](https://github.com/arpitasawant/Task-Management-Application/assets/97539573/3bfd2daa-60f7-4706-a252-15857878ab45)

#### `Task List Component:`

Description: Displays a list of tasks with options to toggle completion status, delete tasks, and navigate to the edit form.
How it works: It uses the TaskContext to access the task list, and React's state (useState) to manage the completion status of tasks. It maps through the tasks and renders them with corresponding options.

![Screenshot (146)](https://github.com/arpitasawant/Task-Management-Application/assets/97539573/c5ee8cdb-c063-4ec0-8f34-61fac2c0ca06)

#### `Edit Form Component:`

Description: A form component for editing existing tasks.
How it works: It uses React's state (useState and useEffect) to manage input values and fetch the details of the task being edited. On form submission, it calls a function from the TaskContext to edit the task.


![Screenshot (153)](https://github.com/arpitasawant/Task-Management-Application/assets/97539573/55ee38a2-fb44-40a9-b5c0-0e97f22e0074)

![Screenshot (154)](https://github.com/arpitasawant/Task-Management-Application/assets/97539573/2a38152c-7d84-42ed-a903-266534a9b8bb)

![Screenshot (155)](https://github.com/arpitasawant/Task-Management-Application/assets/97539573/32ad6c19-b9fa-4f96-810a-63dc59bd8fc1)



#### `Delete Operation:`


Description: Manages the deletion of tasks in the TaskList component.
How it works:
Rendering: The TaskList component maps through the tasks and renders a delete button for each task along with other task details.
Deletion Trigger: When a user clicks the delete button, it triggers the deleteTask function from the TaskContext, passing the taskId as an argument.

![Screenshot (146)](https://github.com/arpitasawant/Task-Management-Application/assets/97539573/23b33e1c-cc22-4d37-9f1c-e9712f0c08fe)

![Screenshot (144)](https://github.com/arpitasawant/Task-Management-Application/assets/97539573/cfb9f301-0081-4202-b3dc-6c34fcbd9778)
