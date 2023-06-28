<h1>Habits</h1>

Habit creation project to help you in everyday life.
<hr>

### How to run the project:

**You can clone the project and run it locally following the steps below**

1. `git clone https://github.com/Caique017/Habits_mobile.git` to clone the project
2. `npm install` to install project dependencies
3. access your command prompt and run `expo start` and remembering you need to have expo installed on your machine, and on your device you will need to have `expo go`
4. done that you will read the qr CODE that will appear in your terminal and run the application
5. Always remembering that you also need to clone the <a href="https://github.com/Caique017/Habits_web">server</a> directory and leave it running in a separate terminal.
6. and finally you need to enter the src/lib/axios.ts directory and put your IP.

``` 
import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://192.168.0.106:3333'
});

```

<video src="./src/assets/Demonstração_Habits_mobile.mp4"></video>

<p> any questions send me a message via linkedin: <a href="https://www.linkedin.com/in/caique-nunes-624720202/" target="_blank">My profile</a></p>