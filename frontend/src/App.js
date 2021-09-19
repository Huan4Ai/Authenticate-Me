import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
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
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path='/questions'exact>
            <ShowAllQuestions />
            <CreateSingleQuestion />
          </Route>
          <Route path='/questions/:questionId'exact>
            <ShowOneQuestion />
            <EditSingleQuestion />
            <DeleteSingleQuestion />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
