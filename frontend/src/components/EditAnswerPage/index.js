import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { updateAnswer } from "../../store/answer";

function EditSingleAnswer() {
  const dispatch = useDispatch();
  const { answerId } = useParams();


  return (
    <h1>hhh</h1>
  )
}

export default EditSingleAnswer;
