function StudentProfile(props) {
  return (
    <>
      <div className="profile-container">
        <h2>
          Full Name: {props.fname} {props.lname}
        </h2>
        <h2>
          Name with initial: {props.lname.charAt().toLocaleUpperCase()}.{" "}
          {props.fname}
        </h2>
        <h2>Email : {props.email}</h2>
        <h3>Age: {props.age}</h3>
        <h3>status: {props.isPresent ? "Present" : "Absent"}</h3>
      </div>
    </>
  );
}

export default StudentProfile;
