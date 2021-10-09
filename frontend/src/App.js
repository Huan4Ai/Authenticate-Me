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
        <Route path='/questions' exact>
              {session? <CreateSingleQuestion /> : <LoginForm />}
        </Route>
        <Route path='/questions/:questionId' exact>
              {session? <ShowOneQuestion /> : <LoginForm />}
              {session? <EditSingleQuestion /> : null}
              {session? <DeleteSingleQuestion /> : null}
        </Route>
      </Switch>
      </div>
      )}
    </>
  );
}

export default App;
