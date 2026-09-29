// TODO 4: Return an object with an error message for every invalid field.
//   An EMPTY object means the form is valid.
//   Rules:
//   - fullName:  required
//   - studentId: required, must match /^\d{4}-\d{4}$/  (e.g. 2024-0123)
//   - email:     required, must match /^\S+@\S+\.\S+$/
//   - course:    required
//   - yearLevel: required
//   Example:
//     if (!values.fullName.trim()) errors.fullName = "Enter the student's full name.";
export function validate(values) {
  const errors = {};
  // TODO 4
  return errors;
}
