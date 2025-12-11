import { useFormContext, useFieldArray } from "react-hook-form";
import { Inputs } from "../types";
import styles from "../styles/Experience.module.css";

export default function Experience() {
  const {
    register,
    formState: { errors },
    control,
    watch,
  } = useFormContext<Inputs>();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "experience",
  });

  // Watch all isCurrent values to handle disabled state
  const watchedExperience = watch("experience");

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Step 3: Work Experience</h2>
      <p className={styles.subtitle}>
        Add your work experience. You can add multiple entries.
      </p>

      {fields.map((field, index) => {
        const isCurrent = watchedExperience?.[index]?.isCurrent || false;

        return (
          <div key={field.id} className={styles.entryCard}>
            <div className={styles.entryHeader}>
              <h3 className={styles.entryTitle}>
                Experience Entry #{index + 1}
              </h3>
              {fields.length > 1 && (
                <button
                  type="button"
                  onClick={() => remove(index)}
                  className={styles.removeButton}
                >
                  Remove
                </button>
              )}
            </div>

            <div className={styles.formGroup}>
              <label
                htmlFor={`experience.${index}.jobTitle`}
                className={styles.label}
              >
                Job Title: <span className={styles.required}>*</span>
              </label>
              <input
                type="text"
                id={`experience.${index}.jobTitle`}
                {...register(`experience.${index}.jobTitle`, {
                  required: "Job title is required",
                  minLength: {
                    value: 2,
                    message: "Job title must be at least 2 characters",
                  },
                })}
                placeholder="e.g., Software Developer, Marketing Manager"
                className={styles.input}
              />
              {errors.experience?.[index]?.jobTitle && (
                <span className={styles.error}>
                  {errors.experience[index]?.jobTitle?.message as string}
                </span>
              )}
            </div>

            <div className={styles.formGroup}>
              <label
                htmlFor={`experience.${index}.companyName`}
                className={styles.label}
              >
                Company Name: <span className={styles.required}>*</span>
              </label>
              <input
                type="text"
                id={`experience.${index}.companyName`}
                {...register(`experience.${index}.companyName`, {
                  required: "Company name is required",
                  minLength: {
                    value: 2,
                    message: "Company name must be at least 2 characters",
                  },
                })}
                className={styles.input}
              />
              {errors.experience?.[index]?.companyName && (
                <span className={styles.error}>
                  {errors.experience[index]?.companyName?.message as string}
                </span>
              )}
            </div>

            <div className={styles.formGroup}>
              <label
                htmlFor={`experience.${index}.employmentType`}
                className={styles.label}
              >
                Employment Type: <span className={styles.required}>*</span>
              </label>
              <select
                id={`experience.${index}.employmentType`}
                {...register(`experience.${index}.employmentType`, {
                  required: "Employment type is required",
                })}
                className={styles.select}
              >
                <option value="">Select Employment Type</option>
                <option value="full-time">Full-time</option>
                <option value="part-time">Part-time</option>
                <option value="contract">Contract</option>
                <option value="internship">Internship</option>
                <option value="freelance">Freelance</option>
              </select>
              {errors.experience?.[index]?.employmentType && (
                <span className={styles.error}>
                  {errors.experience[index]?.employmentType?.message as string}
                </span>
              )}
            </div>

            <div className={styles.dateGrid}>
              <div className={styles.dateGridItem}>
                <label
                  htmlFor={`experience.${index}.startDate`}
                  className={styles.label}
                >
                  Start Date: <span className={styles.required}>*</span>
                </label>
                <input
                  type="date"
                  id={`experience.${index}.startDate`}
                  {...register(`experience.${index}.startDate`, {
                    required: "Start date is required",
                  })}
                  className={styles.input}
                />
                {errors.experience?.[index]?.startDate && (
                  <span className={styles.error}>
                    {errors.experience[index]?.startDate?.message as string}
                  </span>
                )}
              </div>

              <div className={styles.dateGridItem}>
                <label
                  htmlFor={`experience.${index}.endDate`}
                  className={styles.label}
                >
                  End Date: <span className={styles.required}>*</span>
                </label>
                <input
                  type="date"
                  id={`experience.${index}.endDate`}
                  {...register(`experience.${index}.endDate`, {
                    required: !isCurrent ? "End date is required" : false,
                  })}
                  disabled={isCurrent}
                  className={styles.input}
                />
                {errors.experience?.[index]?.endDate && (
                  <span className={styles.error}>
                    {errors.experience[index]?.endDate?.message as string}
                  </span>
                )}
              </div>
            </div>

            <div className={styles.formGroup}>
              <label className={styles.checkboxGroup}>
                <input
                  type="checkbox"
                  {...register(`experience.${index}.isCurrent`)}
                  className={styles.checkbox}
                />
                <span className={styles.checkboxLabel}>
                  I currently work here
                </span>
              </label>
            </div>

            <div className={styles.formGroup}>
              <label
                htmlFor={`experience.${index}.location`}
                className={styles.label}
              >
                Location: <span className={styles.required}>*</span>
              </label>
              <input
                type="text"
                id={`experience.${index}.location`}
                {...register(`experience.${index}.location`, {
                  required: "Location is required",
                })}
                placeholder="e.g., Tbilisi, Georgia"
                className={styles.input}
              />
              {errors.experience?.[index]?.location && (
                <span className={styles.error}>
                  {errors.experience[index]?.location?.message as string}
                </span>
              )}
            </div>

            <div className={styles.formGroup}>
              <label
                htmlFor={`experience.${index}.description`}
                className={styles.label}
              >
                Description: <span className={styles.required}>*</span>
              </label>
              <textarea
                id={`experience.${index}.description`}
                {...register(`experience.${index}.description`, {
                  required: "Description is required",
                  minLength: {
                    value: 10,
                    message: "Description must be at least 10 characters",
                  },
                })}
                placeholder="Describe your responsibilities, achievements, projects, etc."
                rows={5}
                className={styles.textarea}
              />
              {errors.experience?.[index]?.description && (
                <span className={styles.error}>
                  {errors.experience[index]?.description?.message as string}
                </span>
              )}
            </div>

            <div className={styles.formGroup}>
              <label
                htmlFor={`experience.${index}.skillsUsed`}
                className={styles.label}
              >
                Skills Used: <span className={styles.required}>*</span>
              </label>
              <input
                type="text"
                id={`experience.${index}.skillsUsed`}
                {...register(`experience.${index}.skillsUsed`, {
                  required: "Skills used is required",
                })}
                placeholder="e.g., React, TypeScript, Node.js, Python"
                className={styles.input}
              />
              {errors.experience?.[index]?.skillsUsed && (
                <span className={styles.error}>
                  {errors.experience[index]?.skillsUsed?.message as string}
                </span>
              )}
            </div>
          </div>
        );
      })}

      <button
        type="button"
        onClick={() =>
          append({
            jobTitle: "",
            companyName: "",
            employmentType: "",
            startDate: "",
            endDate: "",
            isCurrent: false,
            location: "",
            description: "",
            skillsUsed: "",
          })
        }
        className={styles.addButton}
      >
        + Add Another Experience Entry
      </button>
    </div>
  );
}
