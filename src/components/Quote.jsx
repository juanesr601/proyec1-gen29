
const Quote = ( { phrase } ) => {
console.log(phrase);
  return (
    <div>
      <p className="container__phrase">{phrase.phrase}</p>
    </div>
  )
}

export default Quote
