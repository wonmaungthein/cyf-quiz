
# Installation

1. Follow [the instructions](https://codeyourfuture.github.io/syllabus-master/others/making-a-pull-request.html#how-to-fork-a-github-repo) to fork & clone the GitHub repo
2. Install the dependencies by running `npm install`
3. Launch server using `npm start`
4. It should automatically open http://localhost:3000/

# Exercises

You don't have to do all these exercises, just get started on them and see how many you manage. 

1. Clicking on an answer should trigger the callback function. 

2. The container component should use state to record the answers (whether they are true or false)

3. The app should fetch questions from the open trivia database API

4. Follow this link to the [Trivia API](https://opentdb.com/api_config.php). Play around with the number of questions, category and difficulty. Click `Generate API URL`, use this URL in your `fetch` function and see how your app changes.

5. Create a score component that shows how many questions you got right.

6. (optional) Try changing the setting to 'Multiple Choice' rather than true or false. We are now re-using the `<button>` element in `src/components/Question.js` a lot, so we should extract it to be it's own separate component

7. Each question should give an indication whether it was answered correctly or incorrectly - dynamically add a className to the button component after it is clicked. Then you can for example change the background-color of the component in the CSS file.

8. (optional) Create a button at the bottom of the page that says `New Questions`. When clicking it should `fetch` more questions.

9. Use PropTypes for all of the props in your Question component