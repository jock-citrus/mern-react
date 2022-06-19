import { useCallback, useReducer } from "react";

const formReducer = (state, action) => {
  switch (action.type) {
    case 'INPUT_CHANGE':
      let formIsValid = true;
      for (const inputId in state.inputs) {
        if (!state.inputs[inputId]) {
          continue;
        }
        if (inputId === action.inputId) {
          formIsValid = formIsValid && action.isValid;
        } else {
          // console.log(inputId, state.inputs[inputId].isValid)
          formIsValid = formIsValid && state.inputs[inputId].isValid;
        }
      }
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.inputId]: { value: action.value, isValid: action.isValid }
        },
        isValid: formIsValid
      };

    case 'SET_DATA':
      return {
        inputs: action.inputs,
        isValid: action.isValid
      };
    default:
      return state;
  }
};

export const useForm = (initState) => {
  const [formState, dispatch] = useReducer(formReducer, initState);

  const inputHandler = useCallback((id, value, isValid) => {
    dispatch({
      type: 'INPUT_CHANGE',
      value: value,
      isValid: isValid,
      inputId: id
    });
  }, []);

  const setFormData = useCallback((state) => {
    dispatch({
      type: 'SET_DATA',
      inputs: state.inputs,
      isValid: state.isValid
    })
  }, [])

  return [formState, inputHandler, setFormData];
};