const hrCall = () => {
  // API call
  setTimeout(() => {
    let err = Math.random() >= 0.1 ? false : true;
    if (!err) {
      cl(
        "The candidate is shortlisted for 1st tech Interview"
      );
      firstTechInterview();
    } else {
      snackBar(`The candidate is weak in Thoery`, "error");
    }
  }, 1000);
};

const firstTechInterview = () => {
  setTimeout(() => {
    let err = Math.random() >= 0.1 ? false : true;
    if (!err) {
      cl(
        "The candidate is shortlisted for 2nd tech Interview"
      );
      secondTechInterview();
    } else {
      snackBar(`The candidate is weak in Logcal Thinking`, "error");
    }
  }, 1000);
};
const secondTechInterview = () => {
  setTimeout(() => {
    let err = Math.random() >= 0.1 ? false : true;
    if (!err) {
      cl("The candidate is shortlisted for Manager Round");
      managerRound()
    } else {
      snackBar(`The candidate is not good enough in Angular`, "error");
    }
  }, 1000);
};
const managerRound = () => {
  setTimeout(() => {
    let err = Math.random() >= 0.1 ? false : true;
    if (!err) {
      snackBar("The candidate is selected for given profile !!!", 'success');
    } else {
      snackBar(`The candidate couldn't provide his working Details`, "error");
    }
  }, 1000);
};

hrCall()