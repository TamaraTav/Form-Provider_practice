import { useFormContext } from "react-hook-form";
import { Inputs } from "../types";
import styles from "../styles/PersonalInfo.module.css";

export default function PersonalInfo() {
  const {
    register,
    formState: { errors },
  } = useFormContext<Inputs>();

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Step 1: Personal Information</h2>

      <div className={styles.formGroup}>
        <label htmlFor="name" className={styles.label}>
          Name: <span className={styles.required}>*</span>
        </label>
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
          className={styles.input}
        />
        {errors.name && (
          <span className={styles.error}>{errors.name.message as string}</span>
        )}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="lastName" className={styles.label}>
          Last Name: <span className={styles.required}>*</span>
        </label>
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
          className={styles.input}
        />
        {errors.lastName && (
          <span className={styles.error}>
            {errors.lastName.message as string}
          </span>
        )}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="email" className={styles.label}>
          Email: <span className={styles.required}>*</span>
        </label>
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
          className={styles.input}
        />
        {errors.email && (
          <span className={styles.error}>{errors.email.message as string}</span>
        )}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="phone" className={styles.label}>
          Phone: <span className={styles.required}>*</span>
        </label>
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
          className={styles.input}
        />
        {errors.phone && (
          <span className={styles.error}>{errors.phone.message as string}</span>
        )}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="dateOfBirth" className={styles.label}>
          Date of Birth: <span className={styles.required}>*</span>
        </label>
        <input
          type="date"
          id="dateOfBirth"
          {...register("dateOfBirth", {
            required: "Date of birth is required",
          })}
          className={styles.input}
        />
        {errors.dateOfBirth && (
          <span className={styles.error}>
            {errors.dateOfBirth.message as string}
          </span>
        )}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="address" className={styles.label}>
          Address: <span className={styles.required}>*</span>
        </label>
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
          className={styles.input}
        />
        {errors.address && (
          <span className={styles.error}>
            {errors.address.message as string}
          </span>
        )}
      </div>

      <div className={styles.grid}>
        <div className={styles.gridItem}>
          <label htmlFor="city" className={styles.label}>
            City: <span className={styles.required}>*</span>
          </label>
          <input
            type="text"
            id="city"
            {...register("city", {
              required: "City is required",
            })}
            className={styles.input}
          />
          {errors.city && (
            <span className={styles.error}>
              {errors.city.message as string}
            </span>
          )}
        </div>

        <div className={styles.gridItem}>
          <label htmlFor="country" className={styles.label}>
            Country: <span className={styles.required}>*</span>
          </label>
          <input
            type="text"
            id="country"
            {...register("country", {
              required: "Country is required",
            })}
            className={styles.input}
          />
          {errors.country && (
            <span className={styles.error}>
              {errors.country.message as string}
            </span>
          )}
        </div>
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="postalCode" className={styles.label}>
          Postal Code: <span className={styles.required}>*</span>
        </label>
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
          className={styles.input}
        />
        {errors.postalCode && (
          <span className={styles.error}>
            {errors.postalCode.message as string}
          </span>
        )}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="gender" className={styles.label}>
          Gender: <span className={styles.required}>*</span>
        </label>
        <select
          id="gender"
          {...register("gender", {
            required: "Gender is required",
          })}
          className={styles.select}
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
          <option value="prefer-not-to-say">Prefer not to say</option>
        </select>
        {errors.gender && (
          <span className={styles.error}>
            {errors.gender.message as string}
          </span>
        )}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="profilePhoto" className={styles.label}>
          Profile Photo:
        </label>
        <input
          type="file"
          id="profilePhoto"
          accept="image/*"
          {...register("profilePhoto")}
          className={styles.fileInput}
        />
        {errors.profilePhoto && (
          <span className={styles.error}>
            {errors.profilePhoto.message as string}
          </span>
        )}
      </div>
    </div>
  );
}
