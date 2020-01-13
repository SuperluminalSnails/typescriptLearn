enum Type {
  Strong,
  Week
}

class Java {
  helloJava() {
    console.log('Hello Java');
  }
}

class JavaScript {
  helloJavaScript() {
    console.log('Hello JavaScript');
  }
}

function getLanguage(type: Type) {
  let lang = type === Type.Strong ? new Java() : new JavaScript();
  if ((lang as Java).helloJava) {
    (lang as Java).helloJava();
  } else {
    (lang as JavaScript).helloJavaScript();
  }
  return lang;
}
