import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import LoginForm from "./components/LoginFormModal/LoginForm";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import ShowAllQuestions from "./components/QuestionsPage";
import ShowOneQuestion from "./components/SingleQuestion";
import CreateSingleQuestion from "./components/CreateQuestionPage";
import EditSingleQuestion from "./components/EditQuestionPage";
import DeleteSingleQuestion from "./components/DeleteQuestion";
import ShowAllAnswers from "./components/AnswersPage";
import CreateSingleAnswer from "./components/AddAnswerPage"

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const session = useSelector(state => state.session.user)

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);


  // if (!session) {
  //   return (
  //     <Redirect to="/" />
  //   )
  // }



  return (
    <>
      {isLoaded && (
      <div>
      {session && <Navigation isLoaded={isLoaded} />}
      <Switch>
        <Route path="/" exact>
          {session? <ShowAllQuestions /> : <LoginForm />}
        </Route>
        <Route path="/signup">
          <SignupFormPage />
        </Route>
        <Route path='/questions' exact>
          {session? <CreateSingleQuestion /> : <LoginForm />}
        </Route>
        <Route path='/questions/:questionId' exact>
          {session? <ShowOneQuestion /> : <LoginForm />}
          {session? <EditSingleQuestion /> : null}
          {session ? <DeleteSingleQuestion /> : null}
          {session ? <ShowAllAnswers /> : null}
        </Route>
        <Route path="/questions/:questionId/createAnswer">
          {session? <CreateSingleAnswer /> : null}
        </Route>
        <Route path="/answers/:answerId">

        </Route>
      </Switch>
      </div>
      )}
    </>
  );
}

export default App;

// Hi I am having trouble to display my signup page. I tried to separate the sign up function from the navigation bar and put it on the login page. But for some reason when I click the button, it took me to a blank page. The URL is correct but nothing shows up in the page. Any suggestions?
