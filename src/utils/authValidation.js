export const validateRegister = (form) => {

    const errors = {};

    if (!form.full_name.trim()) {
        errors.full_name = "Full name is required";
    }

    if (!form.username.trim()) {
        errors.username = "Username is required";
    }

    if (!form.email.trim()) {
        errors.email = "Email is required";
    } else if (
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
    ) {
        errors.email = "Invalid email address";
    }

    if (form.password.length < 8) {
        errors.password =
            "Password must be at least 8 characters";
    }

    if (form.password !== form.confirmPassword) {
        errors.confirmPassword =
            "Passwords do not match";
    }

    if (!form.terms) {
        errors.terms =
            "Accept Terms & Conditions";
    }

    return errors;

};