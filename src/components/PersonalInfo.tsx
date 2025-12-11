import { useFormContext } from "react-hook-form";
import { Inputs } from "../types";

export default function PersonalInfo() {
  const {
    register,
    formState: { errors },
  } = useFormContext<Inputs>();

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "1rem" }}>
      <h2>Step 1: Personal Information</h2>

      <div style={{ marginBottom: "1rem" }}>
        <label htmlFor="name">Name: *</label>
        <input
          type="text"
          id="name"
          {...register("name", {
            required: "Name is required",
            minLength: {
              value: 2,
              message: "Name must be at least 2 characters",
            },
          })}
          style={{ width: "100%", padding: "0.5rem", marginTop: "0.25rem" }}
        />
        {errors.name && (
          <span
            style={{ color: "red", display: "block", fontSize: "0.875rem" }}
          >
            {errors.name.message as string}
          </span>
        )}
      </div>

      <div style={{ marginBottom: "1rem" }}>
        <label htmlFor="lastName">Last Name: *</label>
        <input
          type="text"
          id="lastName"
          {...register("lastName", {
            required: "Last name is required",
            minLength: {
              value: 2,
              message: "Last name must be at least 2 characters",
            },
          })}
          style={{ width: "100%", padding: "0.5rem", marginTop: "0.25rem" }}
        />
        {errors.lastName && (
          <span
            style={{ color: "red", display: "block", fontSize: "0.875rem" }}
          >
            {errors.lastName.message as string}
          </span>
        )}
      </div>

      <div style={{ marginBottom: "1rem" }}>
        <label htmlFor="email">Email: *</label>
        <input
          type="email"
          id="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          })}
          style={{ width: "100%", padding: "0.5rem", marginTop: "0.25rem" }}
        />
        {errors.email && (
          <span
            style={{ color: "red", display: "block", fontSize: "0.875rem" }}
          >
            {errors.email.message as string}
          </span>
        )}
      </div>

      <div style={{ marginBottom: "1rem" }}>
        <label htmlFor="phone">Phone: *</label>
        <input
          type="tel"
          id="phone"
          {...register("phone", {
            required: "Phone is required",
            pattern: {
              value:
                /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,9}$/,
              message: "Invalid phone number",
            },
          })}
          style={{ width: "100%", padding: "0.5rem", marginTop: "0.25rem" }}
        />
        {errors.phone && (
          <span
            style={{ color: "red", display: "block", fontSize: "0.875rem" }}
          >
            {errors.phone.message as string}
          </span>
        )}
      </div>

      <div style={{ marginBottom: "1rem" }}>
        <label htmlFor="dateOfBirth">Date of Birth: *</label>
        <input
          type="date"
          id="dateOfBirth"
          {...register("dateOfBirth", {
            required: "Date of birth is required",
          })}
          style={{ width: "100%", padding: "0.5rem", marginTop: "0.25rem" }}
        />
        {errors.dateOfBirth && (
          <span
            style={{ color: "red", display: "block", fontSize: "0.875rem" }}
          >
            {errors.dateOfBirth.message as string}
          </span>
        )}
      </div>

      <div style={{ marginBottom: "1rem" }}>
        <label htmlFor="address">Address: *</label>
        <input
          type="text"
          id="address"
          {...register("address", {
            required: "Address is required",
            minLength: {
              value: 5,
              message: "Address must be at least 5 characters",
            },
          })}
          style={{ width: "100%", padding: "0.5rem", marginTop: "0.25rem" }}
        />
        {errors.address && (
          <span
            style={{ color: "red", display: "block", fontSize: "0.875rem" }}
          >
            {errors.address.message as string}
          </span>
        )}
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "1rem",
          marginBottom: "1rem",
        }}
      >
        <div>
          <label htmlFor="city">City: *</label>
          <input
            type="text"
            id="city"
            {...register("city", {
              required: "City is required",
            })}
            style={{ width: "100%", padding: "0.5rem", marginTop: "0.25rem" }}
          />
          {errors.city && (
            <span
              style={{ color: "red", display: "block", fontSize: "0.875rem" }}
            >
              {errors.city.message as string}
            </span>
          )}
        </div>

        <div>
          <label htmlFor="country">Country: *</label>
          <input
            type="text"
            id="country"
            {...register("country", {
              required: "Country is required",
            })}
            style={{ width: "100%", padding: "0.5rem", marginTop: "0.25rem" }}
          />
          {errors.country && (
            <span
              style={{ color: "red", display: "block", fontSize: "0.875rem" }}
            >
              {errors.country.message as string}
            </span>
          )}
        </div>
      </div>

      <div style={{ marginBottom: "1rem" }}>
        <label htmlFor="postalCode">Postal Code: *</label>
        <input
          type="text"
          id="postalCode"
          {...register("postalCode", {
            required: "Postal code is required",
            pattern: {
              value: /^[0-9A-Za-z\s-]{3,10}$/,
              message: "Invalid postal code",
            },
          })}
          style={{ width: "100%", padding: "0.5rem", marginTop: "0.25rem" }}
        />
        {errors.postalCode && (
          <span
            style={{ color: "red", display: "block", fontSize: "0.875rem" }}
          >
            {errors.postalCode.message as string}
          </span>
        )}
      </div>

      <div style={{ marginBottom: "1rem" }}>
        <label htmlFor="gender">Gender: *</label>
        <select
          id="gender"
          {...register("gender", {
            required: "Gender is required",
          })}
          style={{ width: "100%", padding: "0.5rem", marginTop: "0.25rem" }}
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
          <option value="prefer-not-to-say">Prefer not to say</option>
        </select>
        {errors.gender && (
          <span
            style={{ color: "red", display: "block", fontSize: "0.875rem" }}
          >
            {errors.gender.message as string}
          </span>
        )}
      </div>

      <div style={{ marginBottom: "1rem" }}>
        <label htmlFor="profilePhoto">Profile Photo:</label>
        <input
          type="file"
          id="profilePhoto"
          accept="image/*"
          {...register("profilePhoto")}
          style={{ width: "100%", padding: "0.5rem", marginTop: "0.25rem" }}
        />
        {errors.profilePhoto && (
          <span
            style={{ color: "red", display: "block", fontSize: "0.875rem" }}
          >
            {errors.profilePhoto.message as string}
          </span>
        )}
      </div>
    </div>
  );
}
