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
        <h4>Status: {props.isPresent ? "Present" : "Absent"}</h4>
      </div>
    </>
  );
}

export default StudentProfile;
