export function validateEmail(value: string): string {
  if (!value) {
    return "Email required";
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(value)) {
    return "Please enter a valide email";
  }
  return "";
}


export function validatePasswordForLogin(value: string): string {
  if (!value) {
    return "Password required";
  }

  return "";
}