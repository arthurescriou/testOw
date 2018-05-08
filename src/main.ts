import ow from 'ow';

const unicorn = (input: any) => {
  ow(input, ow.string.minLength(5));

  // …
};

try {

  unicorn(3);
} catch (error) {
  console.log(error.message)
  //=> ArgumentError: Expected argument to be of type `string` but received type `number`
}

try {
  unicorn('yo');
} catch (error) {
  console.log(error.message)

  //=> ArgumentError: Expected string to have a minimum length of `5`, got `yo`
}

try{
	ow('fooo', ow.any(ow.string.maxLength(3), ow.number));
}catch (error) {
  console.log(error.message)
}

ow(3, ow.number)
