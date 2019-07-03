import React from "react";

function FormRender(props) {
  return (
    <main>
      <form>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={props.firstName}
          onChange={props.handleChange}
        />
        <br />
        <br />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={props.lastName}
          onChange={props.handleChange}
        />
        <br />
        <br />
        <input
          type="text"
          name="age"
          placeholder="Age"
          value={props.age}
          onChange={props.handleChange}
        />
        <br />
        <label>
          <input
            type="checkbox"
            name="student"
            checked={props.student}
            onChange={props.handleChange}
          />
          Student
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={props.gender === "male"}
            onChange={props.handleChange}
          />
          Male
        </label>
        <br />
        <label>
          <input
            type="radio"
            value="female"
            name="gender"
            checked={props.gender === "female"}
            onChange={props.handleChange}
          />
          Female
        </label>
        <br />
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={props.email}
          onChange={props.handleChange}
        />
        <br />
        <br />
        <input
          type="text"
          name="school"
          placeholder="School"
          value={props.school}
          onChange={props.handleChange}
        />
        <hr />
        <h1>Entered Information:</h1>
        <h3>
          NAME:{props.firstName} {props.lastName}
        </h3>
        <p>I am {props.age} years old</p>
        <p>My school is {props.school}</p>
      </form>
    </main>
  );
}

export default FormRender;
