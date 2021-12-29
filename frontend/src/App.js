import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginForm from "./components/LoginFormModal/LoginForm";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import ShowAllQuestions from "./components/QuestionsPage";
import ShowAllAnswers from "./components/AnswersPage";
import EditSingleAnswer from "./components/EditAnswerPage"
import DeleteAnswer from "./components/DeleteAnswerPage";

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
              {session ? <ShowAllQuestions /> : <LoginForm />}
            </Route>
            <Route path='/questions/:questionId' exact>
              {session ? <ShowAllAnswers /> : <LoginForm />}
            </Route>
            <Route path="/answers/:answerId">
              {session ? <EditSingleAnswer /> : <LoginForm />}
              {session ? <DeleteAnswer /> : <LoginForm />}
            </Route>
          </Switch>
        </div>
      )}
    </>
  );
}

export default App;
