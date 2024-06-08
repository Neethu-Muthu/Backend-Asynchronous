function startStudying(callback) {
    setTimeout(() => {
      console.log("Student started studying Programming");
      callback();
    }, 1000);
  }
  
  function studyFrontend(callback) {
    setTimeout(() => {
      console.log("Studying Frontend");
      callback();
    }, 1000);
  }
  
  function studyHTML(callback) {
    setTimeout(() => {
      console.log("Studying HTML");
      callback();
    }, 1000);
  }
  
  function studyCSS(callback) {
    setTimeout(() => {
      console.log("Studying CSS");
      callback();
    }, 1000);
  }
  
  function studyTailwind(callback) {
    setTimeout(() => {
      console.log("Studying Tailwind");
      callback();
    }, 1000);
  }
  
  function studyFrameworks(callback) {
    setTimeout(() => {
      console.log("Studying Frameworks");
      callback();
    }, 1000);
  }
  
  function studyReact(callback) {
    setTimeout(() => {
      console.log("Studying React");
      callback();
    }, 1000);
  }
  
  function studyNextJS() {
    setTimeout(() => {
      console.log("Studying Next JS");
    }, 1000);
  }
  
  // Callback Hell
  startStudying(() => {
    studyFrontend(() => {
      studyHTML(() => {
        studyCSS(() => {
          studyTailwind(() => {
            studyFrameworks(() => {
              studyReact(() => {
                studyNextJS();
              });
            });
          });
        });
      });
    });
  });
  