import { useHistory } from "react-router-dom";
import { addQuote } from "../lib/api"; 
import QuoteForm from "../components/quotes/QuoteForm";
import useHttp from "../hooks/use-http";
import { useEffect } from "react";


const NewQuote = () => {
  const {sendRequest,status}=useHttp (addQuote);
  const history = useHistory();
  useEffect(()=>{
    if(status==='completed'){
      history.push('/quotes');
    }
  },[status,history])
  const addQuoteHandler = (quoteData) => {
   sendRequest(quoteData)

    history.push('/quotes');   ///  it pushes the user to quotes page whn a add quote form is filled
  };

  return <QuoteForm isLoading={status==='pending'} onAddQuote={addQuoteHandler} />;
};

export default NewQuote;
